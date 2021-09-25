import React, { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ListWrapper from "./components/list/ListWrapper";
import PrivateRoute from "./components/routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./redux/actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import setAuthToken from "./redux/utils/setAuthToken";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/ListWrapper' component={ListWrapper} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
