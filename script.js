let myLibrary =[];

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

const harryPotter = new Book("Harry Potter", "J. K. Rowling", "766", true);
addBookToLibrary(harryPotter);
const dune = new Book("Dune", "Frank Herbet", "412", true);
addBookToLibrary(dune);
const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", "310", true);
addBookToLibrary(theHobbit);
const annaKarenina = new Book("Anna Karenina", "Leo Tolstoy", "800", false);
addBookToLibrary(annaKarenina);

function postBook() {
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        const bookInfo = document.createTextNode(book.info());
        card.appendChild(bookInfo);
        document.getElementById("library").appendChild(card);
    })
};


/* function myFunction() {
    myLibrary.forEach(book => {
        const card = document.createElement("div");

        const title = document.createElement("div");
        card.appendChild(title);

        const texttitle = document.createTextNode(book.title);
        title.appendChild(texttitle);

        const author = document.createElement("div");
        card.appendChild(author);

        const textauthor = document.createTextNode(`author: ${book.author}`);
        author.appendChild(textauthor);

        const pages = document.createElement("div");
        card.appendChild(pages);

        const textpages = document.createTextNode(`pages: ${book.pages}`);
        pages.appendChild(textpages);

        const read = document.createElement("div");
        card.appendChild(read);

        let textread = " ";
        if(book.read) {
            textread = document.createTextNode(`Read`);
        } else {
            textread = document.createTextNode('Not read yet');
        }
        read.appendChild(textread);

        document.getElementById("library").appendChild(card);
    })
} */