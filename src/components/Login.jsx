import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin, logout } from '../store/authSlice'
import { select, Button, Logo } from './index'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/auth'
import Input from './Input'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(authLogin({ userData }));
                navigate("/");

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
                    Welcome back
                </h2>

                <p className='mt-2 text-center text-sm text-gray-500'>
                    Sign in to continue to WriteHub
                </p>

                <p className='mt-4 text-center text-sm text-gray-600'>
                    Don&apos;t have an account?{' '}
                    <Link
                        to='/signup'
                        className='font-semibold text-purple-600 transition hover:text-purple-500 hover:underline'
                    >
                        Sign up
                    </Link>
                </p>

                {error && (
                    <p className='mt-6 rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-600'>
                        {error}
                    </p>
                )}

                <form
                    onSubmit={handleSubmit(login)}
                    className='mt-8'
                >
                    <div className='space-y-5'>

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
                            Sign in
                        </Button>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login