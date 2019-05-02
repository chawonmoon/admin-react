import React, { Component } from "react";
import { Route } from "react-router-dom";

import Main from "../page/Main";
import Notice from "../page/Notice";
import Guide from "../page/Guide";
import Schedule from "../page/Schedule";
import Messege from "../page/Messege";
import Block from "../page/Block";
import User from "../page/User";

class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/notice" component={Notice} />
        <Route path="/guide" component={Guide} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/messege" component={Messege} />
        <Route path="/block" component={Block} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

export default Contents;
