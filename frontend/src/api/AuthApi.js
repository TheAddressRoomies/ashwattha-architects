import axios from "axios";
import { sessionStorage } from "../storage/SessionStorage";
import { CACHE_KEY } from '../keys/keys.js';

class AuthApi {  
    context = {};
  
    constructor() {
      const context = sessionStorage.getItem(CACHE_KEY);
      if (context) {
        this.context = context;
      }
    }

    async getSession() {
        return this.context.session;
      }
  
    login(username,password) {
        return axios.post("http://localhost:8080/admin/login", {
            username: username,
            password: password
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