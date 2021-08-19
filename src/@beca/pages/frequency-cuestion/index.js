import { lazy } from "react";
const CPN = lazy(() => import("./frequency-cuestion"));

const routes = [
  {
    component: CPN,
    exact: true,
    path: "/cuetion-frequency",
  },
];

export default routes;
