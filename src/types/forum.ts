import {User} from '@/types/index.ts'

type Post_Base = {
    _id: string
    body: string
    createdAt: Date
    votes: {
        positive: number
        negative: number
    }
    author: User
}

export type Post = {
    title: string
    replies: Reply[] | string[]
    views: number
    tags: Tag[]
    category: string
} & Post_Base

export type Reply = Post_Base

export type Tag = {
    _id: string
    name: string
    description: string
    posts: Post[] | string
    followers: User[] | string
    createdAt: Date
}
