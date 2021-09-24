import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ListWrapper from "./components/list/ListWrapper";
import PrivateRoute from "./components/routing/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/ListWrapper' component={ListWrapper} />
      </Switch>
    </Router>
  );
};

export default App;
