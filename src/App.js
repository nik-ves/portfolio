import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import TestPage from "./components/pages/TestPage";

function App() {
  return (
    <Fragment>
      <MainNavigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/projects" exact>
          <Projects />
        </Route>

        <Route path="/projects/:projectId">
          <TestPage />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
