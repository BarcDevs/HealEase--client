import {
    beforeEach,
    describe,
    expect,
    it,
    vi
} from 'vitest'

import { render, screen } from '@testing-library/react'

import { Reply } from '@/types/forum'

vi.mock(
    '@/components/forum/PostCard.tsx',
    () => ( {
        default: ({
            type,
            reply
        }: any) => (
            <div
                data-testid={'post-card'}
                data-type={type}
            >
                {reply.body}
            </div>
        )
    } ))

import Replies from '@/components/forum/Replies'

describe(
    'Replies',
    () => {
        const mockAuthor = {
            id: 'author-1',
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john@example.com'
        }

        const createMockReply = (
            id: string,
            body: string
        ): Reply => ( {
            id,
            body,
            createdAt: new Date('2025-01-01'),
            updatedAt: null,
            authorId: 'author-1',
            author: mockAuthor,
            votes: {
                upvotes: 5,
                downvotes: 1,
                upvotedBy: [],
                downvotedBy: []
            }
        } )

        beforeEach(() => {
            vi.clearAllMocks()
        })

        it(
            'should render reply count text',
            () => {
                const replies = [
                    createMockReply('1', 'First reply'),
                    createMockReply('2', 'Second reply')
                ]

                render(<Replies replies={replies}/>)

                expect(screen.getByText('2 Replies'))
                    .toBeInTheDocument()
            })

        it(
            'should render singular "1 Replies" for single reply',
            () => {
                const replies = [
                    createMockReply('1', 'Only reply')
                ]

                render(<Replies replies={replies}/>)

                expect(screen.getByText('1 Replies'))
                    .toBeInTheDocument()
            })

        it(
            'should render "0 Replies" for empty array',
            () => {
                render(<Replies replies={[]}/>)

                expect(screen.getByText('0 Replies'))
                    .toBeInTheDocument()
            })

        it(
            'should render PostCard for each reply',
            () => {
                const replies = [
                    createMockReply('1', 'First reply body'),
                    createMockReply('2', 'Second reply body'),
                    createMockReply('3', 'Third reply body')
                ]

                render(<Replies replies={replies}/>)

                const postCards =
                    screen.getAllByTestId('post-card')
                expect(postCards).toHaveLength(3)
            })

        it(
            'should pass correct props to PostCard',
            () => {
                const replies = [
                    createMockReply('1', 'Test reply content')
                ]

                render(<Replies replies={replies}/>)

                const postCard =
                    screen.getByTestId('post-card')
                expect(postCard)
                    .toHaveAttribute('data-type', 'reply')
                expect(postCard)
                    .toHaveTextContent('Test reply content')
            })

        it(
            'should render replies in order',
            () => {
                const replies = [
                    createMockReply('1', 'First'),
                    createMockReply('2', 'Second'),
                    createMockReply('3', 'Third')
                ]

                render(<Replies replies={replies}/>)

                const postCards = screen.getAllByTestId('post-card')
                expect(postCards[ 0 ]).toHaveTextContent('First')
                expect(postCards[ 1 ]).toHaveTextContent('Second')
                expect(postCards[ 2 ]).toHaveTextContent('Third')
            })

        it(
            'should render inside section element',
            () => {
                const replies = [
                    createMockReply('1', 'Reply')
                ]

                const { container } = render(
                    <Replies replies={replies}/>
                )

                expect(
                    container.querySelector('section')
                )
                    .toBeInTheDocument()
            })

        it(
            'should render replies inside ordered list',
            () => {
                const replies = [
                    createMockReply('1', 'Reply')
                ]

                const { container } = render(
                    <Replies replies={replies}/>
                )

                expect(container.querySelector('ol'))
                    .toBeInTheDocument()
            })

        it(
            'should render each reply in list item',
            () => {
                const replies = [
                    createMockReply('1', 'First'),
                    createMockReply('2', 'Second')
                ]

                const { container } = render(
                    <Replies replies={replies}/>
                )

                const listItems =
                    container.querySelectorAll('li')
                expect(listItems).toHaveLength(2)
            })
    })
