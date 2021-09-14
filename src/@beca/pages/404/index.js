import { lazy } from "react";

const PageNotFound = lazy(() => import("./404"));

const routes = [
  {
    path: "/404",
    exact: true,
    component: PageNotFound,
  },
];

export default routes;
