import React, { useState } from 'react'
import ProjectService from "../../Services/ProjectService";

function ProjectAddButton() {
    const [project,setProject] = useState({
        Project_Name : "",
        Start_Date : "",
        Planned_End_Date : "",
        Description : "",
        Project_Code : ""
    });

    const onChange = e => {
        setProject({...project,[e.target.name] : e.target.value});
    }

    const resetForm = () =>{
        setProject({
            Project_Name : "",
            Start_Date : "",
            Planned_End_Date : "",
            Description : "",
            Project_Code : ""
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(project);
        ProjectService.postNewProject(project).then(data => {
            resetForm();
            console.log(data);
        });
    }

    return (

        <React.Fragment>

        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addProject">
            Add project
        </button>

        <div>
                    <div className="modal fade" id="addProject" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <form onSubmit={onSubmit}>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Project</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div className="modal-body">
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Project_Name</label>
                    <input type="text" name="Project_Name" value={project.Project_Name} onChange={onChange} className="form-control" id="exampleFormControlInput1" placeholder="Name of Project"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">Start_Date</label>
                    <input type="date" name="Start_Date" value={project.Start_Date}  onChange={onChange} className="form-control" id="exampleFormControlInput2"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput4" className="form-label">Planned_End_Date</label>
                    <input type="date" name="Planned_End_Date" value={project.Planned_End_Date}  onChange={onChange} className="form-control" id="exampleFormControlInput3"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                    <input type="text" name="Description" value={project.Description} onChange={onChange} className="form-control" id="exampleFormControlInput4" placeholder="This project is awesome"></input>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Project_Code</label>
                    <input type="text" name="Project_Code" value={project.Project_Code} onChange={onChange} className="form-control" id="exampleFormControlInput5" placeholder="BK-END"></input>
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

export default ProjectAddButton;
