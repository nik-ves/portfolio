import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
