import React from "react";
import { Container } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

import { BrowserRouter, Router, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/auth" exact component={Auth}></Route>
        </Router>
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
