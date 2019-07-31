import React from "react";
import { render } from "react-dom";
import Root from "@/routes/Root";
import "@/themes/App.global.scss";

const App = Root;
render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./routes/Root", () => {
    require("@/routes/Root");
    render(<App />, document.getElementById("app"));
  });
}
