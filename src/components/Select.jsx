import React, { useId } from 'react'

function select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()

    return (
        <div className='w-full'>
            {label && (
                <label
                    htmlFor={id}
                    className='block mb-2 text-sm font-medium text-gray-700'
                >
                    {label}
                </label>
            )}

            <select
                ref={ref}
                {...props}
                id={id}
                className={`px-4 py-2.5 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 w-full cursor-pointer ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(select)