import Loading from 'react-loader-spinner'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import Auth from '../shared/components/hocs/auth'
import becaRoutes from '../index'

export default function BecaRouter() {
  return (
    <Router>
      <Switch>
        <Auth>
          <Suspense
            fallback={
              <div className="h-screen w-screen flex justify-center items-center">
                <Loading type="MutatingDots" color="red" />
              </div>
            }
          >
            <Toaster position="top-right" reverseOrder={false} />
            {becaRoutes.map((route) => (
              <Route exact={route.exact} path={route.path} key={route.path}>
                <route.component />
              </Route>
            ))}
          </Suspense>
        </Auth>
      </Switch>
    </Router>
  )
}
