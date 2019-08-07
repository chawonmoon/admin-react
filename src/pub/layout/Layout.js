import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Skip from './Skip';
import Header from './Header';
import Footer from './Footer';
import Contents from './Contents';
import Sidebar from './Sidebar';
import Rnb from '../utils/Rnb';
import Login from '../page/Login';
import Spinner from '../units/Spinner';
import LayoutStyled from './Layout.styled';

class Layout extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/">
            <Fragment>
              <Skip />
              <Header />
              <LayoutStyled className="contentsWrap">
                <Sidebar />
                <Contents />
              </LayoutStyled>
              <Footer />
            </Fragment>
          </Route>
        </Switch>
        <Rnb />
      </Router>
    );
  }
}

export default Layout;
