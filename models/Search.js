import axios from "axios";
import { proxy, url, post_type, path, count, params } from "./../config";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(
        `${proxy}${url}${path}/wp-json/wp/v2/${post_type}?search=${this
          .query}&per_page${count}&${params}`
      );
      this.result = res.data;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
