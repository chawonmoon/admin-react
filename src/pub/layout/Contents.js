import React, { Component } from "react";
import { Route } from "react-router-dom";

import Main from "../page/Main";
import Notice from "../page/Notice";
import NoticeRead from "../page/NoticeRead";
import NoticeWrite from "../page/NoticeWrite";
import Guide from "../page/Guide";
import GuideWrite from "../page/GuideWrite";
import Schedule from "../page/Schedule";
import ScheduleRead from "../page/ScheduleRead";
import ScheduleWrite from "../page/ScheduleWrite";
import User from "../page/User";
import Push from "../page/Push";
import Messege from "../page/Messege";
import MessegeRead from "../page/MessegeRead";
import MessegeWrite from "../page/MessegeWrite";
import MessegeRandomItem from "../page/MessegeRandomItem";
import Block from "../page/Block";
import BlockRead from "../page/BlockRead";
import BlockWrite from "../page/BlockWrite";

class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <Route exact path="/" component={Main} />
        <Route path="/main" component={Main} />
        <Route exact path="/notice" component={Notice} />
        <Route path="/notice/read" component={NoticeRead} />
        <Route path="/notice/write" component={NoticeWrite} />
        <Route exact path="/guide" component={Guide} />
        <Route path="/guide/write" component={GuideWrite} />
        <Route exact path="/schedule" component={Schedule} />
        <Route path="/schedule/read" component={ScheduleRead} />
        <Route path="/schedule/write" component={ScheduleWrite} />
        <Route exact path="/user" component={User} />
        <Route path="/user/push" component={Push} />
        <Route exact path="/messege" component={Messege} />
        <Route exact path="/messege/read" component={MessegeRead} />
        <Route path="/messege/write" component={MessegeWrite} />
        <Route path="/messege/read/randomitem" component={MessegeRandomItem} />
        <Route exact path="/block" component={Block} />
        <Route path="/block/read" component={BlockRead} />
        <Route path="/block/write" component={BlockWrite} />
      </div>
    );
  }
}

export default Contents;
