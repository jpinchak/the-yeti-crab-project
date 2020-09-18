import React, {Component} from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router";
// import yetiReducer from '../../reducers/yetiReducer';

const mapStateToProps = (state) => ({
  // userLogin: state.rootReducer.userLogin,
  username: state.yetiReducer.username,
  password: state.yetiReducer.password,
  isLoggedIn: state.yetiReducer.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(actions.login(userInfo)),
  loginSuccess: (userInfo) => dispatch(actions.loginSuccess(userInfo)),
  loginFailed: (failNotice) => dispatch(actions.loginFailed(failNotice)),
  updateLogin:(login) => dispatch(actions.updateLogin(login)),
  updatePassword:(password) => dispatch(actions.updatePassword(password))
});

// create the LoginPage component passing in props to render our Yeti Logo, two input fields and login button.
class LoginPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='AuthContainer'>
        <YetiLogo />
        <div className='AuthButtons'>
          <form>
            <input id="username" type="text" value={this.props.username} onChange={(e)=>this.props.updateLogin(e.target.value)}></input>
            <input id="password" type="text" value={this.props.password} onChange={(e)=>this.props.updatePassword(e.target.value)}></input>
          </form>
          <button type='button' id='loginPageButton' onClick={() => this.props.login({username: this.props.username, password:this.props.password})}>
            Login
          </button>
        </div>
      </div>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
