import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch, HashRouter} from "react-router-dom";
import {DisplayPanel} from "./views/DisplayPanel/DisplayPanel";
import {ControlPanel} from "./views/ControlPanel/ControlPanel";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/display-panel' component={DisplayPanel}/>
        <Route path='/control-panel' component={ControlPanel}/>
        <Route
          path="*"
          component={() => (
            <Redirect to='/control-panel'/>
          )}
        />
      </Switch>
    </HashRouter>
  );
}

export default App;

/*

 */
