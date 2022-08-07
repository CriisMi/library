let myLibrary =[];

/* book object creator */

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function(read) {
        if(this.read) {
            return `${title} by ${author}, ${pages} pages, read.`;
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.`;
        }
    }
}

/* add the book to the library */
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

/* display library books */
const displayBooks = () => {
    const cards = document.createElement('div');
    cards.setAttribute('id', 'cards');
    myLibrary.forEach(book => {
        const library = document.getElementById('library');
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const bookInfo = document.createElement('div');
        const bookText = document.createTextNode(book.info());
        bookInfo.appendChild(bookText);
        card.appendChild(bookInfo);

        const btnCard = document.createElement('div');
        card.appendChild(btnCard);
        btnCard.setAttribute('class', 'btnCard');
        
        deleteBtn(btnCard);
        statusBtn(btnCard, book, cards);
        cards.appendChild(card);
        library.appendChild(cards);
    })
};

/* delete btn to card */
function deleteBtn(btnCard) {
    const delBtn = document.createElement('button');
    const delBtnText = document.createTextNode('Remove')
    delBtn.appendChild(delBtnText);
    btnCard.appendChild(delBtn);

    delBtn.addEventListener('click', () =>{
        card.remove();
    });
};

/* change read status btn to card */
function statusBtn(btnCard, book, cards) {
    const statBtn = document.createElement('button');
    const statBtnText = document.createTextNode('Change Status');
    statBtn.appendChild(statBtnText);
    btnCard.appendChild(statBtn);

    statBtn.addEventListener('click', () => {
        cards.remove();
        book.changeStat();
        displayBooks();
    })
}

/* change read stat */
Book.prototype.changeStat = function() {
    if(this.read) {
        this.read = false;
    } else {
        this.read = true;
    }
}

/* book examples */
const book1 = new Book("Harry Potter", "J.K.R.", "850", false);
addBookToLibrary(book1);
const book2 = new Book("Dune", "Frank Herbet", "600", true);
addBookToLibrary(book2);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
addBookToLibrary(book3);

displayBooks();

/* show form button */
const forumBtn = document.getElementById('addBook');

forumBtn.addEventListener('click', () => {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});
