import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import EmployeeDetails from './employees/employee_details';
import EmployeeList from './employees/employee_list';
import About from './about';
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  (<Router>
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <h3 style={{color:"white"}}>MERN-Demo!</h3> 
        <span style={{width:"60%"}}></span>
        <ul className="navbar-nav mr-auto">
          <li><Link style={{color:"white"}} to={'/employees'} className="nav-link">Employees</Link></li>      
          <li><Link style={{color:"white"}} to={'/about'} className="nav-link">About</Link></li>
        </ul>
      </nav>
      <br/>
      <Switch>
          <Route path='/employees' component={EmployeeList} />
          <Route path='/employee/:id' component={EmployeeDetails} />
          <Route path='/about' component={About} />
      </Switch>
    </div>
  </Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
