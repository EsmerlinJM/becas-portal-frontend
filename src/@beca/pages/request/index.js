import { lazy } from "react";

const Request = lazy(() => import("./list"));
const RequestDetail = lazy(() => import("./detail"));

const route = [
  {
    exact: true,
    component: Request,
    path: "/my-requests",
  },
  {
    exact: true,
    component: RequestDetail,
    path: "/my-requests/detail/:id",
  },
];

export default route;
