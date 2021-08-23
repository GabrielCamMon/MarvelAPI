import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import PublicRouter from "./PublicRouter";
import Home from "../containers/views/Home";
import CardDetail from "../containers/views/CardDetail";
import MyCollection from "../containers/views/MyCollection";

export const history = createBrowserHistory();

function AppRouter() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PublicRouter exact path="/" component={Home} />
          <PublicRouter path="/carddetail/:id" component={CardDetail} />
          <PublicRouter path="/cardeditdetail/:id" component={CardDetail} />
          <PublicRouter path="/mycollection" component={MyCollection} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
