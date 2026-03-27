// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

// Function to render the reading list
function readingList(books) {
  const readingListUl = document.getElementById("reading-list");

  books.forEach((book) => {
    // Create list item
    const li = document.createElement("li");

    // Set background color based on whether the book has been read
    li.style.backgroundColor = book.alreadyRead ? "green" : "red";

    // Create image element
    const img = document.createElement("img");
    img.src = book.bookCoverImage;
    img.alt = `${book.title} book cover`;

    // Create title and author container
    const infoDiv = document.createElement("div");
    infoDiv.className = "book-info";

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = book.author;

    // Append elements
    infoDiv.appendChild(title);
    infoDiv.appendChild(author);

    li.appendChild(img);
    li.appendChild(infoDiv);

    // Append to the reading list
    readingListUl.appendChild(li);
  });
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  readingList(books);
});
