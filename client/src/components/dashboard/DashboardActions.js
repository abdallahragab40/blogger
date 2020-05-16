import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = (props) => {
  return (
    <div className="dash-buttons">
      <Link to="edit-profile" className="btn btn-light mb-2">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
    </div>
  );
};

export default DashboardActions;
