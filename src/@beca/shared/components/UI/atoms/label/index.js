import React from "react";

export default function Label({ bgColor, title }) {
  return (
    <div
      className={`bg-${bgColor} text-white text-center text-sm rounded-full px-4 py-1  `}
    >
      <span className="">{title}</span>
    </div>
  );
}
