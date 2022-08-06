let myLibrary =[];

/* book object creator */

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}.`
    }
}

Book.prototype.read = function(read) {

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
        const bookInfo = document.createElement('div');
        const bookText = document.createTextNode(book.info());
        bookInfo.appendChild(bookText);
        card.appendChild(bookInfo);
        deleteBtn(card);
        statusBtn(card);
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

/* change read status btn to card */
function statusBtn(card) {
    const statBtn = document.createElement('button');
    const statBtnText = document.createTextNode('Change Status');
    statBtn.appendChild(statBtnText);
    card.appendChild(statBtn);

    statBtn.addEventListener('click', () => {

    })
}



/* book examples */
const book1 = new Book("Harry Potter", "J.K.R.", "850", true);
addBookToLibrary(book1);
const book2 = new Book("Dune", "Frank Herbet", "600", true);
addBookToLibrary(book2);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", "295", true);
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
