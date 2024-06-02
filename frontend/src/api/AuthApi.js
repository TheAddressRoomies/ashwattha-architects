import axios from "axios";
import { sessionStorage } from "../storage/SessionStorage";
import { CACHE_KEY, BACKEND_BASE_URL } from "../keys/keys.js";
import BaseApi from "./BaseApi.js";

class AuthApi extends BaseApi {
  context = {};

  constructor() {
    super();
    const context = sessionStorage.getItem(CACHE_KEY);
    if (context) {
      this.context = context;
    }
  }

  async getSession() {
    return this.context.session;
  }

  login(username, password) {
    return axios
      .post(this.getBaseUrl() + "/admin/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        this.context.session = response.data.data.jwt;
        sessionStorage.setItem(CACHE_KEY, this.context);
        return this.context.session;
      });
  }

  logout() {
    this.context = {};
    sessionStorage.clear();
  }
}

export const authApi = new AuthApi();
