import { lazy } from "react";

const ResetPass = lazy(() => import("./reset-pass"));
const tokenInvalid = lazy(() => import("./token-invalid"));
const tokenValid = lazy(() => import("./token-valid"));

const routes = [
  {
    exact: true,
    path: "/reset-pass",
    component: ResetPass,
  },
  {
    exact: true,
    path: "/reset-pass/token-invalid",
    component: tokenInvalid,
  },
  {
    exact: true,
    path: "/reset-pass/token-valid",
    component: tokenValid,
  },
];

export default routes;
