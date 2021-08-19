import { createSlice } from "@reduxjs/toolkit";
import { getAllArea } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [{ action: getAllArea, key: "all" }];
const reducers = reducerGenerator(actions);

const area = createSlice({
  name: "area",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default area.reducer;
