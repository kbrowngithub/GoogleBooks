import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  state = {
    showPage: false
  }

  dispPage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Google Books
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              onClick={this.dispPage}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/"
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={this.dispPage}
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
              to="/saved"
            >
              Saved
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
