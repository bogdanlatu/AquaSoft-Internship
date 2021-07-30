import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const EmployeeModal = props => {
    const [employee,setEmployee] = useState(props.employee);
    const [name,setName] = useState(null);
    
    useEffect(() => {
        if(employee){
            setName(employee.Name);
        }
    }, [employee])
 

    const element = <FontAwesomeIcon icon={faCog} />

    return (
        <td className="EmployeeModal">
            
            <button type="button" className="btn btn-primary-outline" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {element}
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modify Employee</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {name ? name : "nimic"}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Delete</button>
                </div>
                </div>
            </div>
            </div>

            <div className="modal fade" id="exampleModalToggle2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Employee</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this employee?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Yes</button>
                </div>
                </div>
            </div>
            </div>
            
        </td>
    )
}

export default EmployeeModal;
