import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const result = await axios(
        `https://forkify-api.herokuapp.com/search?q=${this.query}`
      );
      this.result = result.data.recipes;
      // console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
