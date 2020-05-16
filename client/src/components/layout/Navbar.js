import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            <i className="fas fa-user"></i>{" "}
            <span className="hide-sm">Profile</span>
          </Link>
        </li>
        <li className="nav-item ">
          <Link onClick={logout} className="nav-link" to="/">
            <i className="fas fa-sign-out-alt"></i>{" "}
            <span className="hide-sm">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mt-4 mt-lg-0 ml-auto">
        <li className="nav-item ">
          <Link className="nav-link" to="/">
            Blogs
          </Link>
        </li>
      </ul>
      <Link
        className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
        to="/login"
      >
        Sign In
      </Link>
      <Link
        className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block ml-3"
        to="/register"
      >
        Sign Up
      </Link>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="nav-link active font-weight-bold" to="/">
          Blogger
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
