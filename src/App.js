import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/Header";

import Home from "./home";
import ReportDetail from "./report/ReportDetail";

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/report/:id" component={ReportDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
