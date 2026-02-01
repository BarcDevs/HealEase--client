import {
    beforeEach,
    describe,
    expect,
    it,
    vi
} from 'vitest'

import { render, screen } from '@testing-library/react'

import { Post, Reply } from '@/types/forum'

vi.mock(
    '@tanstack/react-router',
    () => ( {
        Link: ({
            children,
            to,
            params
        }: any) => (
            <a href={
                `${to}${params ?
                    `/${Object.values(params).join('/')}` :
                    ''}`}
            >
                {children}
            </a>
        )
    } ))

vi.mock(
    '@/components/forum/Tag.tsx',
    () => ( {
        default: ({ tag }: any) => (
            <span data-testid={'tag'}>
                {tag.name}
            </span>
        )
    } ))

vi.mock(
    '@/components/shared/ui/Metric.tsx',
    () => ( {
        default: ({
            image,
            title,
            value
        }: any) => (
            <div data-testid={`metric-${image}`}>
                {title}: {value}
            </div>
        )
    } ))

vi.mock(
    '@/components/shared/ui/UserLabel.tsx',
    () => ( {
        default: ({ user }: any) => (
            <span data-testid={'user-label'}>
                {user.firstName} {user.lastName}
            </span>
        )
    } ))

vi.mock(
    '@/components/ui/card.tsx',
    () => ( {
        Card: ({
            children,
            className
        }: any) => (
            <div className={className}>
                {children}
            </div>
        ),
        CardHeader: ({
            children,
            className
        }: any) => (
            <div className={className}>
                {children}
            </div>
        ),
        CardContent: ({
            children,
            className
        }: any) => (
            <div className={className}>
                {children}
            </div>
        ),
        CardFooter: ({
            children,
            className
        }: any) => (
            <div className={className}>
                {children}
            </div>
        )
    } ))

vi.mock(
    '@/lib/time.ts',
    () => ( {
        toRelative: () => '2 days ago',
        toShortNumber: (num: number) => num.toString()
    } ))

import PostCard from '@/components/forum/PostCard'

describe(
    'PostCard',
    () => {
        const mockAuthor = {
            id: 'author-1',
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john@example.com'
        }

        const mockPost: Post = {
            id: 'post-1',
            title: 'Test Post Title',
            body: 'Test post body content',
            category: 'fractures',
            createdAt: new Date('2025-01-01'),
            updatedAt: null,
            authorId: 'author-1',
            author: mockAuthor,
            views: 100,
            replies: [],
            tags: [
                {
                    id: 'tag-1',
                    name: 'RECOVERY'
                },
                {
                    id: 'tag-2',
                    name: 'HELP'
                }
            ],
            votes: {
                upvotes: 10,
                downvotes: 2,
                upvotedBy: [],
                downvotedBy: []
            },
            _count: {
                replies: 5
            }
        }

        const mockReply: Reply = {
            id: 'reply-1',
            body: 'This is a reply body',
            createdAt: new Date('2025-01-02'),
            updatedAt: null,
            authorId: 'author-1',
            author: mockAuthor,
            votes: {
                upvotes: 5,
                downvotes: 1,
                upvotedBy: [],
                downvotedBy: []
            }
        }

        beforeEach(() => {
            vi.clearAllMocks()
        })

        describe('when rendering a post',
            () => {
                it(
                    'should render post title as link',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        const titleLink = screen
                            .getByText('Test Post Title')
                        expect(titleLink).toBeInTheDocument()
                        expect(titleLink.closest('a'))
                            .toHaveAttribute(
                                'href',
                                '/forum/posts/$postId/post-1'
                            )
                    })

                it(
                    'should render all tags',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        const tags =
                            screen.getAllByTestId('tag')
                        expect(tags).toHaveLength(2)
                        expect(tags[ 0 ]).toHaveTextContent('RECOVERY')
                        expect(tags[ 1 ]).toHaveTextContent('HELP')
                    })

                it(
                    'should render user label with author info',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        expect(
                            screen.getByTestId('user-label')
                        ).toHaveTextContent('John Doe')
                    })

                it(
                    'should render relative time',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        expect(
                            screen.getByText(/posted 2 days ago/)
                        ).toBeInTheDocument()
                    })

                it(
                    'should render votes metric',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        const votesMetric =
                            screen.getByTestId('metric-like')
                        expect(votesMetric)
                            .toHaveTextContent('Votes: 8')
                    })

                it(
                    'should render replies metric',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        const repliesMetric =
                            screen.getByTestId('metric-message')
                        expect(repliesMetric)
                            .toHaveTextContent('Replies: 5')
                    })

                it(
                    'should render views metric',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        const viewsMetric =
                            screen.getByTestId('metric-eye')
                        expect(viewsMetric)
                            .toHaveTextContent('Views: 100')
                    })

                it(
                    'should link to author profile',
                    () => {
                        render(
                            <PostCard
                                type={'post'}
                                post={mockPost}
                            />
                        )

                        const profileLink =
                            screen
                                .getByTestId('user-label')
                                .closest('a')
                        expect(profileLink).toHaveAttribute(
                            'href',
                            '/forum/profile/$authorId/author-1'
                        )
                    })
            })

        describe('when rendering a reply',
            () => {
                it(
                    'should not render title',
                    () => {
                        render(
                            <PostCard
                                type={'reply'}
                                reply={mockReply}
                            />
                        )

                        expect(
                            screen.queryByRole('heading')
                        ).not.toBeInTheDocument()
                    })

                it(
                    'should render reply body',
                    () => {
                        render(
                            <PostCard
                                type={'reply'}
                                reply={mockReply}
                            />
                        )

                        expect(
                            screen.getByText(
                                'This is a reply body'
                            )
                        ).toBeInTheDocument()
                    })

                it(
                    'should not render tags',
                    () => {
                        render(
                            <PostCard
                                type={'reply'}
                                reply={mockReply}
                            />
                        )

                        expect(
                            screen.queryByTestId('tag')
                        ).not.toBeInTheDocument()
                    })

                it(
                    'should render votes metric',
                    () => {
                        render(
                            <PostCard
                                type={'reply'}
                                reply={mockReply}
                            />
                        )

                        const votesMetric =
                            screen.getByTestId('metric-like')
                        expect(votesMetric)
                            .toHaveTextContent('Votes: 4')
                    })

                it(
                    'should not render replies metric',
                    () => {
                        render(<PostCard
                            type={'reply'}
                            reply={mockReply}
                        />)

                        expect(screen
                            .queryByTestId('metric-message'))
                            .not.toBeInTheDocument()
                    })

                it(
                    'should not render views metric',
                    () => {
                        render(
                            <PostCard
                                type={'reply'}
                                reply={mockReply}
                            />
                        )

                        expect(
                            screen.queryByTestId('metric-eye')
                        ).not.toBeInTheDocument()
                    })

                it(
                    'should render user label with author info',
                    () => {
                        render(
                            <PostCard
                                type={'reply'}
                                reply={mockReply}
                            />
                        )

                        expect(
                            screen.getByTestId('user-label')
                        ).toHaveTextContent('John Doe')
                    })
            })

        describe('edge cases',
            () => {
                it(
                    'should handle post without author',
                    () => {
                        const postWithoutAuthor = {
                            ...mockPost,
                            author: undefined
                        }
                        render(
                            <PostCard
                                type={'post'}
                                post={postWithoutAuthor}
                            />)

                        expect(
                            screen.queryByTestId('user-label')
                        ).not.toBeInTheDocument()
                    })

                it(
                    'should handle post with zero replies',
                    () => {
                        const postNoReplies = {
                            ...mockPost,
                            _count: { replies: 0 }
                        }
                        render(
                            <PostCard
                                type={'post'}
                                post={postNoReplies}
                            />
                        )

                        const repliesMetric =
                            screen.getByTestId('metric-message')
                        expect(repliesMetric)
                            .toHaveTextContent('Replies: 0')
                    })

                it(
                    'should handle post with no _count',
                    () => {
                        const postNoCount = {
                            ...mockPost,
                            _count: undefined
                        }
                        render(
                            <PostCard
                                type={'post'}
                                post={postNoCount}
                            />
                        )

                        const repliesMetric =
                            screen.getByTestId('metric-message')
                        expect(repliesMetric)
                            .toHaveTextContent('Replies: 0')
                    })

                it(
                    'should handle negative vote balance',
                    () => {
                        const postNegativeVotes = {
                            ...mockPost,
                            votes: {
                                upvotes: 2,
                                downvotes: 10,
                                upvotedBy: [],
                                downvotedBy: []
                            }
                        }
                        render(
                            <PostCard
                                type={'post'}
                                post={postNegativeVotes}
                            />
                        )

                        const votesMetric =
                            screen.getByTestId('metric-like')
                        expect(votesMetric)
                            .toHaveTextContent('Votes: -8')
                    })
            })
    })
