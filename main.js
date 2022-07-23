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
let readButton;
let removeBookButton;
let library = [];

class book{
    constructor(pages,read){
        this.title = '';
        this.author = '';
        this.pages = pages;
        this.read = read;
    }
    set capitalizeTitle(title){
        title = title.split(' ');
        for(let i = 0; i < title.length; i++){
            if(title[i] == title[i].toUpperCase()){

            }
            else{
            title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
            };
        };
        this.title = title.join(' ');
    };
    set capitalizeAuthor(author){
        author = author.split(' ');
        for(let i = 0; i < author.length; i++){
            if(author[i] == author[i].toUpperCase()){

            }
            else{
            author[i] = author[i].charAt(0).toUpperCase() + author[i].slice(1);
            };
        };
        this.author = author.join(' ');
    };
    
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
            return 'Read';
        }else{
            return 'Not read';
        };
    };
};

function addBookToLibrary(){
    //create new book object and add it to library array
    let titleValue = title.value;
    let authorValue = author.value;
    library[library.length] = new book(pages.value, getRadioValue());
    library[library.length - 1].capitalizeTitle = titleValue;
    library[library.length - 1].capitalizeAuthor = authorValue;
};

function createBook(){
    //delete all child nodes first
   booksContainer.innerHTML = "";

    for(let i = 0; i < library.length; i++){
        bookitem = document.createElement('div');
        titleDiv = document.createElement('div');
        authorDiv = document.createElement('div');
        pagesDiv = document.createElement('div');
        readButton = document.createElement('button');
        removeBookButton = document.createElement('button');

        titleDiv.textContent = library[i].title;
        authorDiv.textContent = library[i].author;
        pagesDiv.textContent = `${library[i].pages} pages`;
        readButton.textContent = library[i].read;
        removeBookButton.textContent = 'Remove';

        readButton.setAttribute('class', 'bookbutton');
        removeBookButton.setAttribute('class', 'bookbutton');

        if(library[i].read == 'Read'){
            readButton.style.backgroundColor = 'lime';
        }
        else{
            readButton.style.backgroundColor = 'pink';
        };

        readButton.addEventListener('click',function () {
            if(library[i].read == 'Read'){
                library[i].read = 'Not read';
            }
            else{
                library[i].read = 'Read';
            };
            createBook();
        });

        removeBookButton.addEventListener('click', function (){
            library.splice(i,1);
            createBook();
        });

        bookitem.appendChild(titleDiv);
        bookitem.appendChild(authorDiv);
        bookitem.appendChild(pagesDiv);
        bookitem.appendChild(readButton);
        bookitem.appendChild(removeBookButton);
        booksContainer.appendChild(bookitem);
    };
};

form.addEventListener('submit',function (e){
    addBookToLibrary();
    createBook();
    e.preventDefault();
    form.reset();
});

