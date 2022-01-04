import React from "react";
import {
  BrowserRouter as Router,
  Switch ,
  Route
} from "react-router-dom";


import Login from './pages/Login/Login'
import Dashboard from './pages/Dashboard/Dashboard'
import Regulation from './pages/Regulation/Regulation'
import NovaAposta from './pages/NovaAposta/NovaAposta'
import Premiacao from './pages/Premiacao/Premiacao'
import Resultado from './pages/Resultado/Resultado'

export default function router() {
  return (
    <Router>
        <Switch >
          <Route exact path="/" >
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/NovaAposta">
            <NovaAposta />
          </Route>
          <Route path="/Premiacao">
            <Premiacao />
          </Route>
          <Route path="/Resultado">
            <Resultado />
          </Route>
          <Route path="/regulation">
            <Regulation />
          </Route>
        </Switch >
    </Router>
  );
}
