import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    const isLogin = this.props.isLogin;
    const user = this.props.user;
    return (
      <nav className="navbar">
        <ul>
          <Link to="/">
            <li className="logo">
              <img alt="logo" src="/images/logo.png" />
            </li>
          </Link>
          <li className="navbar-toggler">
            <div className="bars">
              <div />
              <div />
              <div />
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="http://localhost:3334/explore">Cari Laporan</a>
          </li>
          <li>
            <a href="http://localhost:3334/poin">Rewards</a>
          </li>
        </ul>
        <ul>
          {isLogin ? (
            <React.Fragment>
              <li>
                <a>Hi, {user.name}</a>
              </li>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <li className="signin">
                <a id="signin" data-toggle="modal" data-target="#signin-modal">
                  Masuk
                </a>
              </li>
              <li className="signup">
                <a id="signup" data-toggle="modal" data-target="#signup-modal">
                  Daftar
                </a>
              </li>
            </React.Fragment>
          )}
          <li>
            <Link className="btn btn-primary btn-mulai" to="/add/report">
              Mulai Laporan
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
