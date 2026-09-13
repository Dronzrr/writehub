import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { PostCard, Container } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.rows)
            }
        })
    }, [])

    const deleteAllPosts = async () => {
        if (posts.length === 0) return

        for (const post of posts) {
            const deleted = await service.deletePost(post.$id)

            if (deleted && post.featuredImage) {
                await service.deleteFile(post.featuredImage)
            }
        }

        setPosts([])
        setShowDeleteModal(false)
    }

    return (
        <div className='w-full py-10'>
            <Container>
                <div className='mb-8 flex items-end justify-between gap-4'>
                    <div>
                        <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-purple-400'>
                            WriteHub
                        </p>

                        <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                            Explore Posts
                        </h1>

                        <p className='mt-2 text-gray-400'>
                            Discover stories, ideas, and thoughts from the community.
                        </p>
                    </div>

                    {posts.length > 0 && (
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className='shrink-0 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-red-600 hover:shadow-lg'
                        >
                            Delete All
                        </button>
                    )}
                </div>

                {posts.length > 0 ? (
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {posts.map((post) => (
                            <PostCard key={post.$id} {...post} />
                        ))}
                    </div>
                ) : (
                    <div className='rounded-2xl border border-white/10 bg-gray-900/60 py-16 text-center'>
                        <h2 className='text-xl font-semibold text-white'>
                            No posts yet
                        </h2>

                        <p className='mt-2 text-gray-500'>
                            Be the first to share something with the community.
                        </p>
                    </div>
                )}
            </Container>

            {showDeleteModal && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm'>
                    <div className='w-full max-w-md rounded-2xl border border-white/10 bg-gray-900 p-6 shadow-2xl'>
                        <div className='mb-5'>
                            <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-xl'>
                                ⚠️
                            </div>

                            <h2 className='text-xl font-bold text-white'>
                                Delete all posts?
                            </h2>

                            <p className='mt-2 text-sm leading-6 text-gray-400'>
                                This will permanently delete all {posts.length} posts
                                and their featured images. This action cannot be undone.
                            </p>
                        </div>

                        <div className='flex justify-end gap-3'>
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className='rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white'
                            >
                                Cancel
                            </button>

                            <button
                                onClick={deleteAllPosts}
                                className='rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600'
                            >
                                Delete All
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AllPosts