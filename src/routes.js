import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Simulation } from "./pages/Simulation";
import { Result } from "./pages/Simulation/Result";
import { Authentication } from "./pages/Authentication";
import { Loading } from "./pages/Loading";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/simulation" exact={true} component={Simulation} />
        <Route path="/simulation/result" component={Result} />
        <Route path="/auth" exact={true} component={Loading} />
        <Route path="/auth/finished" component={Authentication} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
