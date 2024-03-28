export type Prettify<T> = {
    [K in keyof T]: T[K];
} & unknown

export type Language = {
    name: string
    nativeName: string
    code: string
    dir: 'ltr' | 'rtl'
}

export type User = {
    _id: string
    firstName: string
    lastName: string
    username: string
    image?: string
    email: string
}
