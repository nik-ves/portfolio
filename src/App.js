import { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";

import MainNavigation from "./components/layout/MainNavigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/UI/ScrollToTop";

function App() {
  return (
    <Fragment>
      <GlobalStyles />

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
