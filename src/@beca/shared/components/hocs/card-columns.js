import React from "react";

export default function CardColumns({ children, className = "" }) {
  return (
    <div
      className={`
      gap-6
      grid
      grid-cols-1
      xs:grid-cols-2
      sm:grid-cols-2 
      md:grid-cols-3
      lg:grid-cols-4 
      xl:grid-cols-4 
      2xl:grid-cols-6
      
      ${className}
    `}
    >
      {children}
    </div>
  );
}
