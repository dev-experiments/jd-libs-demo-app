import React, { Component } from 'react';
import AppRoutes from './routes/routes';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" >JdLibs</h1>
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/wap">Wap</Link></li>
              <li><Link to="/web">Web</Link></li>

            </ul>
          </nav>
        </header>
        <div className="container">
        </div>

        <div className="container">
          {AppRoutes}
        </div>

      </div>
    );
  }
}

export default App;
