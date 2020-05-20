import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <Fragment>
      <div className="bg-light p-2">
        {bio && (
          <Fragment>
            <h2 className="text-primary mt-2">{name}'s Bio</h2>
            <p>{bio}</p>
            <div className="line" />
          </Fragment>
        )}
        <hr className="divider divider-fade divider-dark my-3" />
        <h2 className="text-primary">Skills</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index} className="p-1">
              <span className="badge badge-primary m-1">{skill}</span>
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
