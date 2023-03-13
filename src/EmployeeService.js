import axios from "axios";

class EmployeeService{

    base_url = "http://localhost:9001/employee";
    addEmployee(employee){
        let url = `${this.base_url}/addEmployee`;
        console.log(url);
        return axios.post(url, employee);
    }

    getEmployee(empId) {
        let url = `${this.base_url}/${empId}/employee-detail`;
        return axios.get(url);
    }
}

export default new EmployeeService();