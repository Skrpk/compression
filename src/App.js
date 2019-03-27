import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Main from './modules/Main';
import ImageDetails from './modules/Image-details';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/image/" component={ImageDetails} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
