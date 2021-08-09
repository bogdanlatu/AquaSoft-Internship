import React, {useState,useEffect} from "react";
import './EmployeesPage.css';
import EmployeeService from "../../Services/EmployeeService";

//Components
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import EmployeeAddButton from "../EmployeeAddButton/EmployeeAddButton";

function EmployeesPage() {

    const [employees,setEmployees] = useState([]);


  useEffect(() => {
      EmployeeService.getEmployees().then(data => {
        setEmployees(data.result);
      });
  }, [employees]); 

  const employeesList = () => {
    
    const list = employees.map(employee =>
                 <tr  key={employee._id}>
                     <EmployeeItem employee={employee}/>
                 </tr>
  
                );
    
    
    return list;
                           
}



  return (
    <div className="EmployeesPage">
        <table className="table">
            
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                    <th scope="col">Hire_Date</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Job_Title</th>
                    <th scope="col">Projects</th>
                    <th scope="col">
                        <EmployeeAddButton/>
                    </th>
                </tr>
            </thead>

            <tbody>
                {employees ? employeesList() : null}
            </tbody>
            
        </table>
 
    </div>
  );
}

export default EmployeesPage;
