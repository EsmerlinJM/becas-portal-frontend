import {
  readNotification,
  deleteNotification,
  getAllNotifications,
} from '../../shared/services/notification'
import { setNotifications } from '../../redux/slices/notification/_actions'
import { useEffect } from 'react'

export default function useAction(items, dispatch) {
  const onRead = async (item, index) => {
    if (item.read) return
    await readNotification(item.id)
    const all = [...items]
    const finded = all[index]
    all[index] = { ...finded, read: true }
    dispatch(setNotifications(all))
  }

  const onDelete = async (item) => {
    await deleteNotification(item.id)
    const filtered = items.filter((it) => it.id !== item.id)
    dispatch(setNotifications(filtered))
  }

  useEffect(() => {
    const fn = async () => {
      const data = await getAllNotifications()
      dispatch(setNotifications(data))
    }
    fn()
  }, [])

  return [{}, { onRead, onDelete }]
}
