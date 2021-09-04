import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Control from "./Control";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Control>
      <App />
    </Control>
  </React.StrictMode>,
  document.getElementById("root")
);
