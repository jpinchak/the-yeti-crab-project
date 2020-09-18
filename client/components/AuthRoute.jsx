import React from "react";
import { connect } from "react-redux";
import { Redirect, Link, Route } from "react-router";

export const AuthRoute = props => {
  const { isLoggedIn } = props;
  console.log('trying to auth');
  console.log(props);
  if(isLoggedIn === true) return <Redirect to='/home' />;
  else return <Redirect to='/login' />;
};

const mapStateToProps = (state) => ({
  isLoggedIn: true
});

export default connect(mapStateToProps)(AuthRoute);