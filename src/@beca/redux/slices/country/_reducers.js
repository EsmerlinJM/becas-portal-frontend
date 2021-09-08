import { createSlice } from "@reduxjs/toolkit";
import { getAllCountries } from "./_actions";
import { reducerGenerator } from "../../../shared/utils/reducer-generator";
import { initialState } from "../../../shared/utils/initial-state";

const actions = [{ action: getAllCountries, key: "all" }];
const reducers = reducerGenerator(actions);
const country = createSlice({
  name: "country",
  initialState,
  extraReducers: {
    ...reducers,
  },
});

export default country.reducer;
