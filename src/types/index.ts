import { ComponentProps } from 'react'

export type Prettify<T> = {
    [K in keyof T]: T[K];
} & unknown

export type Language = {
    name: string
    nativeName: string
    code: string
    dir: 'ltr' | 'rtl'
}

export type Role = 'USER' | 'ADMIN'

export type User = {
    id: string
    firstName: string
    lastName: string
    username: string
    image?: string
    email: string
    role: Role
}

export type PartialUser = {
    id: string
    firstName: string
    lastName: string
    username: string
    image?: string
}

export type InputProps = ComponentProps<'input'>