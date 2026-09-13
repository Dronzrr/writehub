import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = "",
    ...props
}, ref) {
    const id = useId()

    return (
        <div className='w-full'>
            {label && (
                <label
                    className='block mb-2 text-sm font-medium text-gray-700'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}

            <input
                type={type}
                className={`px-4 py-2.5 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input