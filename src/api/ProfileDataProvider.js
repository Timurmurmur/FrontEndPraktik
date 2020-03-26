import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class ProfileDataProvider extends BaseRestDataProvider {
  async loadUserPosts() {
    return await axios
    .get(`${this.host}user/posts`, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data);
  }
}
