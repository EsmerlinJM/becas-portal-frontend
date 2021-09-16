export const initialState = {
  user: {},
  request: {},
  formsInstitution: [],
  formsEducation: [],
  formsWorkExperience: [],
  loading: false,
  send: false,
  openModalConfirm: false,
}

export default function reducer(state, action) {
  switch (action.type) {
    case 'ON_CHANGE_INIT':
      return { ...action.payload }
    case 'ON_CHANGE_FORM':
      const items = [...state[action.key]]
      const item = items[action.index]
      items[action.index] = { ...item, [action.field]: action.value }
      return {
        ...state,
        [action.key]: items,
      }
    case 'ON_SET_FORM':
      return {
        ...state,
        [action.key]: [...state[action.key], action.payload],
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return { ...state }
  }
}
