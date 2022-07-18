function book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
book.prototype.info = function () {
    return `${this.title}, written by ${this.author}, ${this.pages} pages, ${this.read}`;
}

let hobbit = new book('hobbit','jr tolkien',292,'read');
console.log(hobbit.info());