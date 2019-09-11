import React from "react";
import { render } from "react-dom";
import Root from "./routes/Root";
import store from "./redux/store";
// import { Provider } from "react-redux";

const App = Root;
render(<App store={store}/>, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./routes/Root", () => {
    require("@/routes/Root");
    render(<App />, document.getElementById("app"));
  });
}
