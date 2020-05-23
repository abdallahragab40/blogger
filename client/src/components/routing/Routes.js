import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../layout/NotFound";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Blogs from "../blogs/Blogs";
import Blog from "../blog/Blog";
import EditProfile from "../profile-forms/EditProfile";
import Profile from "../profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Alert from "../layout/Alert";
import BlogForm from "../blogs/BlogForm";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile/user/:id" component={Profile} />
        <Route exact path="/blogs" component={Blogs} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/create-blog" component={BlogForm} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/blogs/:id" component={Blog} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
