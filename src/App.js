import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './views/Home';
import Posts from './views/Posts/Posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <FontAwesomeIcon icon={faCoffee} />
      </div>
      <header>
          <nav>  
            <div className="row no-gutters">
              <div className="col-6">
                <div className="row">
                  <label htmlFor="search" className="col-2">Buscar</label>
                  <div className="col">
                    <input type="text" name="search" id="" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="col d-flex flex-row-reverse bd-highlight">
                <button className="btn btn-info">Perfil</button>
              </div>
            </div>
          </nav>
          <div className="row no-gutters">
            <div className="col align-self-end">
              icons
            </div>
          </div>
      </header>
      <div id="main-page">
        <Router>
          <div>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/posts" component={Posts}></Route>
              </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
