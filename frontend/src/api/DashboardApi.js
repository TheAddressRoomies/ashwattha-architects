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
}

export const dashboardApi = new DashboardApi();
