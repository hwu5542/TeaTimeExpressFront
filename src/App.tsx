import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar';
import AppRoutes from './router/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <AppRoutes/>
      </Router>
    </div>
  );
}

export default App;
