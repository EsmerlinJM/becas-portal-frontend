import React from 'react'

export default function CardColumns({ children, className = '' }) {
  return (
    <div
      className={`
      gap-6
      grid
      grid-cols-1
      sm:grid-cols-2 
      md:grid-cols-2
      lg:grid-cols-3 
      xl:grid-cols-4
      
      ${className}
    `}
    >
      {children}
    </div>
  )
}
