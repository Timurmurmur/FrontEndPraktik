import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class MainDataProvider extends BaseRestDataProvider {
  async loadPosts() {
    return await axios
    .get(`${this.host}post`, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data)
  }
  async loadPostsByTitle (title) {
    return await axios
    .post(`${this.host}post/search`,{ title }, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data)
  }
}
