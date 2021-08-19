import { configureStore } from "@reduxjs/toolkit";

import area from "./slices/area/_reducers";
import offers from "./slices/ofert/_reducers";
import province from "./slices/province/_reducers";
import announcement from "./slices/announcement/_reducers";
import institution from "./slices/institution/_reducers";

export default configureStore({
  reducer: {
    area,
    offers,
    province,
    institution,
    announcement,
  },
});
