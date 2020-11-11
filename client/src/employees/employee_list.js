import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

var url = "http://localhost:8000/"

class EmployeeList extends Component {
  state = {
    employees : []
  }

  async componentDidMount(){
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data : employees} = await axios.get(url + "api/employees")
    this.setState({employees})
  }

  deleteEmployee = async (id) => {
    const { data : employee} = await axios.delete(url + "api/employees/" + id);
    this.getEmployees();
  }

  addEmployee = async () => {
    let newEmployee = {
      _id: this.getNextId(),
      name: Math.random().toString(20).substr(2,10).replace(/[0-9]/gi,''),
      age: Math.floor(Math.random()*100),
      salary: Math.floor(Math.random()*100) * 1000
    }
    const { data : employee} = await axios.post(url + "api/employees/",newEmployee);
    this.getEmployees();
  }

  getNextId(){
    let nextID = 0;
    this.state.employees.forEach(e => {
      if(nextID<=e._id) nextID=e._id;
    })
    return nextID+1;
  }
  
  render() {
    return (
      <React.Fragment>
        <div style={{textAlign:"center"}}><h2>Employee List</h2></div>
        <table className="table" style={{padding: "2rem",width: "60%",margin: "0 auto"}}>
            <thead>
              <tr>
                <td colSpan="5" style={{textAlign:"right"}}><button className="btn btn-success btn-sm" onClick={()=>this.addEmployee()}>Add +</button></td>
              </tr>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { this.state.employees.map((employee) => (
                  <tr key={employee._id}>
                    <td>{employee._id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.salary}</td>
                    <td>
                      <Link to={'/employee/' + employee._id}>
                        <button className="btn btn-primary btn-sm">View</button>
                      </Link>
                      <span>&nbsp;</span>
                      <button className="btn btn-danger btn-sm" onClick={()=>this.deleteEmployee(employee._id)}>Delete</button>
                      
                    </td>
                  </tr>
                ))
              } 
            </tbody>

        </table>
      </React.Fragment>
    )
  }
}

export default EmployeeList;
