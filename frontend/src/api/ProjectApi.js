import axios from "axios";

class ProjectAPi{
    fetchProjects(category){
        var url = "http://localhost:8080/projects";
        if(category !== undefined && category !== null) {
            url = `${url}?category=${category}`;
        }
        return axios.get(url)
        .then((response) => {
            return response.data.data;
        })
    }

    deleteProject(projectId){
        var url = `http://localhost:8080/projects/${projectId}`;
        return axios.delete(url)
        .then((response) => {
            return response.data.data;
        })
    }

}

export const projectApi = new ProjectAPi();