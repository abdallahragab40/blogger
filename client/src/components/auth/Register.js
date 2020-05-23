import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      props.setAlert("Password not match", "danger");
    } else {
      props.register({ name, email, password });
    }
  };

  // Redirect
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
                  <h6 className="h3">Register</h6>
                  <p className="text-muted mb-0">
                    Create new account to continue.
                  </p>
                </div>
                <span className="clearfix" />
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="form-group">
                    <label className="form-control-label" htmlFor="input-name">
                      Full Name
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="far fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="input-name"
                        placeholder="John Doe"
                        name="name"
                        value={name}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
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
                  <div className="form-group">
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
                  <div className="form-group mb-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <label
                          className="form-control-label"
                          htmlFor="input-password2"
                        >
                          Confirm Password
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
                        id="input-password2"
                        placeholder="Password"
                        name="password2"
                        value={password2}
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button type="submit" className="btn btn-block btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer px-md-5">
                <small>Already have an account? </small>
                <Link to="/login" className="small font-weight-bold">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
