import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="slice py-7">
      <div className="container">
        <div className="row row-grid align-items-center">
          <div className="col-12 col-md-5 col-lg-6 order-md-2 text-center">
            <figure className="w-100">
              <img
                alt="Home Avatar"
                src="/img/svg/illustrations/illustration-3.svg"
                className="img-fluid mw-md-120"
              />
            </figure>
          </div>
          <div className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
            <h1 className="display-4 text-center text-md-left mb-3">
              It's time to share your
              <strong className="text-primary"> Blog skills </strong>
            </h1>
            <p className="lead text-center text-md-left text-muted">
              Create your own blog, share it with others and customize your own
              Profile.
            </p>
            <div className="text-center text-md-left mt-5">
              <Link
                className="navbar-btn btn btn-sm btn-primary d-none d-lg-inline-block "
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
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
