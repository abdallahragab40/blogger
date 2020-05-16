import React, { useState, Fragment, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const EditProfile = ({
  createProfile,
  history,
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    github: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    github,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      company: loading || !profile.company ? "" : profile.company,
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      skills: loading || !profile.skills ? "" : profile.skills.join(", "),
      bio: loading || !profile.bio ? "" : profile.bio,
      twitter: loading || !profile.social ? "" : profile.social.twitter,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      github: loading || !profile.social ? "" : profile.social.github,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin,
      youtube: loading || !profile.social ? "" : profile.social.youtube,
    });
  }, [loading, getCurrentProfile]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Create Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user" /> Let's get some information to make your
          profile stand out
        </p>
        <small className="form-text text-danger mb-2">* Required field</small>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label for="select">* Select Professional Status</label>
            <select
              className="form-control"
              name="status"
              id="select"
              value={status}
              onChange={(e) => onChange(e)}
            >
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text text-muted">
              Give us an idea of where you are at in your career
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              class="form-control"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text text-muted">
              Could be your own company or one you work for
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              class="form-control"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text text-muted">
              Could be your own or a company website
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              class="form-control"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text text-muted">
              City &amp; state suggested (eg. Egypt, Cairo)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              class="form-control"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text text-muted">
              Please use comma separated values (eg. HTML,CSS,JavaScript)
            </small>
          </div>

          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              defaultValue={""}
              class="form-control"
              value={bio}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text text-muted">
              Tell us a little about yourself
            </small>
          </div>
          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn btn-light"
            >
              Add Social Network Links
            </button>
            <span className="ml-2">Optional</span>
          </div>
          {displaySocialInputs && (
            <Fragment>
              <div className="form-group row">
                <i
                  className="fab fa-linkedin fa-2x col-sm-1 col-form-label"
                  style={{ color: "#0077b5" }}
                />
                <input
                  class="form-control col-sm-11"
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group row">
                <i
                  className="fab fa-github fa-2x col-sm-1 col-form-label"
                  style={{ color: "#24292e" }}
                />
                <input
                  class="form-control col-sm-11"
                  type="text"
                  placeholder="Github URL"
                  name="github"
                  value={github}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group row">
                <i
                  className="fab fa-twitter fa-2x col-sm-1 col-form-label"
                  style={{ color: "#38a1f3" }}
                />
                <input
                  class="form-control col-sm-11"
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group row">
                <i
                  className="fab fa-facebook fa-2x col-sm-1 col-form-label"
                  style={{ color: "#3b5998" }}
                />
                <input
                  class="form-control col-sm-11"
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group row">
                <i
                  className="fab fa-youtube fa-2x col-sm-1 col-form-label"
                  style={{ color: "#c4302b" }}
                />
                <input
                  class="form-control col-sm-11"
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>

              <div className="form-group row">
                <i
                  className="fab fa-instagram fa-2x col-sm-1 col-form-label"
                  style={{ color: "#e4405f" }}
                />
                <input
                  class="form-control col-sm-11"
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
