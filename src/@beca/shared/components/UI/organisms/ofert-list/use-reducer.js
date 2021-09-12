export const initialState = {
  items: [],
  screens: [],
  active: 1,
  loading: false,
  objFavs: {},
}

export function reducer(state, action) {
  const { items, active, screens, loading, favorites } = action.payload

  switch (action.type) {
    case 'INIT':
      return { ...state, items, active, screens, loading }
    case 'SET_SCREEN':
      return {
        ...state,
        active,
        items,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading,
      }
    case 'SET_OBJ_FAVS':
      const objFavs = favorites.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.convocatoria_detail.id]: curr,
        }),
        {},
      )
      return {
        ...state,
        objFavs,
      }
    default:
      return state
  }
}
