import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import ProjectDetail from "./components/pages/ProjectDetail";
import PageNotFound from "./components/pages/PageNotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
      <Fragment>
        <MainNavigation />

        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/projects" exact>
            <Projects />
          </Route>

          <Route path="/projects/:projectId">
            <ProjectDetail />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>

        <Footer />
      </Fragment>
  );
}

export default App;
