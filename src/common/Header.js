import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <img src="/icons/logo.svg" />
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
            <a>Masuk</a>
          </li>
          <li className="signup">
            <a>Daftar</a>
          </li>
          <li>
            <a className="btn btn-primary">Mulai Laporan</a>
          </li>
        </ul>
      </nav>
    );
  }
}
