import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./modules/home/Home";
import Login from "./modules/login/login";
import Register from "./modules/register/register";

const App:React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login"  component={Login} />
          <Route path="/register"  component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
