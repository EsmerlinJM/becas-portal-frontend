import React from "react";

export default function BoderTopColor({ children, borderColor }) {
  return (
    <div
      className={`border-t-4 border-${borderColor} hover:shadow-xl shadow transition duration-300 ease-in-out rounded  bg-white	`}
    >
      {children}
    </div>
  );
}
