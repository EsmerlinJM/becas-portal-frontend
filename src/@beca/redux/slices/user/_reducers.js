import { createSlice } from "@reduxjs/toolkit";
import { createMessage } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [{ action: createMessage, key: "message" }];

const reducers = reducerGenerator(actions);

const user = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default user.reducer;
