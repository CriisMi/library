let myLibrary =[];

/* book object creator */

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        if(read) {
            return `${title} by ${author}, ${pages}, read.`
        } else {
            return `${title} by ${author}, ${pages}, not read yet.`
        }
    }
}

/* add the book to the library */
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

/* display library books */
const displayBooks = myLibrary => {
    myLibrary.forEach(book => {
        const library = document.getElementById('library');
        const card = document.createElement('div');

        /* set card id to books position in library */
        card.setAttribute('id', `book${myLibrary.indexOf(book)}`);

        const bookInfo = document.createElement('div');
        const bookText = document.createTextNode(book.info());
        bookInfo.appendChild(bookText);
        card.appendChild(bookInfo);
        deleteBtn(card);
        library.appendChild(card);
    })
};

/* delete btn to card */
function deleteBtn(card) {
    const delBtn = document.createElement('button');
    const delBtnText = document.createTextNode('Remove')
    delBtn.appendChild(delBtnText);
    card.appendChild(delBtn);

    delBtn.addEventListener('click', () =>{
        card.remove();
    });
}

/* book examples */
const book1 = new Book("Harry Potter", "J.K.R.", "850", true);
addBookToLibrary(book1);
const book2 = new Book("Dune", "Frank Herbet", "600", true);
addBookToLibrary(book2);
const book3 = new Book("The Hobbit", "J. R. R. Tolkien", " 400", true);
addBookToLibrary(book3);

displayBooks(myLibrary);

const btn = document.getElementById('addBook');

/* show form button */
btn.addEventListener('click', () => {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});
