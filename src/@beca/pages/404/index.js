import { lazy } from "react";

const PageNotFound = lazy(() => import("./404"));

const routes = [
  {
    component: PageNotFound,
  },
];

export default routes;
