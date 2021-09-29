import Types from 'prop-types'

export default function MessageCard({ item, selected, onSelect, onClick }) {
  const bold = item.estado === 'read'
  return (
    <li
      className={`flex items-center justify-between text-xs py-3 px-5
       space-x-2 cursor-pointer border-b hover:bg-gray-100 transition-all ${
         bold ? 'bg-blue-100' : ''
       } `}
    >
      <div
        className={`flex items-center space-x-2 truncate ${
          !bold ? 'font-bold' : ''
        }`}
      >
        <input
          onChange={() => onSelect(item)}
          checked={selected}
          className="-mb-0.5"
          type="checkbox"
        />
        <div
          onClick={() => onClick(item)}
          className="w-full flex justify-center"
        >
          <span className="truncate text-blue-800 w-52">{item.to}</span>
          <span className="truncate ">{item.subject}:</span>
          <span className="truncate font-medium		">{item.message}</span>
        </div>
      </div>
      <span onClick={() => onClick(item)} className="truncate font-medium">
        {item.received}.
      </span>
    </li>
  )
}

MessageCard.prototype = {
  item: Types.object,
  selected: Types.bool,
  onSelect: Types.func,
  onClick: Types.func,
}
