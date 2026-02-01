import {
    beforeEach,
    describe,
    expect,
    it,
    vi
} from 'vitest'

import { render, screen } from '@testing-library/react'

const {
    mockNavigate,
    mockSubmitForm,
    mockUseLoaderData
} = vi.hoisted(() => ( {
    mockNavigate: vi.fn(),
    mockSubmitForm: vi.fn(),
    mockUseLoaderData: vi.fn()
} ))

vi.mock(
    '@/config/schema/postForm.ts',
    () => ( {
        default: {
            title: {
                minLength: 5,
                maxLength: 100
            },
            body: {
                minLength: 20,
                maxLength: 300
            },
            tags: {
                max: 3,
                minLength: 3,
                maxLength: 15
            }
        }
    } ))

vi.mock(
    '@/data/forum/categories.ts',
    () => ( {
        default: [
            {
                key: 'fractures',
                name: 'Fractures'
            },
            {
                key: 'surgery',
                name: 'Surgery Recovery'
            }
        ]
    } ))

vi.mock(
    '@tanstack/react-router',
    () => ( {
        useNavigate: () => mockNavigate,
        getRouteApi: () => ( {
            useLoaderData: mockUseLoaderData
        } )
    } ))

vi.mock(
    '@/handlers/actions/forum.ts',
    () => ( {
        submitForm: mockSubmitForm
    } ))

vi.mock(
    '@/lib/isPostData.ts',
    () => ( {
        isPostData: (data: any) =>
            data &&
            data.title &&
            data.body
    } ))

vi.mock(
    '@/components/shared/form/FormInput.tsx',
    () => ( {
        default: ({
            name,
            label,
            placeholder,
            type
        }: any) => (
            <div>
                <label htmlFor={name}>
                    {label}
                </label>
                {type === 'editor' ? (
                    <textarea
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        data-testid={`input-${name}`}
                    />
                ) : (
                    <input
                        id={name}
                        name={name}
                        placeholder={placeholder}
                        data-testid={`input-${name}`}
                    />
                )}
            </div>
        )
    } ))

vi.mock(
    '@/components/shared/form/SelectInput.tsx',
    () => ( {
        default: ({
            name,
            label,
            placeholder,
            values
        }: any) => (
            <div>
                <label htmlFor={name}>
                    {label}
                </label>
                <select
                    id={name}
                    name={name}
                    data-testid={`select-${name}`}
                >
                    <option value={''}>
                        {placeholder}
                    </option>
                    {Object.entries(values).map(([key, value]) => (
                        <option
                            key={key}
                            value={key}
                        >
                            {value as string}
                        </option>
                    ))}
                </select>
            </div>
        )
    } ))

vi.mock(
    '@/components/shared/form/TagInput.tsx',
    () => ( {
        default: ({
            name,
            label,
            placeholder,
            max
        }: any) => (
            <div>
                <label htmlFor={name}>
                    {label}
                </label>
                <input
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    data-testid={`input-${name}`}
                    data-max={max}
                />
            </div>
        )
    } ))

vi.mock(
    '@/components/ui/button.tsx',
    () => ( {
        Button: ({
            children,
            type,
            className
        }: any) => (
            <button
                type={type}
                className={className}
            >
                {children}
            </button>
        )
    } ))

vi.mock(
    '@/components/ui/form.tsx',
    () => ( {
        Form: ({ children }: any) => (
            <div>
                {children}
            </div>
        )
    } ))

vi.mock(
    '@/lib/styles.ts',
    () => ( {
        default: { button: 'btn-style' }
    } ))

vi.mock(
    '@/constants/headlines.ts',
    () => ( {
        HEADLINES: {
            createPost: 'Create Post',
            editPost: 'Edit Post'
        }
    } ))

vi.mock(
    '@/constants/plainTexts.ts',
    () => ( {
        BUTTONS: {
            createPost: 'Create Post',
            updatePost: 'Update Post',
            deletePost: 'Delete Post'
        }
    } ))

import PostForm from '@/components/forum/PostForm'

describe('PostForm',
    () => {
        beforeEach(() => {
            vi.clearAllMocks()
            mockUseLoaderData.mockReturnValue(undefined)
        })

        describe('create mode',
            () => {
                it(
                    'should render create post heading',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(
                            screen.getByRole(
                                'heading',
                                { name: 'Create Post' }
                            )
                        ).toBeInTheDocument()
                    })

                it(
                    'should render all form fields',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(screen.getByTestId('select-category'))
                            .toBeInTheDocument()
                        expect(screen.getByTestId('input-title'))
                            .toBeInTheDocument()
                        expect(screen.getByTestId('input-body'))
                            .toBeInTheDocument()
                        expect(screen.getByTestId('input-tags'))
                            .toBeInTheDocument()
                    })

                it(
                    'should render Create Post button',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(
                            screen.getByRole(
                                'button',
                                { name: 'Create Post' }
                            )
                        ).toBeInTheDocument()
                    })

                it(
                    'should not render delete button in create mode',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(
                            screen.queryByRole(
                                'button',
                                { name: 'Delete Post' }
                            )
                        ).not.toBeInTheDocument()
                    })

                it(
                    'should render category label',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(screen.getByText('Category'))
                            .toBeInTheDocument()
                    })

                it(
                    'should render title label',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(screen.getByText('Title'))
                            .toBeInTheDocument()
                    })

                it(
                    'should render text/body label',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(screen.getByText('Text'))
                            .toBeInTheDocument()
                    })

                it(
                    'should render tags label',
                    () => {
                        render(<PostForm type={'create'}/>)

                        expect(screen.getByText('Tags'))
                            .toBeInTheDocument()
                    })
            })

        describe('edit mode',
            () => {
                const existingPost = {
                    id: 'post-123',
                    category: 'fractures',
                    title: 'Existing Title',
                    body: 'Existing body content',
                    tags: [
                        { id: 't1', name: 'TAG1' },
                        { id: 't2', name: 'TAG2' }
                    ]
                }

                beforeEach(() => {
                    mockUseLoaderData.mockReturnValue(existingPost)
                })

                it(
                    'should render edit post heading',
                    () => {
                        render(<PostForm type={'edit'}/>)

                        expect(screen.getByText('Edit Post'))
                            .toBeInTheDocument()
                    })

                it(
                    'should render Update Post button',
                    () => {
                        render(<PostForm type={'edit'}/>)

                        expect(
                            screen.getByRole(
                                'button',
                                { name: 'Update Post' }
                            )
                        ).toBeInTheDocument()
                    })

                it(
                    'should render delete button in edit mode',
                    () => {
                        render(<PostForm type={'edit'}/>)

                        expect(
                            screen.getByRole(
                                'button',
                                { name: 'Delete Post' }
                            )
                        ).toBeInTheDocument()
                    })

                it(
                    'should render all form fields in edit mode',
                    () => {
                        render(<PostForm type={'edit'}/>)

                        expect(screen.getByTestId('select-category'))
                            .toBeInTheDocument()
                        expect(screen.getByTestId('input-title'))
                            .toBeInTheDocument()
                        expect(screen.getByTestId('input-body'))
                            .toBeInTheDocument()
                        expect(screen.getByTestId('input-tags'))
                            .toBeInTheDocument()
                    })
            })

        describe('form structure',
            () => {
                it(
                    'should render submit button with correct type',
                    () => {
                        render(<PostForm type={'create'}/>)

                        const submitButton = screen.getByRole(
                            'button',
                            { name: 'Create Post' }
                        )
                        expect(submitButton)
                            .toHaveAttribute(
                                'type',
                                'submit'
                            )
                    })

                it(
                    'should render delete button with correct type in edit mode',
                    () => {
                        const existingPost = {
                            id: 'post-123',
                            category: 'fractures',
                            title: 'Title',
                            body: 'Body',
                            tags: []
                        }
                        mockUseLoaderData
                            .mockReturnValue(existingPost)

                        render(<PostForm type={'edit'}/>)

                        const deleteButton = screen.getByRole(
                            'button',
                            { name: 'Delete Post' }
                        )
                        expect(deleteButton)
                            .toHaveAttribute(
                                'type',
                                'button'
                            )
                    })

                it(
                    'should render body field as textarea (editor)',
                    () => {
                        render(<PostForm type={'create'}/>)

                        const bodyField = screen
                            .getByTestId('input-body')
                        expect(bodyField.tagName
                            .toLowerCase()).toBe('textarea')
                    })

                it(
                    'should render title field as input',
                    () => {
                        render(<PostForm type={'create'}/>)

                        const titleField = screen
                            .getByTestId('input-title')
                        expect(titleField.tagName
                            .toLowerCase()).toBe('input')
                    })
            })
    })
