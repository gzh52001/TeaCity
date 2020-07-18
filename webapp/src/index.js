import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter} from 'react-router-dom'; 
import App from './App';
import './index.css';


const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;
ReactDOM.render(
  <Router>
    {/* <React.StrictMode> */}
      <App/>
    {/* </React.StrictMode> */}
  </Router>,
  document.getElementById('root')
);
