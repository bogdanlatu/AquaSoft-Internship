import Axios from "axios";

const ProjectService = {
  getProjects: () => {
    return Axios({
      method: "GET",
      url: "http://localhost:5000/project/all",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return(res.data);
    });
  },

  updateProject : (projectId,project) => {
    return Axios({
      method: "PUT",
      url: "http://localhost:5000/project/modify/" + projectId,
      headers: {
        "Content-Type": "application/json",
      },
      data : project
    }).then((res) => {
      return(res.data);
    });
  },

  deleteProject : projectId => {
    return Axios({
      method: "DELETE",
      url: "http://localhost:5000/project/delete/" + projectId,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return(res.data);
    });
  },

  postNewProject : project => {
    return Axios({
      method: "POST",
      url: "http://localhost:5000/project/new",
      headers: {
        "Content-Type": "application/json",
      },
      data : project
    }).then((res) => {
      return(res.data);
    });
  }

};

export default ProjectService;