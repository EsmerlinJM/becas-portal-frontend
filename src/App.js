import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";

import store from "./@beca/redux";
import becaRoutes from "./@beca";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Suspense fallback={<div> Loading....</div>}>
              {becaRoutes.map((route) => (
                <Route exact={route.exact} path={route.path} key={route.path}>
                  <route.component />
                </Route>
              ))}
            </Suspense>
          </Switch>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
