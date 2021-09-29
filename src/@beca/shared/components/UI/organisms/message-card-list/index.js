import MessageCard from '../../molecules/message-card'
import PropTypes from 'prop-types'

const who = {
  unread: 'unread',
  read: 'read',
  all: '',
}

export default function MessageCardList({
  selecteds = {},
  items,
  status = null,
  onSelect,
  onClick,
  type = null,
}) {
  const filtered =
    (status || type) &&
    items.filter((item) =>
      !type ? item.estado === who[status] : item.tipo === type,
    )
  return (
    <ul>
      {(filtered || items).map((item, i) => (
        <MessageCard
          item={item}
          key={item.id}
          onSelect={onSelect}
          selected={!!selecteds[item.id]}
          onClick={(it) => onClick(it, i)}
        />
      ))}
    </ul>
  )
}

MessageCardList.propTypes = {
  status: PropTypes.oneOf(['unread', 'read', '', null]),
  type: PropTypes.string,
  items: PropTypes.array.isRequired,
  selecteds: PropTypes.object,
  onSelect: PropTypes.func,
  onClick: PropTypes.func,
}
