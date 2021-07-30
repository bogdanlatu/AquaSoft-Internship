import React, {useState,useEffect} from "react";
import './EmployeesPage.css';
import EmployeeService from "../../Services/EmployeeService";

//Components
import EmployeeItem from "../EmployeeItem/EmployeeItem";
import EmployeeModal from '../EmployeeModal/EmployeeModal';

function EmployeesPage() {

    const [employees,setEmployees] = useState(null);
    const [employee,setEmployee] = useState({
        name : "",
        address : "",
        email : "",
        hire_date : "",
        salary : "",
        job_title : "",
        project_id : ""
    });

  useEffect(() => {
      EmployeeService.getEmployees().then(data => {
        setEmployees(data.result);
      });
  }, []); 

  const employeesList = () => {
    
    const list = employees.map(employee =>
                 <tr  key={employee._id}>
                     <EmployeeItem employee={employee}/>
                     <EmployeeModal employee={employee}/>
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
                    <th scope="col">Project_Id</th>
                    <th scope="col">
                        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addEmployee">
                            Add employee
                        </button>
                    </th>
                </tr>
            </thead>

            <tbody>
                {employees ? employeesList() : null}
            </tbody>
            

        </table>

        <div class="modal fade" id="addEmployee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Employee</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Independence Str, Nr. 39"></input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Hire_Date</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="22/04/2021"></input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Salary</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="£3000"></input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Job_Title</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="CEO"></input>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Project_Id</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="project id"></input>
                </div>
                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add</button>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default EmployeesPage;
