import React, { Component } from 'react'
import EmployeeService from '../EmployeeService';
import { Search } from './Search';

export class Employee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            empId: '',
            empName: '',
            contactNumber: '',
            address: '',
            designation: ''
        }

        this.handlechange = this.handlechange.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.reset = this.reset.bind(this);
    }

    addEmployee() {

        EmployeeService.addEmployee(this.state)
            .then(response => {
                alert(response.data);
            })
    }



    handlechange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    reset(event) {
        event.target.value = '';
    }
    render() {
        return (
            <div>
                <div class="container">


                    <h1>Add New Employee</h1>
                    <table className='container'>
                        <tr>
                            <td><label for="empId">Employee ID</label></td>
                            <td><input type="text" id="empId" name="empId" onChange={this.handlechange} onFocus={this.reset} required /></td>
                        </tr>
                        <tr>
                            <td><label for="empName">Employee Name</label></td>
                            <td><input type="text" id="empName" name="empName" onChange={this.handlechange} onFocus={this.reset} required /></td>
                        </tr>
                        <tr>
                            <td><label for="contactNumber">Contact Number</label></td>
                            <td><input type="text" id="contactNumber" name="contactNumber" onChange={this.handlechange} onFocus={this.reset} required /></td>
                        </tr>
                        <tr>
                            <td><label for="address">Address</label></td>
                            <td><input type="text" id="address" name="address" onChange={this.handlechange} onFocus={this.reset} required /></td>
                        </tr>
                        <tr>
                            <td><label for="designation">Designation</label></td>
                            <td><input type="text" id="designation" name="designation" onChange={this.handlechange} onFocus={this.reset} required /></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => this.addEmployee()} > Add Employee </button></td>

                        </tr>
                    </table>

                </div>
                <Search />
            </div>
        );
    }
}
