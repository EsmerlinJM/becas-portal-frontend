import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";

import store from "./@beca/redux";
import becaRoutes from "./@beca";

import Loading from "react-loader-spinner";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Suspense
              fallback={
                <div className="h-screen w-screen flex justify-center items-center">
                  <Loading type="MutatingDots" color="red" />
                </div>
              }
            >
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
