import {
    beforeEach,
    describe,
    expect,
    it,
    vi
} from 'vitest'

import { render, screen } from '@testing-library/react'

const {
    mockRegister,
    mockNavigate
} = vi.hoisted(() => ( {
    mockRegister: vi.fn(),
    mockNavigate: vi.fn()
} ))

vi.mock(
    '@/hooks/useAuth.ts',
    () => ( {
        useAuth: () => ( {
            register: mockRegister
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
        useNavigate: () => mockNavigate
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
                    type={
                        type === 'password' ?
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
        default: {
            button: 'btn-style'
        }
    } ))

vi.mock(
    '@/constants/plainTexts.ts',
    () => ( {
        BUTTONS: { signUp: 'Sign Up' },
        FIELDS: { forgotPassword: 'Forgot your password?' }
    } ))

import SignupForm from '@/components/auth/SignupForm'

describe('SignupForm',
    () => {
        beforeEach(() => {
            vi.clearAllMocks()
        })

        it(
            'should render signup form with all fields',
            () => {
                render(<SignupForm/>)

                expect(screen.getByTestId('input-firstName'))
                    .toBeInTheDocument()
                expect(screen.getByTestId('input-lastName'))
                    .toBeInTheDocument()
                expect(screen.getByTestId('input-email'))
                    .toBeInTheDocument()
                expect(screen.getByTestId('input-password'))
                    .toBeInTheDocument()
                expect(screen.getByTestId('input-confirmPassword'))
                    .toBeInTheDocument()
                expect(
                    screen.getByRole(
                        'button',
                        { name: 'Sign Up' }
                    )
                ).toBeInTheDocument()
            })

        it(
            'should render forgot password link',
            () => {
                render(<SignupForm/>)

                const forgotLink = screen
                    .getByText('Forgot your password?')
                expect(forgotLink)
                    .toBeInTheDocument()
                expect(forgotLink.closest('a'))
                    .toHaveAttribute(
                        'href',
                        '/forgot-password'
                    )
            })

        it(
            'should render first name field with correct placeholder',
            () => {
                render(<SignupForm/>)

                const firstNameInput = screen
                    .getByTestId('input-firstName')
                expect(firstNameInput)
                    .toHaveAttribute(
                        'placeholder',
                        'Lee'
                    )
            })

        it(
            'should render last name field with correct placeholder',
            () => {
                render(<SignupForm/>)

                const lastNameInput = screen
                    .getByTestId('input-lastName')
                expect(lastNameInput)
                    .toHaveAttribute(
                        'placeholder',
                        'Robinson'
                    )
            })

        it(
            'should render email field with correct placeholder',
            () => {
                render(<SignupForm/>)

                const emailInput = screen
                    .getByTestId('input-email')
                expect(emailInput)
                    .toHaveAttribute(
                        'placeholder',
                        'm@example.com'
                    )
            })

        it(
            'should render password fields with correct type',
            () => {
                render(<SignupForm/>)

                expect(screen.getByTestId('input-password'))
                    .toHaveAttribute('type', 'password')
                expect(screen.getByTestId('input-confirmPassword'))
                    .toHaveAttribute('type', 'password')
            })

        it(
            'should render submit button with correct text',
            () => {
                render(<SignupForm/>)

                const submitButton = screen
                    .getByRole(
                        'button',
                        { name: 'Sign Up' }
                    )
                expect(submitButton)
                    .toHaveAttribute('type', 'submit')
            })

        it(
            'should render labels for all fields',
            () => {
                render(<SignupForm/>)

                expect(screen.getByText('First name'))
                    .toBeInTheDocument()
                expect(screen.getByText('Last name'))
                    .toBeInTheDocument()
                expect(screen.getByText('Email'))
                    .toBeInTheDocument()
                expect(screen.getByText('Password'))
                    .toBeInTheDocument()
                expect(screen.getByText('Confirm Password'))
                    .toBeInTheDocument()
            })
    })
