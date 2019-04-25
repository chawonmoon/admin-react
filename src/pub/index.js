import React, { Component, Fragment } from "react";
import Skip from "./layout/Skip";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

class index extends Component {
  render() {
    return (
      <Fragment>
        <Skip />
        <Header />
        
        <Footer />
      </Fragment>
    );
  }
}

export default index;
