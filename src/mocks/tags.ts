import {faker} from '@faker-js/faker'
import {Tag} from '@/types/forum.ts'

export const createFakeTag = () : Tag => ({
    _id: faker.string.uuid(),
    name: faker.word.noun({length: {min: 3, max: 15}}).toUpperCase(),
    description: faker.word.words(),
    posts: [],
    followers: [],
    createdAt: faker.date.recent({days: 365})
})
