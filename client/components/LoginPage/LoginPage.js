import React from 'react';
import YetiLogo from '../YetiLogo';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';
// import yetiReducer from '../../reducers/yetiReducer';


const mapStateToProps = (state) => ( 
  console.log(state),
{
  // userLogin: state.rootReducer.userLogin,
  username: state.yetiReducer.username,
  password: state.yetiReducer.password

})
const mapDispatchToProps = (dispatch) => ({
  login: (userInfo) => dispatch(actions.login(userInfo)),
  updateLogin:(login) => dispatch(actions.updateLogin(login)),
  updatePassword:(password) => dispatch(actions.updatePassword(password))
});

// create the LoginPage component passing in props to render our Yeti Logo, two input fields and login button.
const LoginPage = (props) => {

//   function loginWrapper() {
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;
// const reqBody = { username, password };
//  props.login(reqBody);
//   }

  return (
    <div className='AuthContainer'>
      <YetiLogo />
      <div className='AuthButtons'>
      <form>

        <input id="username" type="text" value ={props.username} onChange={()=>props.updateLogin(event => event.target.value)}></input>
        <input id="password" type="text" value ={props.password} onChange={()=>props.updatePassword(e => e.target.value)}></input>
      </form>
      </div>
      {/* <input
        type='text'
        id='loginUsername'
        placeholder='Username'
        required='true'
      ></input>
      <input
        type='password'
        id='loginPassword'
        placeholder='Password'
        required='true'
      ></input> */}
      <button type='button' id='loginPageButton' onClick={props.login(props.username, props.password)}>
        Login
      </button>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
