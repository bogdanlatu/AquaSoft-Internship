import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import EmployeeService from "../../Services/EmployeeService";

const EmployeeModal = props => {
    const getDate = (date) => {
        const d = new Date(date);

        let year = d.getFullYear();
        let month ='' + (d.getMonth() + 1);
        let day = '' + d.getDate();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const [employee,setEmployee] = useState({
        _id : props.employee._id,
        Name : props.employee.name,
        Address : props.employee.address,
        Email : props.employee.email,
        Hire_Date : getDate(props.employee.hire_date),
        Salary : props.employee.salary,
        Job_Title : props.employee.job_title,
        Project_Id : props.employee.project_id
    });
    

    const element = <FontAwesomeIcon icon={faCog} />

    const onChange = e => {
        setEmployee({...employee,[e.target.name] : e.target.value});
    }

    const onChangeProject = e => {
        
    }

    const onSubmit = e => {
        e.preventDefault();
        //console.log(employee);
        const tempEmployee = {
            Name : employee.Name,
            Address : employee.Address,
            Email : employee.Email,
            Hire_Date : employee.Hire_Date,
            Salary : employee.Salary,
            Job_Title : employee.Job_Title,
            Project_Id : employee.Project_Id
        }
        EmployeeService.updateEmployee(employee._id,tempEmployee).then(data => {
            console.log(data.result);
            props.handler(data.result);
        });
    }

    const onClickDeleteEmployee = () => {
        EmployeeService.deleteEmployee(employee._id).then(data => {
            console.log(data.message);
        });
    }

    return (
        <td className="EmployeeModal">
            
            <button type="button" className="btn btn-primary-outline" data-bs-toggle="modal" data-bs-target={"#modal" + employee._id}>
                {element}
            </button>


            <div className="modal fade" id={"modal" + employee._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form onSubmit={onSubmit}>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modify Employee</h5>
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
                    <input type="date" name="Hire_Date" value={employee.Hire_Date}  onChange={onChange} className="form-control" id="exampleFormControlInput4"></input>
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
                    <input type="text" name="Project_Id" value={employee.Project_Id} onChange={onChangeProject} className="form-control" id="exampleFormControlInput7" placeholder="project id"></input>
                </div>
                
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-danger" data-bs-target={"#modalDelete" + employee._id} data-bs-toggle="modal" data-bs-dismiss="modal">Delete</button>
                </div>
                </div>
                </form>
            </div>
            </div>

            <div className="modal fade" id={"modalDelete" + employee._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Employee</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete {employee.name}?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onClickDeleteEmployee}>Yes</button>
                </div>
                </div>
            </div>
            </div>
            
        </td>
    )
}

export default EmployeeModal;
