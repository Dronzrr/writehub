import React, { useEffect, useState } from 'react'
import { Container, PostCard, Logo } from '../components'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.rows)
            }
        })
    }, [])

    const authStatus = useSelector(state => state.auth.status)

    if (posts.length === 0) {
        return (
            <div className='flex min-h-[75vh] items-center justify-center px-4 text-center'>
                <Container>
                    <div className='mx-auto max-w-xl'>
                        <div className='mb-5 flex justify-center'>
                            <Logo width='140px' />
                        </div>

                        {authStatus ? (
                            <>
                                <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                                    No posts yet
                                </h1>
                                <p className='mt-3 text-gray-400'>
                                    Be the first to share something with the community.
                                </p>
                            </>
                        ) : (
                            <>
                                <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                                    Welcome to WriteHub
                                </h1>
                                <p className='mt-3 text-gray-400'>
                                    Sign in to discover and read posts from the community.
                                </p>

                                <Link
                                    to='/login'
                                    className='mt-6 inline-block rounded-lg bg-linear-to-r from-purple-600 to-cyan-500 px-6 py-3 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg'
                                >
                                    Login to read posts →
                                </Link>
                            </>
                        )}
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-10'>
            <Container>
                <div className='mb-8'>
                    <Logo width='140px' />

                    <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                        Latest Posts
                    </h1>

                    <p className='mt-2 text-gray-400'>
                        Explore the latest stories and ideas from the community.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home