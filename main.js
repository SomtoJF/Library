let form = document.getElementById('form');
let addBook = document.getElementById('addbook');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let readStatus = document.getElementsByName('readstatus');
let read = document.getElementById('read');
let notRead = document.getElementById('notread');
let booksContainer = document.getElementById('bookscontainer');
let library = [];

function book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
book.prototype.info = function () {
    return `${this.title}, written by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function getRadioValue(){
    for(let i = 0; i < readStatus.length; i++){
        if(readStatus[i].checked && i == 0){
            return 'read';
        }else{
            return 'not read';
        };
    };
};

form.addEventListener('submit',function (e){
    library[library.length] = new book(title.value,author.value,pages.value, getRadioValue());
    alert(library[0].title);
    e.preventDefault();
});


// let hobbit = new book('hobbit','jr tolkien',292,'read');
// console.log(hobbit.info());