import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";

import Home from "./home";
import ReportDetail from "./report/ReportDetail";
import ReportAdd from "./report/ReportAdd";

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/report/:id" component={ReportDetail} />
          <Route path="/add/report" component={ReportAdd} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
