import axios from "axios";
import {proxy, url, path, count} from "./../config";

export default class Search {
  constructor(query) {
    this.query = query;
    }

  async getResults() {

    try {
      const res = await axios(
        `${proxy}${url}${path}/wp-json/wp/v2/posts?search=${this.query}&per_page${count}`
      );
      this.result = res.data;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}