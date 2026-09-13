import React from 'react'
import { PostForm, Container } from '../components'

function AddPost() {
  return (
    <div className='min-h-[75vh] py-10'>
      <Container>
        <div className='mx-auto max-w-6xl'>
          <div className='mb-8'>
            <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-purple-400'>
              WriteHub
            </p>

            <h1 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Create a new post
            </h1>

            <p className='mt-2 text-gray-400'>
              Share your thoughts, ideas, and stories with the community.
            </p>
          </div>

          <div className='rounded-2xl border border-white/10 bg-gray-900/80 p-5 shadow-xl backdrop-blur-sm sm:p-8'>
            <PostForm />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AddPost