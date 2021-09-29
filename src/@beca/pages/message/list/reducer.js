const checked = {
  all: false,
  read: false,
  unread: false,
}
export const initialState = {
  checked,
  messages: [],
  selecteds: {},
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ON_SET':
      return { ...state, [action.key]: action.payload }
    case 'ON_SELECT':
      return {
        ...state,
        selecteds: action.selecteds,
        checked: {
          ...checked,
          [action.checked]: action.checkedValue,
        },
      }
    default:
      return state
  }
}
