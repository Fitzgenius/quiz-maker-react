import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Header";
import Home from "./components/Home";
import Quiz from "./components/Quiz/Quiz";

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path="/quiz/:id" component={Quiz} exact />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App
