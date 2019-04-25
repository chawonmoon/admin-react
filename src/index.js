import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Main from "./pub";
import * as serviceWorker from "./serviceWorker";

import "./css/index.scss";

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
