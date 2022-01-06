
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";

import JobsPage from "components/searchJobsPage/jobsPage";
import LoginupPage from "components/signInUp/LoginupPage";
import ProfilePageOwn from "components/profile/ProfilePage";
import {ContextProvider} from './Context'

ReactDOM.render(
  <BrowserRouter>
<ContextProvider>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />

      <Route
        path="/jobs"
        render={(props) => <JobsPage {...props} />}
      />
      <Route
        path="/auth"
        render={(props) => <LoginupPage {...props} />}
      />
       <Route
        path="/pro"
        render={(props) => <ProfilePageOwn {...props} />}
      />
      
      
      
      <Redirect from="/" to="/components" />
    </Switch>
</ContextProvider>  
  </BrowserRouter>
  ,
  document.getElementById("root")
);
