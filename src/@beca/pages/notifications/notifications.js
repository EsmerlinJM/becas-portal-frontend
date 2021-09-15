import { useSelector, useDispatch } from 'react-redux'
import Header2Natigation from '../../shared/components/hocs/header2-natigation'
import CardNotification from '../../shared/components/UI/molecules/notification-card'
import useAction from './use-action'

const objNav = {
  name: 'Notificaciones',
  parents: [{ name: 'Inicio', path: '/' }],
}

export default function Notifications() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.notification.all)
  const [_, actions] = useAction(data, dispatch)

  return (
    <Header2Natigation objNav={objNav}>
      <div className="notificaciones w-5/6 pt-3 m-auto grid grid-cols-1 gap-y-4 mb-4">
        {(data || []).map((it, i) => (
          <CardNotification
            item={it}
            key={i}
            onDelete={actions.onDelete}
            onRead={(item) => actions.onRead(item, i)}
          />
        ))}
      </div>
    </Header2Natigation>
  )
}
