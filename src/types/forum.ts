import {Prettify, User} from '@/types/index.ts'

type Post_Base = {
    id: string
    body: string
    createdAt: Date
    votes: {
        positive: number
        negative: number
    }
    author: User
}

export type Post = Prettify<{
    title: string
    replies: Reply[] | string[]
    views: number
    tags: Tag[]
    category: string
} & Post_Base>

export type Reply = Prettify<Post_Base>

export type Tag = {
    id: string
    name: string
    description: string
    posts: Post[] | string
    followers: User[] | string
    createdAt: Date
}
