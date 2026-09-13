import React from 'react'

function Logo({ width = '140px', darkText = false }) {
    return (
        <div
            className='flex items-center gap-3'
            style={{ width }}
        >
            <div className='relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-purple-500 via-violet-500 to-cyan-400 shadow-lg shadow-purple-500/25'>
                <svg
                    width='23'
                    height='23'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M6 3.5C6 2.67 6.67 2 7.5 2H14L19 7V20.5C19 21.33 18.33 22 17.5 22H7.5C6.67 22 6 21.33 6 20.5V3.5Z'
                        fill='white'
                    />

                    <path
                        d='M14 2V6.5C14 6.78 14.22 7 14.5 7H19'
                        fill='white'
                        fillOpacity='0.5'
                    />

                    <path
                        d='M9 11H15'
                        stroke='#8B5CF6'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                    />

                    <path
                        d='M9 14H13'
                        stroke='#06B6D4'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                    />

                    <path
                        d='M15.8 14.8L18.7 11.9C19.1 11.5 19.7 11.5 20.1 11.9L20.6 12.4C21 12.8 21 13.4 20.6 13.8L17.7 16.7L15.2 17.3L15.8 14.8Z'
                        fill='#7C3AED'
                    />

                    <path
                        d='M15.2 17.3L15.8 14.8L17.7 16.7L15.2 17.3Z'
                        fill='#06B6D4'
                    />
                </svg>
            </div>

            <div className='flex items-baseline text-xl font-bold tracking-tight'>
                <span className={darkText ? 'text-gray-900' : 'text-white'}>
                    Write
                </span>

                <span className='bg-linear-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent'>
                    Hub
                </span>
            </div>
        </div>
    )
}

export default Logo