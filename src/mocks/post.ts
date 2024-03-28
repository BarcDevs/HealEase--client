import {faker} from '@faker-js/faker'
import categories from '@/data/forum/categories'
import {Post} from '@/types/forum.ts'
import {createFakeUser} from '@/mocks/users.ts'
import {createFakeTag} from '@/mocks/tags.ts'

// export const posts: Post[] = [
//     {
//         id: 'post1',
//         title: 'Is it Normal to Experience Dizziness After Taking Medication?',
//         body: 'I recently started a new medication, and I\'ve been feeling dizzy ever since. Is this a common side effect, or should I be concerned?',
//         tags: [{id: 'tag1', name: 'medication'},
//             {id: 'tag2', name: 'side effects'},
//             {id: 'tag3', name: 'dizziness'}],
//         author: {
//             id: '1',
//             username: 'Patient123',
//             firstName: 'John',
//             lastName: 'Doe',
//             image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
//         },
//         replies: [
//             'I experienced the same thing when I started that medication. It usually goes away after a few days. If it persists, definitely contact your doctor.',
//             'Dizziness can indeed be a side effect of certain medications. However, if it becomes severe or persistent, it\'s important to consult with your healthcare provider.'
//         ],
//         views: 35,
//         createdAt: new Date('2024-03-04T10:00:00'),
//         votes: {
//             positive: 12,
//             negative: 2
//         },
//         category: 'medication'
//     },
//     {
//         id: 'post2',
//         title: 'Dealing with Anxiety During Medical Tests',
//         body: 'I have a medical test scheduled next week, and I\'m feeling extremely anxious about it. Does anyone have tips for managing anxiety during medical procedures?',
//         tags: [{id: 'tag4', name: 'anxiety'},
//             {id: 'tag5', name: 'medical tests'},
//             {id: 'tag6', name: 'stress management'}],
//         author: {
//             id: '2',
//             username: 'AnxiousAva',
//             firstName: 'Ava',
//             lastName: 'Morgan'
//         },
//         replies: [
//             'Deep breathing exercises can be really helpful for managing anxiety during medical tests. Try to focus on your breath and stay present in the moment.',
//             'I find it helpful to bring a comforting item with me, like a favorite book or a stress ball, to distract myself during the procedure.'
//         ],
//         views: 28,
//         createdAt: new Date('2024-03-03T15:30:00'),
//         votes: {
//             positive: 8,
//             negative: 1
//         },
//         category: 'stress management'
//     },
//     {
//         id: 'post3',
//         title: 'Tips for Managing Chronic Pain',
//         body: 'Living with chronic pain can be challenging. What are some effective strategies for managing pain on a daily basis?',
//         tags: [{id: 'tag7', name: 'chronic pain'},
//             {id: 'tag8', name: 'pain management'},
//             {id: 'tag9', name: 'self-care'}],
//         author: {
//             id: '3',
//             username: 'PainWarrior',
//             firstName: 'Adam',
//             lastName: 'Sendler'
//         },
//         replies: [
//             'I\'ve found that establishing a consistent exercise routine, even if it\'s gentle activities like walking or stretching, can help reduce chronic pain over time.',
//             'Mindfulness techniques, such as meditation or guided imagery, can also be beneficial for managing chronic pain and improving overall well-being.'
//         ],
//         views: 42,
//         createdAt: new Date('2024-03-02T09:45:00'),
//         votes: {
//             positive: 15,
//             negative: 3
//         },
//         category: 'self-care'
//     }
// ]

function generateRandomPost(): Post {
    const category = categories[Math.floor(Math.random() * categories.length)]
    const user = createFakeUser()

    return {
        id: faker.string.uuid(),
        title: faker.word.words({count: {min: 5, max: 15}}),
        body: faker.word.words({count: {min: 40, max: 75}}),
        createdAt: faker.date.recent(),
        votes: {
            upvotes: faker.number.int({max: 10000}),
            downvotes: faker.number.int({max: 1000}),
            upvotedBy: [],
            downvotedBy: []
        },
        author: user,
        replies: [],
        views: faker.number.int({max: 1000000}),
        tags: [...Array.from({length: faker.number.int({min: 1, max: 3})}, () => createFakeTag())],
        category: category.key,
        updatedAt: null,
        authorId: user.id,
    }
}

export const posts: Post[] = Array.from({length: 50}, () => generateRandomPost())
