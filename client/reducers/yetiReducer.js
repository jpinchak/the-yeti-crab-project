// import actions
import * as actionTypes from '../constants/actiontypes';

// reducers go here

// initial state is created
const initialState = {
  isLoggingIn: false,
  isSigningUp: false,
  isLoggedIn: false,
  currentUserId: '',
  // Post will be array of objects
  posts: [],
  loading: false,
  error: null,
  username: "",
  password: ""
};

// reducer function

const yetiReducer = (state = initialState, action) => {
  let username;
  let password;
  let currentUserId;
  let isLoggedIn;
  switch (action.type) {
    // Functionality to show login popup
    case actionTypes.LOGGING_IN:
      return {
        ...state,
        isLoggingIn: true,
      };
    // functionality to show signin popup
    case actionTypes.SIGNING_UP:
      return {
        ...state,
        isSigningUp: true,
      };
    // LOGIN REDUCERS
case actionTypes.UPDATE_LOGIN:
  username = action.payload;
  return {
    ...state,
    username,
  }
case actionTypes.UPDATE_PASSWORD:
  password = action.payload;
  return {
    ...state,
    password,
  }
    case actionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.LOGIN_SUCCESS:
      username = '';
      password = '';
      currentUserId: action.payload.username;
      isLoggedIn = true;
      return {
        ...state,
        username,
        password,
        isLoggingIn: false,
        isLoggedIn,
        currentUserId,
        //Something with posts
        loading: false,
        error: null,
      };
    case actionTypes.LOGIN_FAILURE:
      username = '';
      password = '';
      isLoggedIn = false;
      return {
        ...state,
        username,
        password,
        loading: false,
        isLoggedIn,
        //error: action.payload.error,
      };
    // SIGNUP REDUCERS
    case actionTypes.SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false,
        isLoggedIn: true,
        currentUserId: action.payload.user_id,
        loading: false,
        error: null,
      };
    case actionTypes.SIGNUP_FAILURE:
      // alert('Failed to create new user!')
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // GET POST REDUCERS
    case actionTypes.GETPOST_START:
      isLoggedIn = true;
      return {
        ...state,
        loading: true,
        isLoggedIn,
      };
    case actionTypes.GETPOST_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };
    case actionTypes.GETPOST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // ADD POST REDUCERS
    case actionTypes.ADDPOST_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.ADDPOST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
        error: null,
      };
    case actionTypes.ADDPOST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    // DEFAULT RETURN
    default:
      return state;
  }
};

// This is where we will export our reducer(s)
export default yetiReducer;
