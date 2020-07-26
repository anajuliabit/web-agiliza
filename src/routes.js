import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Simulation } from "./pages/Simulation";
import { Result } from "./pages/Simulation/Result";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/simulation" exact={true} component={Simulation} />
        <Route path="/simulation/result" component={Result} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
