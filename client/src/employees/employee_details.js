import  React,{ Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


var url = "http://localhost:8000/"


class EmployeeDetails extends Component {
  state = {
    employee : {}
  }

  async componentDidMount(){
    const { id } = this.props.match.params
    this.getOneEmployee(id);
  }

  getOneEmployee = async (id) => {
    const { data : employee} = await axios.get(url + "api/employees/" + id)
    if(employee) {
      this.setState({employee})
    }
  }

  render(){
    // console.log(this.state.employee)
    return(
      <React.Fragment>
        <table className="table" style={{padding: "2rem",width: "60%",margin: "0 auto"}}>
          <tbody>
            <tr>
              <td>ID:</td>
              <td>{this.state.employee._id}</td>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{this.state.employee.name}</td>
            </tr>
              <td>Age:</td>
              <td>{this.state.employee.age}</td>
            <tr>
              <td>Salary:</td>
              <td>{this.state.employee.salary}</td>
            </tr>
            <tr>
                <td colSpan="2">
                      <Link to={'/employees/'}>
                        <button className="btn btn-primary btn-sm">Back</button>
                      </Link>
                </td>
              </tr>
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default EmployeeDetails;
