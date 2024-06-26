import axios from "axios";
import BaseApi from "./BaseApi.js";

class ProjectAPi extends BaseApi {
  constructor() {
    super();
  }

  async fetchProjects(page, pageSize, category) {
    var url = this.getBaseUrl() + "/projects";
    // if (category !== undefined && category !== null) {
    //   url = `${url}?category=${category}`;
    // }
    // return axios.get(url).then((response) => {
    //   return response.data.data;
    // });
    return axios.get(url, {
      params: {
        page: page,
        pageSize: pageSize,
        category: category
      }
    });
  }

  async fetchProjectById(id) {
    var url = this.getBaseUrl() + `/projects/${id}`;
    // if (category !== undefined && category !== null) {
    //   url = `${url}?category=${category}`;
    // }
    // return axios.get(url).then((response) => {
    //   return response.data.data;
    // });
    return axios.get(url);
  }

  async deleteProject(projectId) {
    var url = this.getBaseUrl() + `/projects/${projectId}`;
    var request = axios.delete(url, this.getHeaders());
    return this.send(request).then((response) => {
      return response.data.data;
    });
  }

  async addProject(projectData) {
    var url = this.getBaseUrl() + "/projects";
    var request = axios.postForm(url, projectData, this.getHeaders());
    return this.send(request).then((response) => {
      return response.data.data;
    });
  }

  async editProject(projectData) {
    var url = this.getBaseUrl() + "/projects";
    var request = axios.putForm(url, projectData, this.getHeaders());
    return this.send(request).then((response) => {
      return response.data.data;
    });
  }
}

export const projectApi = new ProjectAPi();
