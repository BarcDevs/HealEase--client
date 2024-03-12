import {createFileRoute, useParams} from '@tanstack/react-router'

const Component = () => {
    const {postId} = useParams({from: '/_forum/forum/posts/$postId'})
    return <div>Hello /_forum/forum/posts/{postId}</div>
}

export const Route = createFileRoute('/_forum/forum/posts/$postId')({
    // loader: async ({ params }) => {
    //   return fetchPost(params.postId)
    // },
    component: Component
})




