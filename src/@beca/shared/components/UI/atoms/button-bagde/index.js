import Badge from '../badge'

export default function ButtonBadge({ children, num = 0 }) {
  return (
    <button
      className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
      aria-label="Cart"
    >
      {children}
      <span className="absolute inset-0 object-right-top -mr-5">
        <Badge num={num} />
      </span>
    </button>
  )
}
