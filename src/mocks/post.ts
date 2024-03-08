import {Post} from '@/types/forum'

export const posts: Post[] = [
    {
        _id: '1',
        title: 'Is it Normal to Experience Dizziness After Taking Medication?',
        body: 'I recently started a new medication, and I\'ve been feeling dizzy ever since. Is this a common side effect, or should I be concerned?',
        tags: ['medication', 'side effects', 'dizziness'],
        author: {
            _id: '1',
            name: 'Patient123'
        },
        replies: [
            'I experienced the same thing when I started that medication. It usually goes away after a few days. If it persists, definitely contact your doctor.',
            'Dizziness can indeed be a side effect of certain medications. However, if it becomes severe or persistent, it\'s important to consult with your healthcare provider.'
        ],
        views: 35,
        createdAt: new Date('2024-03-04T10:00:00'),
        votes: {
            positive: 12,
            negative: 2
        },
        category: 'medication'
    },
    {
        _id: '2',
        title: 'Dealing with Anxiety During Medical Tests',
        body: 'I have a medical test scheduled next week, and I\'m feeling extremely anxious about it. Does anyone have tips for managing anxiety during medical procedures?',
        tags: ['anxiety', 'medical tests', 'stress management'],
        author: {
            _id: '2',
            name: 'AnxiousAva'
        },
        replies: [
            'Deep breathing exercises can be really helpful for managing anxiety during medical tests. Try to focus on your breath and stay present in the moment.',
            'I find it helpful to bring a comforting item with me, like a favorite book or a stress ball, to distract myself during the procedure.'
        ],
        views: 28,
        createdAt: new Date('2024-03-03T15:30:00'),
        votes: {
            positive: 8,
            negative: 1
        },
        category: 'stress management'
    },
    {
        _id: '3',
        title: 'Tips for Managing Chronic Pain',
        body: 'Living with chronic pain can be challenging. What are some effective strategies for managing pain on a daily basis?',
        tags: ['chronic pain', 'pain management', 'self-care'],
        author: {
            _id: '3',
            name: 'PainWarrior'
        },
        replies: [
            'I\'ve found that establishing a consistent exercise routine, even if it\'s gentle activities like walking or stretching, can help reduce chronic pain over time.',
            'Mindfulness techniques, such as meditation or guided imagery, can also be beneficial for managing chronic pain and improving overall well-being.'
        ],
        views: 42,
        createdAt: new Date('2024-03-02T09:45:00'),
        votes: {
            positive: 15,
            negative: 3
        },
        category: 'self-care'
    }
];
