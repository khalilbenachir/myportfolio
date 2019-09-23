import React from "react";

import NavBar from "./component/navbar/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import AboutMe from './screens/aboutme/aboutme';

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        <Redirect from="/" to="/aboutme" exact />
        <Route path="/aboutme" component={AboutMe} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
