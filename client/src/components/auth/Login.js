import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.login(email, password);
  };

  // Redirect if loggedin
  if (props.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center min-vh-90">
          <div className="col-md-6 col-lg-5 col-xl-5 py-6 py-md-0">
            <div className="card shadow zindex-100 mb-0">
              <div className="card-body px-md-5 py-5">
                <div className="mb-5">
                  <h6 className="h3">Login</h6>
                  <p className="text-muted mb-0">
                    Sign in to your account to continue.
                  </p>
                </div>
                <span className="clearfix" />
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-email">
                      Email address
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="far fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="input-email"
                        placeholder="name@example.com"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <label
                          className="form-control-label"
                          htmlFor="input-password"
                        >
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa fa-key" aria-hidden="true"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="input-password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn btn-block btn-primary">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer px-md-5">
                <small>Don't have an account? </small>
                <Link to="/register" className="small font-weight-bold">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
