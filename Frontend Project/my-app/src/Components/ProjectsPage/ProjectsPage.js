import React, {useState,useEffect} from "react";
import './ProjectsPage.css';
import ProjectService from "../../Services/ProjectService";

//Components
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectAddButton from "../ProjectAddButton/ProjectAddButton";

function ProjectsPage() {

    const [projects,setProjects] = useState([]);


  useEffect(() => {
    ProjectService.getProjects().then(data => {
        setProjects(data.result);
      });
  }, [projects]); 

  const projectsList = () => {
    
    const list = projects.map(project =>
                 <tr  key={project._id}>
                     <ProjectItem project={project}/>
                 </tr>
  
                );
    
    
    return list;
                           
}



  return (
    <div className="ProjectsPage">
        <table className="table">
            
            <thead>
                <tr>
                    <th scope="col">Project Name</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Planned End Date</th>
                    <th scope="col">Description</th>
                    <th scope="col">Project Code</th>
                    <th scope="col">
                        <ProjectAddButton/>
                    </th>
                </tr>
            </thead>

            <tbody>
                {projects ? projectsList() : null}
            </tbody>
            
        </table>
 
    </div>
  );
}

export default ProjectsPage;
