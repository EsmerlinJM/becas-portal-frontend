import { useEffect, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { setAllMessage } from '../../../redux/slices/message/_actions'
import {
  createMsg,
  deleteMultipleMessage,
  markMultiple,
  markRead,
} from '../../../shared/services/message'
import reducer, { initialState } from './reducer'
import toast from 'react-hot-toast'
import { useHistory } from 'react-router'

export default function useAction(items, status) {
  const [state, dispatch2] = useReducer(reducer, initialState)
  const history = useHistory()
  const dispatch = useDispatch()

  const mark = async () => {
    try {
      const arrSelected = Object.values(state.selecteds)
      if (!arrSelected.length)
        return toast.error('Debe seleccionar algun mensaje')

      const data = await markMultiple(arrSelected)
      const objData = data.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: curr }),
        {},
      )
      const changed = state.messages.map((it) => {
        if (objData[it.id]) {
          return objData[it.id]
        }
        return it
      })

      onSet({}, 'selecteds')
      dispatch(setAllMessage(changed))
    } catch (error) {
      console.error(error)
    }
  }

  const onSelect = (item, estado) => {
    if (!estado && !item) {
      const allSelected = state.messages.find(
        (arti) => !state.selecteds[arti.id],
      )

      if (!allSelected) return onSelected('all', !!allSelected, {})
      const payload = state.messages.reduce(
        (acc, curr) => ({ ...acc, [curr.id]: curr }),
        {},
      )
      return onSelected('all', !!allSelected, payload)
    }

    if (estado && !item) {
      const allSelected = state.messages.find(
        (arti) => !state.selecteds[arti.id] && arti.estado === estado,
      )
      if (!allSelected) return onSelected(estado, !!allSelected, {})
      const payload = state.messages.reduce(
        (acc, curr) =>
          curr.estado === estado ? { ...acc, [curr.id]: curr } : acc,
        {},
      )
      return onSelected(estado, !!allSelected, payload)
    }

    const selecteds2 = { ...state.selecteds }
    if (!selecteds2[item.id]) {
      selecteds2[item.id] = item
      onSelected('', '', selecteds2)
      return
    }

    if (!!selecteds2[item.id]) delete selecteds2[item.id]
    onSelected('', '', selecteds2)
  }

  const deleteSelected = () => {
    toast.promise(deleteMultipleMessage(Object.values(state.selecteds)), {
      loading: 'Eliminandos...',
      success: () => {
        const payload = state.messages.filter(
          (item) => !state.selecteds[item.id],
        )
        dispatch(setAllMessage(payload))
        return <b>Eliminados correctamente!</b>
      },
      error: <b>Ups, ha occurido un error!</b>,
    })
  }

  const validateSearch = (
    { subject = '', to = '', received = '' },
    value2 = '',
  ) => {
    if (!value2) return true
    const val2 = value2.toLowerCase().trim()
    const subject1 = subject.toLowerCase().trim()

    if (subject1.includes(val2)) return true
    const name1 = to.toLowerCase().trim()
    if (name1.includes(val2)) return true

    const received1 = received.toLowerCase().trim()
    if (received1.includes(val2)) return true

    return false
  }

  const onSearch = (value) => {
    if (!value) return onSet(items, 'message')
    const payload = items.filter((item) => validateSearch(item, value))
    onSet(payload, 'messages')
  }

  const onSet = (payload, key) => {
    dispatch2({
      type: 'ON_SET',
      key: key,
      payload,
    })
  }

  const onSelected = (checkedName, checkedValue, selecteds) => {
    dispatch2({
      type: 'ON_SELECT',
      checked: checkedName,
      checkedValue,
      selecteds,
    })
  }

  const redirect = async (item) => {
    console.log(item)
    if (item.estado === 'read') {
      history.push(`/messages/detail/${item.id}`)
      return
    }
    const change = await markRead(item.id)
    const payload = state.messages.map((msg) =>
      msg.id === change.id ? change : msg,
    )
    dispatch(setAllMessage(payload))
    history.push(`/messages/detail/${change.id}`)
  }

  const createMessage = async (payload) => {
    const data = await createMsg(payload)
    dispatch(setAllMessage([data, ...items]))
  }

  useEffect(() => {
    onSet(items, 'messages')
    //eslint-disable-next-line
  }, [items, status])

  return [
    { ...state },
    {
      mark,
      deleteSelected,
      onSelect,
      onSearch,
      redirect,
      createMessage,
      onSet,
    },
  ]
}
