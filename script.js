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

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function postBook(book) {
    const card = document.createElement("div");
    const bookInfo = document.createTextNode(book.info());
    card.appendChild(bookInfo);
    document.getElementById("library").appendChild(card);
};

const btn = document.getElementById('addBook');


btn.addEventListener('click', () => {
  const form = document.getElementById('form');
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    postBook(book);
  }
});
