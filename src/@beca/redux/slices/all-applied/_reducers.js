import { createSlice } from "@reduxjs/toolkit";
import { getAllApplied } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [{ action: getAllApplied, key: "all" }];
const reducers = reducerGenerator(actions);

const applied = createSlice({
  name: "applied",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default applied.reducer;
