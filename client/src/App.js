import React, { Fragment, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Footer from "./components/layout/Footer";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Provider>
  );
};

export default App;
