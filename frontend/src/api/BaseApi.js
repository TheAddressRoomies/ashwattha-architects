import { redirect } from "react-router-dom";
import { BACKEND_BASE_URL, SESSION_KEY } from "../keys/keys.js";
import { sessionStorage } from "../storage/SessionStorage.js";
import { useSession } from "../hooks/UseSession.js";
import { authApi } from "./AuthApi.js";

class BaseApi {
  getBaseUrl() {
    return BACKEND_BASE_URL;
  }

  getHeaders() {
    var jwtToken = sessionStorage.getItem(SESSION_KEY);
    return { headers: { Authorization: `Bearer ${jwtToken}` } };
  }

  async send(request) {
    return request.catch((error) => {
      if (error.response.status == 401) {
        authApi.logout();
        window.location.href = "/admin/login";
        return;
      }
      throw error;
    });
  }
}

export default BaseApi;
