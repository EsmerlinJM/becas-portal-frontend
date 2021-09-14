import React from 'react'

export default function ButtonBadge({ children, num = 0 }) {
  return (
    <button
      className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
      aria-label="Cart"
    >
      {children}
      <span className="absolute inset-0 object-right-top -mr-5">
        <div
          className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full  font-semibold leading-4 bg-red-500 text-white"
          style={{ fontSize: 10 }}
        >
          {num}
        </div>
      </span>
    </button>
  )
}
