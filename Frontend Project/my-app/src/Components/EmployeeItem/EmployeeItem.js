import React, { useState } from 'react';


const EmployeeItem = props => {
    const [employee,setEmployee] = useState({
        name : props.employee.Name,
        address : props.employee.Address,
        email : props.employee.Email,
        hire_date : props.employee.Hire_Date,
        salary : props.employee.Salary,
        job_title : props.employee.Job_Title,
        project_id : props.employee.Project_Id

    });

    
    const getDate = (date) => {
        const dt = new Date(date);
        const dtd = dt.getDate();
        const dtm = dt.getMonth();
        const dty = dt.getFullYear();
        return dtd + "/" + dtm + "/" + dty;
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
            <td>{employee.project_id}</td>
        </React.Fragment>

       
    )
}

export default EmployeeItem;
