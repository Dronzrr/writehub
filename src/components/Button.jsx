import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${className} ${bgColor} ${textColor}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button