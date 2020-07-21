import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const result = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      const recipe = result.data.recipe;
      this.title = recipe.title;
      this.author = recipe.publisher;
      this.image = recipe.image_url;
      this.url = recipe.source_url;
      this.ingredients = recipe.ingredients;
    } catch (error) {
      console.log(error);
      alert("Something went wrong :(");
    }
  }

  calcTime() {
    // Assuming that we need 15 mins for each 3 ingredients
    const numIngredients = this.ingredients.length;
    const period = Math.ceil(numIngredients / 3);
    this.time = period * 15;
  }

  calcServings() {
    this.serving = 4;
  }
}
