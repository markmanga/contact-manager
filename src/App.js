// Module imports
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Resource imports
import './assets/css/common.min.css';
// Components
import Header from './components/partials/Header.jsx';
import ContactData from './components/contacts/ContactData.jsx';
import Provider from './context.js';
import AddContactForm from './components/contacts/AddContactForm.jsx';
// Pages
import About from './components/pages/About';
import Page404 from './components/pages/Page404';
import EditContactForm from './components/contacts/EditContactForm';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header title={'Contact Manager'}></Header>
            <div className="container">
              <Switch>
                <Route exact path="/" component={ContactData}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact/add" component={AddContactForm}></Route>
                <Route exact path="/contact/edit/:id" component={EditContactForm}></Route>
                <Route component={Page404}></Route>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;