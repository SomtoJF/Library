let newBook = document.getElementById('newbook');
let form = document.getElementById('form');
let addBook = document.getElementById('addbook');
let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let readStatus = document.getElementsByName('readstatus');
let read = document.getElementById('read');
let notRead = document.getElementById('notread');
let cancel = document.getElementById('cancel');
let booksContainer = document.getElementById('bookscontainer');
let bookitem;
let titleDiv;
let authorDiv;
let pagesDiv;
let library = [];

function book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
book.prototype.info = function () {
    return `${this.title}, written by ${this.author}, ${this.pages} pages, ${this.read}.`;
};

newBook.addEventListener('click', function (){
    if(form.style.display =='flex'){
        form.style.display = 'none';
    }else{
        form.style.display = 'flex';
    }
});

function getRadioValue(){
    for(let i = 0; i < readStatus.length; i++){
        if(readStatus[i].checked && i == 0){
            return 'read';
        }else{
            return 'not read';
        };
    };
};

function addBookToLibrary(){
    //create new book object and add it to library array
    library[library.length] = new book(title.value,author.value,pages.value, getRadioValue());
};

function createBook(){
    //delete all child nodes first
   booksContainer.innerHTML = "";

    for(let i = 0; i < library.length; i++){
        bookitem = document.createElement('div');
        titleDiv = document.createElement('div');
        titleDiv.textContent = library[i].title;
        authorDiv = document.createElement('div');
        authorDiv.textContent = library[i].author;
        pagesDiv = document.createElement('div');
        pagesDiv.textContent = library[i].pages;
        bookitem.appendChild(titleDiv);
        bookitem.appendChild(authorDiv);
        bookitem.appendChild(pagesDiv);
        booksContainer.appendChild(bookitem);
    };
};

form.addEventListener('submit',function (e){
    addBookToLibrary();
    createBook();
    e.preventDefault();
    form.reset();
});


// let hobbit = new book('hobbit','jr tolkien',292,'read');
// console.log(hobbit.info());