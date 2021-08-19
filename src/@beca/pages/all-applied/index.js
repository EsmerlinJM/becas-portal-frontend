import { lazy } from "react";

const CPM = lazy(() => import("./all-applied"));

const routes = [
  {
    component: CPM,
    path: "/all-applied/:id",
    exact: true,
  },
];

export default routes;
