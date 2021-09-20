export default function Badge({ num = 0 }) {
  return (
    <div
      className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full  font-semibold leading-4 bg-red-500 text-white"
      style={{ fontSize: 10 }}
    >
      {num}
    </div>
  )
}
