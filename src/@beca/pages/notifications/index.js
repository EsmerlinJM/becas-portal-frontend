import { lazy } from "react";
const Nt = lazy(() => import("./notifications"));

const route = [
  {
    exact: true,
    component: Nt,
    path: "/notifications",
  },
];

export default route;
