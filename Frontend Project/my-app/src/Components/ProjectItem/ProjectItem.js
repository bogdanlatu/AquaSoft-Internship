import React, { useState,useEffect } from 'react';
import ProjectService from "../../Services/ProjectService";

//Components
import ProjectModal from '../ProjectModal/ProjectModal';

const ProjectItem = props => {
    const [project,setProject] = useState({
        _id : props.project._id,
        Project_Name : props.project.Project_Name,
        Start_Date : props.project.Start_Date,
        Planned_End_Date : props.project.Planned_End_Date,
        Description : props.project.Description,
        Project_Code : props.project.Project_Code

    });
    
    const getDate = (date) => {
        const dt = new Date(date);
        const dtd = dt.getDate();
        const dtm = dt.toLocaleString('default', { month: 'short' });;
        const dty = dt.getFullYear();
        return dtd + "/" + dtm + "/" + dty;
    }


    const setStateFromModal = (project) => {
        setProject({
            _id : project._id,
            Project_Name : project.Project_Name,
            Start_Date : project.Start_Date,
            Planned_End_Date : project.Planned_End_Date,
            Description : project.Description,
            Project_Code : project.Project_Code
        });
    }


    return (
        <React.Fragment>
            <th scope="row">{project.Project_Name}</th>
            <td>{getDate(project.Start_Date)}</td>
            <td>{getDate(project.Planned_End_Date)}</td>
            <td>{project.Description}</td>
            <td>{project.Project_Code}</td>
            {project ? <ProjectModal project={project} handler={setStateFromModal}/> : null} 
        </React.Fragment>

       
    )
}

export default ProjectItem;
