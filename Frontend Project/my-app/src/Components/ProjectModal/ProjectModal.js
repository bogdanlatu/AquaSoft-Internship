import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import ProjectService from "../../Services/ProjectService";

const ProjectModal = props => {
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

    const [project,setProject] = useState({
        _id : props.project._id,
        Project_Name : props.project.Project_Name,
        Start_Date : getDate(props.project.Start_Date),
        Planned_End_Date : getDate(props.project.Planned_End_Date),
        Description : props.project.Description,
        Project_Code : props.project.Project_Code

    });
    

    const element = <FontAwesomeIcon icon={faCog} />

    const onChange = e => {
        setProject({...project,[e.target.name] : e.target.value});
    }


    const onSubmit = e => {
        e.preventDefault();
        //console.log(project);
        const tempProject = {
            Project_Name : project.Project_Name,
            Start_Date : project.Start_Date,
            Planned_End_Date : project.Planned_End_Date,
            Description : project.Description,
            Project_Code : project.Project_Code
        }
        ProjectService.updateProject(project._id,tempProject).then(data => {
            console.log(data.result);
            props.handler(data.result);
        });
    }

    const onClickDeleteProject = () => {
        ProjectService.deleteProject(project._id).then(data => {
            console.log(data.message);
        });
    }

    return (
        <td className="ProjectModal">
            
            <button type="button" className="btn btn-primary-outline" data-bs-toggle="modal" data-bs-target={"#modal" + project._id}>
                {element}
            </button>


            <div className="modal fade" id={"modal" + project._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form onSubmit={onSubmit}>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modify Employee</h5>
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
                    <button type="submit" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-danger" data-bs-target={"#modalDelete" + project._id} data-bs-toggle="modal" data-bs-dismiss="modal">Delete</button>
                </div>
                </div>
                </form>
            </div>
            </div>

            <div className="modal fade" id={"modalDelete" + project._id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Project</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete {project.name}?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">No</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={onClickDeleteProject}>Yes</button>
                </div>
                </div>
            </div>
            </div>
            
        </td>
    )
}

export default ProjectModal;
