import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import ProfileTop from "../profile/ProfileTop";
import ProfileAbout from "../profile/ProfileAbout";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  deleteAccount,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome{" "}
        <strong>{user && user.name}</strong>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <div className="card text-center my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>
          <div className="my-2">
            <button
              className="btn btn-danger mt-2"
              onClick={() => deleteAccount()}
            >
              <i className="fas fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to="create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
