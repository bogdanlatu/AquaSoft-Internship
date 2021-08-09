import React, { useState } from 'react'
import EmployeeService from "../../Services/EmployeeService";

function EmployeeAddButton() {
    const [employee,setEmployee] = useState({
        Name : "",
        Address : "",
        Email : "",
        Hire_Date : "",
        Salary : "",
        Job_Title : "",
        Project_Id : []
    });

    const onChange = e => {
        setEmployee({...employee,[e.target.name] : e.target.value});
    }

    const resetForm = () =>{
        setEmployee({
            Name : "",
            Address : "",
            Email : "",
            Hire_Date : "",
            Salary : "",
            Job_Title : "",
            Project_Id : []
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(employee);
        EmployeeService.postNewEmployee(employee).then(data => {
            resetForm();
            console.log(data);
        });
    }

    return (

        <React.Fragment>

        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addEmployee">
            Add employee
        </button>

        <div>
                    <div className="modal fade" id="addEmployee" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <form onSubmit={onSubmit}>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Employee</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div className="modal-body">
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" name="Name" value={employee.Name} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="John Smith"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput2" className="form-label">Address</label>
                    <input type="text" name="Address" value={employee.Address} onChange={onChange} className="form-control" id="exampleFormControlInput2" placeholder="Independence Str, Nr. 39"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput3" className="form-label">Email</label>
                    <input type="email" name="Email" value={employee.Email} onChange={onChange} className="form-control" id="exampleFormControlInput3" placeholder="name@example.com"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">Hire_Date</label>
                    <input type="date" name="Hire_Date" value={employee.Hire_Date} onChange={onChange} className="form-control" id="exampleFormControlInput4"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput5" className="form-label">Salary</label>
                    <input type="text" name="Salary" value={employee.Salary} onChange={onChange} className="form-control" id="exampleFormControlInput5" placeholder="£3000"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput6" className="form-label">Job_Title</label>
                    <input type="text" name="Job_Title" value={employee.Job_Title} onChange={onChange} className="form-control" id="exampleFormControlInput6" placeholder="CEO"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput7" className="form-label">Project_Id</label>
                    <input type="text" name="Project_Id" value={employee.Project_Id} onChange={onChange} className="form-control" id="exampleFormControlInput7" placeholder="project id"></input>
                </div>
                
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
                </div>
                </form>
            </div>
        </div>
        </div>

        </React.Fragment>
    )
}

export default EmployeeAddButton;
