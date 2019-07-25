import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Skip from './layout/Skip';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Contents from './layout/Contents';
import Sidebar from './layout/Sidebar';
import Rnb from './utils/Rnb';
import Login from './page/Login';
import Spinner from './unit/Spinner';

class index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Fragment>
              <Skip />
              <Header />
              <div className="contentsWrap">
                <Sidebar />
                <Contents />
              </div>
              <Footer />
            </Fragment>
          </Route>
        </Switch>
        <Rnb />
      </Router>
    );
  }
}

export default index;
