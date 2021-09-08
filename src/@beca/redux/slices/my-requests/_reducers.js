import { createSlice } from "@reduxjs/toolkit";
import { getAllRequest, getOneRequest } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [
  { action: getAllRequest, key: "all" },
  { action: getOneRequest, key: "one" },
];

const reducers = reducerGenerator(actions);

const myRequest = createSlice({
  name: "myRequest",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default myRequest.reducer;
