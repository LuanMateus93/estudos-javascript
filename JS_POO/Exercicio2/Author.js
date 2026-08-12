const Post = require("./Post");

class Author {
    constructor(nome, post) {
        this.nome = nome;
        this.post = [];
    }

    criacaoDePosts(authorPost) {
        const postAuthor = new Post(this.nome);
        this.post.push(postAuthor);
        return postAuthor;
    }
}

module.exports = Author;