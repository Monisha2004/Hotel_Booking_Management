import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            book_id: this.props.match.params.book_id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.book_id).then( res => {
            this.setState({employee: res.data});
        })
    }
    
    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.employee.fname }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.employee.lname }</div>
                        </div>
                        <div className = "row">
                            <label>  Hotel name: </label>
                            <div> { this.state.employee.hname }</div>
                        </div>
                        <div className = "row">
                        <label> age: </label>
                        <div> { this.state.employee.age }</div>
                    </div>
                    <div className = "row">
                    <label>roomtype: </label>
                    <div> { this.state.employee.room_type }</div>
                </div>
                <div className = "row">
                <label>Hotel no_per: </label>
                <div> { this.state.employee.no_per}</div>
            </div>
            <div className = "row">
            <label> Employee Hotel days: </label>
            <div> { this.state.employee.days}</div>
        </div>
        <div className = "row">
        <label> Employee Hotel froms: </label>
        <div> { this.state.employee.froms}</div>
    </div>
    <div className = "row">
    <label> Employee Hotel to: </label>
    <div> { this.state.employee.t_o }</div>
</div>
<div className = "row">
<label> Employee Hotel ph_no: </label>
<div> { this.state.employee.ph_no }</div>
</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent