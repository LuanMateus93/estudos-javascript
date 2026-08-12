const Comment = require("./Comment");

class Post {
    constructor(author, comment) {
        this.author = author;
        this.comment = [];
    }

    adicionaComentario(comment) {
        const commentPost = new Comment(comment);
        this.comment.push(comment);
    }
}

module.exports = Post;