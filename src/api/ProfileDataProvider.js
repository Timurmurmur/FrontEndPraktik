import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class ProfileDataProvider extends BaseRestDataProvider {
  async loadUserPosts() {
    let userId = localStorage.getItem('userId');
    return await axios
    .get(`${this.host}user/posts`, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data);
  }
  
}
