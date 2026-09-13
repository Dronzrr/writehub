import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login({ userData }))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='flex min-h-[70vh] items-center justify-center px-4 py-12'>
            <div className='w-full max-w-md rounded-2xl border border-gray-200 bg-gray-100 p-8 shadow-xl sm:p-10'>

                <div className='mb-6 flex justify-center'>
                    <Link to='/'>
                        <Logo width='140px' darkText />
                    </Link>
                </div>

                <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900'>
                    Create your account
                </h2>

                <p className='mt-2 text-center text-sm text-gray-500'>
                    Join WriteHub and start sharing your ideas
                </p>

                <p className='mt-4 text-center text-sm text-gray-600'>
                    Already have an account?{' '}
                    <Link
                        to='/login'
                        className='font-semibold text-purple-600 transition hover:text-purple-500 hover:underline'
                    >
                        Sign in
                    </Link>
                </p>

                {error && (
                    <p className='mt-6 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-600'>
                        {error}
                    </p>
                )}

                <form
                    onSubmit={handleSubmit(create)}
                    className='mt-8'
                >
                    <div className='space-y-5'>

                        <Input
                            label='Full Name'
                            placeholder='Enter your full name'
                            {...register('name', {
                                required: true,
                            })}
                        />

                        <Input
                            label='Email'
                            placeholder='Enter your email'
                            type='email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
                                        || 'Please enter a valid email address'
                                }
                            })}
                        />

                        <Input
                            label='Password'
                            type='password'
                            placeholder='Enter your password'
                            {...register('password', {
                                required: true,
                            })}
                        />

                        <Button
                            type='submit'
                            className='w-full bg-linear-to-r from-purple-600 to-cyan-500 py-2.5 hover:from-purple-500 hover:to-cyan-400'
                        >
                            Create Account
                        </Button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup