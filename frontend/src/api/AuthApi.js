import axios from "axios";
import { sessionStorage } from "../storage/SessionStorage";

class AuthApi {
    static KEY_CACHE = 'cache';
  
    context = {};
  
    constructor() {
      const context = sessionStorage.getItem(AuthApi.KEY_CACHE);
      if (context) {
        this.context = context;
      }
    }

    async getSession() {
        return this.context.session;
      }
  
    login() {
        return axios.post("http://localhost:8080/admin/login", {
            username: 'admin',
            password: 'admin@123'
        })
        .then((response) => {
            console.log(response);
            this.context.session = response.data.data.jwt;
            sessionStorage.setItem(AuthApi.KEY_CACHE, this.context);
            return this.context.session;
        });
    }
  
    logout() {
      this.context = {};
      sessionStorage.clear();
    }
  }
  
  export const authApi = new AuthApi();