import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar';
import AppRoutes from './router/AppRoutes';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from 'react-redux-toastr';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <AppRoutes/>
      </Router>
      <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
    </div>
  );
}

export default App;
