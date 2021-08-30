import homeRoutes from './pages/home'
import queryResultRoutes from './pages/query-result'
import offerDetail from './pages/offer-detail'
import cuestionFrequency from './pages/frequency-cuestion'
import allApplied from './pages/all-applied'
import register from './pages/register'
import login from './pages/login'

const routes = [
  ...homeRoutes,
  ...queryResultRoutes,
  ...offerDetail,
  ...cuestionFrequency,
  ...allApplied,
  ...register,
  ...login,
]

export default routes
