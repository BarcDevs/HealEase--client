export type Language = {
    name: string
    nativeName: string
    code: string
    dir: 'ltr' | 'rtl'
}

export type User = {
    _id: string
    name: string
    image: string
    email: string
}
