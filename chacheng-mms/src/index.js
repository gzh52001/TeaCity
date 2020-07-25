import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import 'element-theme-default';//样式包
const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);


