import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import App from "./AppStaff";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App /> 
    </HashRouter>
  </React.StrictMode>
  
);


