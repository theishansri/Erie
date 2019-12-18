import React from 'react';
import './App.css';
import Layout from './components/Layout/layout';
import Chart from "./components/Charts/Chart";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Layout}/>
        <Route  path='/stats' component={Chart}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
