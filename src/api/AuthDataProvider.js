import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class AuthDataProvider extends BaseRestDataProvider {
  login(login, password) {
    return axios
    .post(
      `${this.host}auth/login`,
      { login, password },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Origin: "*"
        }
      }
    )
    .then(res =>
      {
        localStorage.setItem("X_CSRF_TOKEN", res.headers["x-csrf-token"])
        return res
      }
    )
  }
}
