import React, { useState,useEffect } from 'react';
import EmployeeService from "../../Services/EmployeeService";

//Components
import EmployeeModal from '../EmployeeModal/EmployeeModal';

const EmployeeItem = props => {
    const [employee,setEmployee] = useState({
        _id : props.employee._id,
        name : props.employee.Name,
        address : props.employee.Address,
        email : props.employee.Email,
        hire_date : props.employee.Hire_Date,
        salary : props.employee.Salary,
        job_title : props.employee.Job_Title,
        project_id : props.employee.Project_Id

    });
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        EmployeeService.getEmployeeAndProjects(props.employee._id).then(data => {
            const projectsToAdd = [];
            data.result.Project_Id.map(project =>{
                if(project.Project_Name)
                    projectsToAdd.push(project.Project_Name)
            });
            setProjects(projectsToAdd);  
        });
    }, []);

    
    const getDate = (date) => {
        const dt = new Date(date);
        const dtd = dt.getDate();
        const dtm = dt.toLocaleString('default', { month: 'short' });;
        const dty = dt.getFullYear();
        return dtd + "/" + dtm + "/" + dty;
    }

    const displayProjects = () => {
        const projectsToDisplay = [];
        if(projects){
            for (let i=0; i<projects.length; i++)
                projectsToDisplay.push(
                    <p key={i}>{projects[i]}</p>
                )

        }
        return projectsToDisplay;
    }

    const setStateFromModal = (employee) => {
        setEmployee({
            _id : employee._id,
            name : employee.Name,
            address : employee.Address,
            email : employee.Email,
            hire_date : employee.Hire_Date,
            salary : employee.Salary,
            job_title : employee.Job_Title,
            project_id : employee.Project_Id
        });
    }


    return (
        <React.Fragment>
            <th scope="row">{employee.name}</th>
            <td>{employee.address}</td>
            <td>{employee.email}</td>
            <td>{getDate(employee.hire_date)}</td>
            <td>
                {new Intl.NumberFormat("en-GB", {
                    style : "currency",
                    currency : "GBP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                }).format(employee.salary)}
            </td>
            <td>{employee.job_title}</td>
            <td>{projects[0] ? displayProjects() : <p>No projects assigned</p>}</td>
            {employee ? <EmployeeModal employee={employee} handler={setStateFromModal}/> : null} 
        </React.Fragment>

       
    )
}

export default EmployeeItem;
