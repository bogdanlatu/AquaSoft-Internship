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
      console.log(res.data);
    });
  },
};

export default ProjectService;