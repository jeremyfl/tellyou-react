import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./common/Header";
import Modals from "./common/Modals";
import Footer from "./common/Footer";

import Home from "./home";
import ReportDetail from "./report/ReportDetail";
import ReportAdd from "./report/ReportAdd";

import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      user: []
    };
  }

  componentDidMount() {
    const self = this;

    axios.get("user/check").then(response => {
      if (response.data.isLogin) {
        self.setState({
          isLogin: true,
          user: response.data.user
        });
      }
    });
  }

  authCheck() {
    if (this.state.isLogin) {
      return true;
    }

    return false;
  }

  user() {
    if (this.state.user) {
      return this.state.user;
    }

    return [];
  }

  render() {
    const isLogin = this.authCheck();
    const user = this.user();

    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div className="App">
          <Header isLogin={isLogin} user={user} />
          <Modals />
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
