import axios from "axios";
import BaseApi from "./BaseApi";

class DashboardApi extends BaseApi {
  constructor() {
    super();
  }

  async fetchCarouselImages() {
    var url = this.getBaseUrl() + "/dashboard/carousel";
    return axios.get(url);
  }

  async updateCarouselImages(formData) {
    var url = this.getBaseUrl() + "/dashboard/carousel";
    var request = axios.putForm(url, formData, this.getHeaders());
    return this.send(request).then((response)=>{
      return response.data.data;
    })
  }

  
}

export const dashboardApi = new DashboardApi();
