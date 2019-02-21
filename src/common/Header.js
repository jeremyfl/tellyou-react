import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <img src="/images/logo.png" />
          </li>
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
            <a>Cari Laporan</a>
          </li>
          <li>
            <a>Rewards</a>
          </li>
        </ul>
        <ul>
          <li className="signin">
            <a id="signin" data-toggle="modal" data-target="#signin-modal">
              Masuk
            </a>
          </li>

          <li className="signup">
            <a id="signup" href data-toggle="modal" data-target="#signup-modal">
              Daftar
            </a>
          </li>

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
