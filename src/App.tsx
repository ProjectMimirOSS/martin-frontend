import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Custom imports
import PrivateRoute from './hoc/private-route.hoc';
import Login from './pages/login/login';
import HealthDetails from './pages/health-details/health-details';

import { GlobalContext } from './store/global.provider';
import socketIOClient from "socket.io-client";

//css
import './App.css';

function App(props: any) {
  const { state } = useContext(GlobalContext);
  useEffect(() => {
    // const socket = socketIOClient('https://albert.stanplus.com');
    // socket.on("CONNECTED", (data: any) => {
    //     console.log(data);
    // });
  }, []);
  return (
    <div className={`App ${state.isDarkThemed ? 'dark' : 'light'}`}>
     <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <PrivateRoute path='/home' isAuthenticated = {state.isAuthenticated} component={HealthDetails}/>
          <Redirect exact from='/' to='/home' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
