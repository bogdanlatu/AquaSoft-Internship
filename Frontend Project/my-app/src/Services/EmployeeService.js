import Axios from "axios";

const EmployeeService = {
  getEmployees: () => {
    return Axios({
      method: "GET",
      url: "http://localhost:5000/employee/all",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return(res.data);
    });
  },

  getEmployeeAndProjects : employeeId => {
    return Axios({
      method: "GET",
      url: "http://localhost:5000/employee/projects/" + employeeId,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return(res.data);
    });
  },

  deleteEmployee : employeeId => {
    return Axios({
      method: "DELETE",
      url: "http://localhost:5000/employee/delete/" + employeeId,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return(res.data);
    });
  },

  postNewEmployee : employee => {
    return Axios({
      method: "POST",
      url: "http://localhost:5000/employee/new",
      headers: {
        "Content-Type": "application/json",
      },
      data : employee
    }).then((res) => {
      return(res.data);
    });
  },

  updateEmployee : (employeeId,employee) => {
    return Axios({
      method: "PUT",
      url: "http://localhost:5000/employee/modify/" + employeeId,
      headers: {
        "Content-Type": "application/json",
      },
      data : employee
    }).then((res) => {
      return(res.data);
    });
  }
};

export default EmployeeService;
