import {
    beforeEach,
    describe,
    expect,
    it,
    vi
} from 'vitest'

import { render, screen } from '@testing-library/react'

const {
    mockLogin,
    mockNavigate,
    mockUseSearch
} = vi.hoisted(() => ( {
    mockLogin: vi.fn(),
    mockNavigate: vi.fn(),
    mockUseSearch: vi.fn()
} ))

vi.mock(
    '@/hooks/useAuth.ts',
    () => ( {
        useAuth: () => ( {
            login: mockLogin
        } )
    } ))

vi.mock(
    '@tanstack/react-router',
    () => ( {
        Link: ({
            children,
            to
        }: {
            children: React.ReactNode;
            to: string
        }) => (
            <a href={to}>
                {children}
            </a>
        ),
        useNavigate: () => mockNavigate,
        getRouteApi: () => ( {
            useSearch: mockUseSearch
        } )
    } ))

vi.mock(
    '@/components/shared/Error.tsx',
    () => ( {
        default: ({ error }: { error: string }) => (
            <div data-testid={'error'}>
                {error}
            </div>
        )
    } ))

vi.mock(
    '@/components/shared/form/FormInput.tsx',
    () => ( {
        default: ({
            name,
            label,
            type,
            placeholder,
            secondaryLabel
        }: any) => (
            <div>
                <label htmlFor={name}>
                    {label}
                </label>
                {secondaryLabel}
                <input
                    id={name}
                    name={name}
                    type={type === 'password' ?
                        'password' :
                        'text'
                    }
                    placeholder={placeholder}
                    data-testid={`input-${name}`}
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
    '@/components/ui/checkbox.tsx',
    () => ( {
        Checkbox: ({
            id,
            checked,
            onCheckedChange
        }: any) => (
            <input
                type={'checkbox'}
                id={id}
                data-testid={`checkbox-${id}`}
                checked={checked}
                onChange={(e) => onCheckedChange(
                    e.target.checked
                )}
            />
        )
    } ))

vi.mock(
    '@/components/ui/form.tsx',
    () => ( {
        Form: ({ children }: any) => (
            <div>
                {children}
            </div>
        ),
        FormField: ({ render }: any) => {
            const field = {
                value: false,
                onChange: vi.fn()
            }
            return render({ field })
        },
        FormItem: ({
            children,
            className
        }: any) => (
            <div className={className}>
                {children}
            </div>
        ),
        FormLabel: ({
            children,
            htmlFor
        }: any) => (
            <label htmlFor={htmlFor}>
                {children}
            </label>
        )
    } ))

vi.mock(
    '@/lib/styles.ts',
    () => ( {
        default: {
            button: 'btn-style'
        }
    } ))

vi.mock(
    '@/constants/plainTexts.ts',
    () => ( {
        BUTTONS: {
            login: 'Login'
        },
        FIELDS: {
            forgotPassword: 'Forgot your password?',
            remember: 'Remember Me'
        }
    } ))

import LoginForm from '@/components/auth/LoginForm'

describe('LoginForm',
    () => {
        beforeEach(() => {
            vi.clearAllMocks()
            mockUseSearch.mockReturnValue({})
        })

        it(
            'should render login form with all fields',
            () => {
                render(<LoginForm/>)

                expect(screen.getByTestId(
                    'input-email'
                )).toBeInTheDocument()
                expect(screen.getByTestId(
                    'input-password'
                )).toBeInTheDocument()
                expect(screen.getByTestId(
                    'checkbox-remember'
                )).toBeInTheDocument()
                expect(screen.getByRole(
                    'button',
                    { name: 'Login' }
                )).toBeInTheDocument()
            })

        it(
            'should render forgot password link',
            () => {
                render(<LoginForm/>)

                const forgotLink = screen.getByText(
                    'Forgot your password?'
                )
                expect(forgotLink).toBeInTheDocument()
                expect(forgotLink.closest('a'))
                    .toHaveAttribute(
                        'href',
                        '/forgot-password'
                    )
            })

        it(
            'should render email field with correct placeholder',
            () => {
                render(<LoginForm/>)

                const emailInput = screen
                    .getByTestId('input-email')
                expect(emailInput).toHaveAttribute(
                    'placeholder',
                    'm@example.com'
                )
            })

        it(
            'should render password field with correct type',
            () => {
                render(<LoginForm/>)

                const passwordInput = screen
                    .getByTestId('input-password')
                expect(passwordInput).toHaveAttribute(
                    'type',
                    'password'
                )
            })

        it(
            'should render remember me checkbox',
            () => {
                render(<LoginForm/>)

                expect(screen.getByTestId(
                    'checkbox-remember'
                )).toBeInTheDocument()
                expect(screen.getByText(
                    'Remember Me'
                )).toBeInTheDocument()
            })

        it(
            'should render submit button with correct text',
            () => {
                render(<LoginForm/>)

                const submitButton = screen.getByRole(
                    'button',
                    { name: 'Login' }
                )
                expect(submitButton).toHaveAttribute(
                    'type',
                    'submit'
                )
            })

        it(
            'should use redirect from search params if provided',
            () => {
                mockUseSearch.mockReturnValue({
                    redirect: '/dashboard'
                })

                render(<LoginForm/>)

                expect(mockUseSearch).toHaveBeenCalled()
            })
    })
