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
import setAuthToken from "./redux/utils/setAuthToken";
import Alert from "./components/layout/Alert";

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
        <Alert />
        <Switch>
          <Route exact path='/todo-list' component={Login} />
          <Route exact path='/todo-list/register' component={Register} />
          <PrivateRoute
            exact
            path='/todo-list/ListWrapper'
            component={ListWrapper}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
