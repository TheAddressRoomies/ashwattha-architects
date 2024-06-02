import axios from "axios";
import { BACKEND_BASE_URL } from '../keys/keys.js';

class ProjectAPi{
    fetchProjects(category){
        var url = BACKEND_BASE_URL + "/projects";
        if(category !== undefined && category !== null) {
            url = `${url}?category=${category}`;
        }
        return axios.get(url)
        .then((response) => {
            return response.data.data;
        })
    }

    deleteProject(projectId){
        var url = BACKEND_BASE_URL + `/projects/${projectId}`;
        return axios.delete(url)
        .then((response) => {
            return response.data.data;
        })
    }

}

export const projectApi = new ProjectAPi();
