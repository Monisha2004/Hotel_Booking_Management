import React from 'react';
import './App.css';
import {BrowserRouter, BrowserRouter as Switch, Routes} from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>

                    <Route path = "/" element = {<ListEmployeeComponent/>}></Route>
                    <Route path = "/employees" element= {<ListEmployeeComponent/>}></Route>
                    <Route path = "/add-employee/:_add" element = {<CreateEmployeeComponent/>}></Route>
                    <Route path = "/view-employee/:_add" element = {<ViewEmployeeComponent/>}></Route>
                    <Route path = "/update" element = {<UpdateEmployeeComponent/>}></Route> 
                   
                    </Routes>
                    </BrowserRouter>
                    
                    );
                  }

export default App;