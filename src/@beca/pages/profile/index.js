import { lazy } from "react";

const Profile = lazy(() => import("./profile"));
const route = [
  {
    exact: true,
    path: "/profile",
    component: Profile,
  },
];

export default route;
