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
};

export default EmployeeService;
