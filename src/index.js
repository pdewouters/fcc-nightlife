import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import reduxThunk from 'redux-thunk'
import { AUTH_USER } from './actions/types'

import promiseMiddleware from 'redux-promise-middleware'

import App from './components/app';
import Signin from './components/auth/Signin'
import Home from './components/Home'
import Signout from './components/auth/Signout'
import Signup from './components/auth/Signup'
import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(promiseMiddleware(),reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
)

const history = syncHistoryWithStore(browserHistory, store)

const token = localStorage.getItem('token')

if (token) {
  store.dispatch({ type: AUTH_USER })  
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
