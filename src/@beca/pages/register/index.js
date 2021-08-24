import { lazy } from "react";
const Register = lazy(() => import("./register"));

const routes = [
  {
    path: "/register",
    component: Register,
    exact: true,
  },
];

export default routes;
