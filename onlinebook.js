const books = [
  {title: "1984",author: "George Orwell",category: "Science Fiction",link: "#"},
  {title: "Pride and Prejudice",author: "Jane Austen",category: "Literature",link: "#"},
  {title: "The Hobbit",author: "J.R.R. Tolkien",category: "Fantasy",link: "#"},
  {title: "The Art of War",author: "Sun Tzu",category: "Philosophy",link: "#"},
  {title: "A Brief History of Time",author: "Stephen Hawking",category: "Science",link: "#"}
];

const grid = document.getElementById("booksGrid");
const searchInput = document.getElementById("searchInput");

function renderBooks(list) {
  grid.innerHTML = "";

  list.forEach(book => {
    grid.innerHTML += `
      <div class="book-card">
        <div class="book-info">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-author">by ${book.author}</p>
          <p class="sample-text">${book.category}</p>

          <div style="margin-top: 1rem;">
            <a href="${book.link}" class="book-location">Read Online</a>
          </div>
        </div>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(value) ||
    b.author.toLowerCase().includes(value)
  );
  renderBooks(filtered);
});

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    if (cat === "All") {
      renderBooks(books);
    } else {
      renderBooks(books.filter(b => b.category === cat));
    }
  });
});

renderBooks(books);