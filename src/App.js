import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import store from "./@beca/redux";
import BecaRouuter from "./@beca/bin/router";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <HelmetProvider>
      <Provider store={store}>
        <BecaRouuter />
      </Provider>
    </HelmetProvider>
  );
}

export default App;
