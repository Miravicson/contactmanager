import React, { Component } from 'react';
import Contacts from './components/contact/Contacts';
import EditContact from './components/contact/EditContact';
import Header from './components/layout/Header';
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AddContact from './components/contact/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add/" component={AddContact} />
                <Route exact path="/contact/edit/:id/" component={EditContact} />
                <Route exact path="/about/" component={About} />
                <Route   component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
