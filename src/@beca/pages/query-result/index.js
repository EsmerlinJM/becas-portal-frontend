import { lazy } from "react";
const Cmp = lazy(() => import("./query-result"));

const routes = [
  {
    path: "/query-result",
    exact: true,
    component: Cmp,
  },
];

export default routes;
