import { lazy } from "react";

const Home = lazy(() => import("./home"));

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
];

export default routes;
