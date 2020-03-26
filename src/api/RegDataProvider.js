import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class RegDataProvider extends BaseRestDataProvider {
  reg(login, password, nickname, email) {

    return axios
    .post(
      `${this.host}auth/register`,
      { login, password, nickname, email },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Origin: "*"
        }
      }
    )
    .then(res =>
      {
        localStorage.setItem("token", res.data.token);
        return res
      }
    )
  }
}

// login: 'Timurmurmur',
//     password: '952169679asD',
//     nickname: 'Timurmurmur',
//     email: 'bartimurmurmur@gmail.com'
