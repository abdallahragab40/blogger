import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <Fragment>
      <div className=" bg-primary p-2 ">
        <img className="rounded-circle my-2" src={avatar} alt="" />
        <h1 className="large text-light">{name}</h1>
        <p className="lead text-light">
          {status} {company && <span> at {company}</span>}{" "}
        </p>
        <p>{location && <span className="text-light">{location}</span>}</p>
        <div className="icons my-1 ">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe fa-2x text-light m-2" />
            </a>
          )}
          {social && social.github && (
            <a href={social.github} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x text-light m-2" />
            </a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x text-light m-2" />
            </a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-2x text-light m-2" />
            </a>
          )}
          {social && social.facebook && (
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x text-light m-2" />
            </a>
          )}
          {social && social.youtube && (
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-2x text-light m-2" />
            </a>
          )}
          {social && social.instagram && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-2x text-light m-2" />
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
