import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import React from "react";
import NavBar from "./components/NavBar";
import ExternalApi from "./views/ExternalApi";
import { useAuth0 } from "./react-auth0-spa";




function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          {/* <Route path="/profile" component={Profile} /> */}
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;