import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login, Tasklist } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/tasklist">
          <Tasklist />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
