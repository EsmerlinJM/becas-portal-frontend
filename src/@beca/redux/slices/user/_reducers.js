import { createSlice } from "@reduxjs/toolkit";
import { createMessage, getOneUser, logoutUser } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [
  { action: createMessage, key: "message" },
  { action: getOneUser, key: "one" },
  { action: logoutUser, key: "one" },
];

const reducers = reducerGenerator(actions);

const user = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    ...reducers,
    // [logoutUser.fulfilled]: (state, { payload }) => {
    //   return {
    //     ...state,
    //     one: {
    //       data: payload,
    //       status: "completed",
    //     },
    //   };
    // },
  },
});

export default user.reducer;
