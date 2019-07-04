import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from './router/router.js';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './action/auth.js';
import store from './store/store.js';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
  }
}



function App() {
  return (
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
  );
}

export default App;
