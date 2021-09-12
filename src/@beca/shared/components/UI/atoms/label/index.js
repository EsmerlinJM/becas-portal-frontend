import React from "react";

export default function Label({ bgColor, title }) {
  return (
    <div
      className={`bg-${bgColor} text-white text-center text-sm rounded-full px-4 py-0.5  `}
      style={{ backgroundColor: bgColor }}
    >
      <span className="">{title}</span>
    </div>
  );
}
