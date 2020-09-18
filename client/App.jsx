import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage/LoginPage.jsx';
import SignupPage from './components/SignUpPage/SignUpPage';
import Home from './components/HomePage/mainHome';
import AuthRoute from './components/AuthRoute.jsx';

// declare a const App which will will be our main component which will render child components.
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id='App'>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/loginpage' component={LoginPage} />
            <Route path='/signup' component={SignupPage} />
            <AuthRoute path='/home' component={Home} isLoggedIn={true} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;