import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import LoginScreen from './components/LoginScreen';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={LoginScreen}/>
        <Redirect to="/login"/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
