import React, { Component } from 'react'
import EmployeeService from '../EmployeeService';

export class Search extends Component {


    constructor(props) {
        super(props)
        this.state = {
            empId: '',
            empName: '',
            contactNumber: '',
            address: '',
            designation: '',
            flag: false,
            employee: []
        }

        this.handlechange = this.handlechange.bind(this);
        this.getEmployee = this.getEmployee.bind(this);
    }

    handlechange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
        // console.log(this.state);
    }

    getEmployee() {
        if (this.state.empId !== undefined && this.state.empId !== null) {
            EmployeeService.getEmployee(this.state.empId)
                .then(response => {
                    this.setState({ flag: true })
                    console.log(response.data);
                    // alert(response.data)
                    let employee = response.data;
                    this.setState({
                        employee: response.data
                    })

                })
        }
        console.log(this.state.employee);

    }


    render() {
        return (
            <div>
                <div className='container'>
                    <hr />
                    <h1><u>Search Employee Details using Employee ID</u></h1>
                    <br />
                    <table className='container'>
                        <tr>
                            <td><label for="empId">Employee ID</label></td>
                            <td><input type="text" id="empId" name="empId" onChange={this.handlechange} required /></td>
                            <td><button onClick={() => this.getEmployee()} > Submit </button></td>
                        </tr>
                    </table>

                </div>

                <br />

                {this.state.employee && this.state.flag && 
                    <table className='container'>
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Contact Number</th>
                                <th>Address</th>
                                <th>Designation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee.length > 0 ?
                                this.state.employee.map(
                                    emp =>
                                        <tr key={emp.empId}>
                                            <td>{emp.empId}</td>
                                            <td>{emp.empName}</td>
                                            <td>{emp.contactNumber}</td>
                                            <td>{emp.address}</td>
                                            <td>{emp.designation}</td>
                                        </tr>
                                ) :
                                <tr>No Employee Record Found !!</tr>
                            }
                        </tbody>
                    </table>
                }
            </div >


        );
    }
}
