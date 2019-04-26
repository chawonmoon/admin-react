import React, { Component, Fragment } from "react";
import { HashRouter as Router } from "react-router-dom";
import Skip from "./layout/Skip";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Contents from "./layout/Contents";
import Sidebar from "./layout/Sidebar";
import Rnb from "./utils/Rnb";

class index extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Skip />
          <Header />
          <div className="admin-contentsWrap active">
            <Sidebar />
            <Contents />
          </div>
          <Footer />
          <Rnb />
        </Fragment>
      </Router>
    );
  }
}

export default index;
