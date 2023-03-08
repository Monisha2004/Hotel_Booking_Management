import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

ReactDOM.render(
  <React.StrictMode>
   <App/>
   <CreateEmployeeComponent/>
  </React.StrictMode>,
  document.getElementById('root')
  
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
  // <UpdateEmployeeComponent/>
  