import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='min-h-[75vh] py-10'>
            <Container>
                <div className='mx-auto max-w-6xl'>
                    <div className='mb-8'>
                        <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-purple-400'>
                            WriteHub
                        </p>

                        <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                            Edit your post
                        </h1>

                        <p className='mt-2 text-gray-400'>
                            Refine your story and keep your readers updated.
                        </p>
                    </div>

                    <div className='rounded-2xl border border-white/10 bg-gray-900/80 p-5 shadow-xl backdrop-blur-sm sm:p-8'>
                        <PostForm post={post} />
                    </div>
                </div>
            </Container>
        </div>
    ) : null
}

export default EditPost