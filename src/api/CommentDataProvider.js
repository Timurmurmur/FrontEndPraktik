import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class CommentDataProvider extends BaseRestDataProvider {
  async loadComments(postId) {
    return await axios
    .post(`${this.host}comment/all`,{ postId }, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data);
  }

  async addComment(postId, comment) {
    return await axios
    .post(`${this.host}comment`,{ postId, comment }, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data);
  }
}
