import { configureStore } from "@reduxjs/toolkit";
import announcement from "./slices/announcement/_reducers";

export default configureStore({
  reducer: {
    announcement,
  },
});
