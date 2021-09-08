export const initialState = {
  items: [],
  screens: [],
  active: 1,
  loading: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { ...state, ...action.payload };
    case "SET_SCREEN":
      return {
        ...state,
        active: action.payload.active,
        items: action.payload.items,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
}
