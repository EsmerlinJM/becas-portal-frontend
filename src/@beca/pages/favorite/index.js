import { lazy } from "react";

const Favorite = lazy(() => import("./favorite"));

const routes = [
  {
    exact: true,
    path: "/favorites",
    component: Favorite,
  },
];

export default routes;
