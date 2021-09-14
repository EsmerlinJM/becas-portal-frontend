import homeRoutes from "./pages/home";
import queryResultRoutes from "./pages/query-result";
import offerDetail from "./pages/offer-detail";
import cuestionFrequency from "./pages/frequency-cuestion";
import allApplied from "./pages/all-applied";
import register from "./pages/register";
import login from "./pages/login";
import favorites from "./pages/favorite";
import myRequests from "./pages/request";
import resetPass from "./pages/reset-pass/";
import profile from "./pages/profile";
import notifications from "./pages/notifications";
import footerLinks from "./pages/footer-links";
import pageNotFound from "./pages/404";

const routes = [
  ...homeRoutes,
  ...queryResultRoutes,
  ...offerDetail,
  ...cuestionFrequency,
  ...allApplied,
  ...register,
  ...login,
  ...favorites,
  ...myRequests,
  ...resetPass,
  ...profile,
  ...notifications,
  ...footerLinks,
  ...pageNotFound,
];

export default routes;
