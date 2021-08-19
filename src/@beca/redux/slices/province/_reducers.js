import { createSlice } from "@reduxjs/toolkit";
import { getAllProvince } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [{ action: getAllProvince, key: "all" }];

const reducers = reducerGenerator(actions);

const province = createSlice({
  name: "province",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default province.reducer;
