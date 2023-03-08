import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';
class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    deleteEmployee(book_id){
        EmployeeService.deleteEmployee(book_id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.book_id!==book_id)});
        });
    }
    viewEmployee(book_id){
        this.props.history.push('/view-employee/${book_id}');
    }
    editEmployee(book_id){
        this.props.history.push('/add-employee/${book_id}');
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('add-employee/_add');
    }

    render() {
        return (
            <div>
                  
                 <h2 className="text-center">Hotel Booking  Management</h2>
                 <div className = "row">
                     <button className="btn btn-primary" onClick={this.addEmployee}></button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> hotelname </th>
                                    <th> Age</th>
                                    <th> room type</th>
                                    <th> persons</th>
                                    <th> from</th>
                                    <th> to</th>
                                    <th> phnum</th>
                                    <th>days </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.book_id}>
                                        
                                             <td> {employee.fname} </td>   
                                             <td> {employee.lname}</td>
                                             <td> {employee.hname}</td>
                                             <td> {employee.age}</td>
                                             <td> {employee.room_type}</td>
                                             <td> {employee.no_per}</td>
                                             <td> {employee.from}</td>
                                             <td> {employee.to}</td>
                                             <td> {employee.ph_no}</td>
                                             <td> {employee.days}</td>
                                             <td>
                                                 <Link to="/update">Update</Link>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.book_id)} className="btn btn-danger">Delete </button>
                                                 </td>
                                                 </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 
                 </div>
        )
    }
}

export default ListEmployeeComponent

//<button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.book_id)} className="btn btn-info">View </button>