/* eslint-disable react/no-children-prop */
import React from "react";
import { Provider } from "react-redux";
import Home from "../screens/Home/Home";
import Playlist from "../screens/Playlist/Playlist";
import Search from "../screens/Search/Search";
import Charts from "../screens/Charts/Charts";
import {MemoryRouter, Route, Switch} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Routes = ({store}) => (
  <Provider store={store}>
    <MemoryRouter>
      <Home>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/playlist" component={Playlist} />
          <Route path="/charts" component={Charts} />
       </Switch> 
      </Home>
    </MemoryRouter>
  </Provider>
);

export default Routes;
