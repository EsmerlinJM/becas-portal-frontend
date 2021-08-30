import React from 'react'
// import Select from "react-select";

export default function BlockFilterSelect({
  titleBlock,
  // placeholder = "Seleccionar",
  children,
}) {
  return (
    <div>
      <p className="text-gray-600 text-md">{titleBlock}</p>
      <div className="border-t-2">
        <div className="my-2">
          {children}
          {/* <Select options={[]} placeholder={placeholder} /> */}
        </div>
      </div>
    </div>
  )
}
