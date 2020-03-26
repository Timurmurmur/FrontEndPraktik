import axios from "axios";
import { BaseRestDataProvider } from "./BaseRestDataProvider";

export class ArticleDataProvider extends BaseRestDataProvider {
  async loadPost(id) {
    return await axios
    .get(`${this.host}post/${id}`, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data)
  }
  async addArticle(article) {
    console.log(article);
    
    return await axios
    .post(`${this.host}post`, article, { headers: { token: localStorage.getItem('token') }})
    .then(res => res.data)
  }
}
