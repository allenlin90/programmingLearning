export default class Likes {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, author, img) {
    const like = { id, title, author, img };
    this.likes.push(like);
    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(function (item) {
      return item.id === id;
    });
    this.likes.splice(index, 1);
  }

  // We'd like to get a boolean true or false here to know if we will add class to the liked icon to indicate that the user has "liked" the recipe.
  isLiked(id) {
    return (
      this.likes.findIndex(function (item) {
        return item.id === id;
      }) !== -1
    );
  }

  getNumLikes() {
    return this.likes.length;
  }
}
