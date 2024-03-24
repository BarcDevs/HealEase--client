import {faker} from '@faker-js/faker'
import {User} from '@/types'

export const createFakeUser = () : User => ({
    _id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email()
})
