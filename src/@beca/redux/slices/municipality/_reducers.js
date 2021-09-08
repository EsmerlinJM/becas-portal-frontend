import { createSlice } from "@reduxjs/toolkit";
import { searchByProvince } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [{ action: searchByProvince, key: "searchBy" }];
const reducers = reducerGenerator(actions);
const municipality = createSlice({
  name: "municipality",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default municipality.reducer;
