import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';
import axios from 'axios';
class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
           // id: this.props.match.params.id,
           fname: '',
           hname: '',
           age: '',
           room_type:'',
           no_per:'',
           days:'',
           from:'',
           to:'',
           lname:'',
           ph_no:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeHotelNameHandler = this.changeHotelNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changepersonsHandler = this.changepersonsHandler.bind(this);
        this.changedaysHandler = this.changedaysHandler.bind(this);
        this.changefromHandler = this.changefromHandler.bind(this);
        this.changetoHandler = this.changetoHandler.bind(this);
        this.changephnnumHandler = this.changephnnumHandler.bind(this);
        this.changeroomtypeHandler = this.changeroomtypeHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.book_id).then( (res) =>{
            let employee = res.data;
            this.setState({
                fname: employee.fname,
                lname: employee.lname,
                hname: employee.hname,
                age:employee.age,
                room_type:employee.room_type,
                no_per:employee.no_per,
                days:employee.days,
                from:employee.from,
                to:employee.to,
                ph_no:employee.ph_no
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {book_id:2,fname: this.state.fname, lname: this.state.lname, hname: this.state.hname,age:this.state.age,room_type:this.state.room_type,no_per:this.state.no_per,days:this.state.days,from:this.state.from,to:this.state.to,ph_no:this.state.ph_no};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.book_id));
       // axios.put('http://127.0.0.1:8080/update',employee)
        EmployeeService.updateEmployee(employee, this.state.book_id).then( res => {
            this.props.history.push('/employees');
        });
    }

    changeFirstNameHandler= (event) => {
        this.setState({fname: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lname: event.target.value});
    }

    changeroomtypeHandler= (event) => {
        this.setState({room_type: event.target.value});
    }
    changephnnumHandler= (event) => {
        this.setState({ph_no: event.target.value});
    }
    changetoHandler= (event) => {
        this.setState({to: event.target.value});
    }
    changefromHandler= (event) => {
        this.setState({from: event.target.value});
    }
    changedaysHandler= (event) => {
        this.setState({days: event.target.value});
    }
    changepersonsHandler= (event) => {
        this.setState({no_per: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }
    changeHotelNameHandler= (event) => {
        this.setState({hname: event.target.value});
    }


    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        
                                    <div className = "form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control" 
                                        value={this.state.fname} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" 
                                        value={this.state.lname} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Hotel Name: </label>
                                    <input placeholder="Hotel Name" name="hotelname" className="form-control" 
                                        value={this.state.hname} onChange={this.changeHotelNameHandler}/>
                                </div>
                                <div className = "form-group">
                                <label> Age: </label>
                                <input placeholder="Age" name="Age" className="form-control" 
                                    value={this.state.age} onChange={this.changeAgeHandler}/>
                            </div>
                            <div className = "form-group">
                                <label> Room Type</label>
                                <input placeholder="Room Type" name="Room Type" className="form-control" 
                                    value={this.state.room_type} onChange={this.changeroomtypeHandler}/>
                            </div>
                            <div className = "form-group">
                            <label> Persons</label>
                            <input placeholder="Persons" name="Persons" className="form-control" 
                                value={this.state.no_per} onChange={this.changepersonsHandler}/>
                        </div>
                        <div className = "form-group">
                        <label> From</label>
                        <input placeholder="From" name="From" className="form-control" 
                            value={this.state.from} onChange={this.changefromHandler}/>
                    </div>
                    <div className = "form-group">
                    <label> To</label>
                    <input placeholder="To" name="To" className="form-control" 
                        value={this.state.to} onChange={this.changetoHandler}/>
                </div>
                <div className = "form-group">
                <label> Phone num</label>
                <input placeholder="Phone num" name="Phone num" className="form-control" 
                    value={this.state.ph_no} onChange={this.changephnnumHandler}/>
            </div>
            <div className = "form-group">
            <label>Days</label>
            <input placeholder="Days" name="Days" className="form-control" 
                value={this.state.days} onChange={this.changedaysHandler}/>
        </div>
                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent