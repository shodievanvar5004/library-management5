// Namuna kitoblar ma'lumotlari
const books = [
  
  { title: "Pride and Prejudice", author: "Jane Austen", category: "Literature", location: "2nd Floor, A Section, Shelf 3" },
  { title: "1984", author: "George Orwell", category: "Science Fiction", location: "3rd Floor, B Section, Shelf 1" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", category: "Literature", location: "1st Floor, C Section, Shelf 5" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Literature", location: "2nd Floor, D Section, Shelf 2" },
  { title: "Moby-Dick", author: "Herman Melville", category: "Literature", location: "4th Floor, A Section, Shelf 6" },

  { title: "War and Peace", author: "Leo Tolstoy", category: "Literature", location: "5th Floor, B Section, Shelf 1" },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "Literature", location: "3rd Floor, C Section, Shelf 4" },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Literature", location: "1st Floor, D Section, Shelf 2" },
  { title: "Brave New World", author: "Aldous Huxley", category: "Science Fiction", location: "4th Floor, E Section, Shelf 3" },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy", location: "6th Floor, A Section, Shelf 1" },

  { title: "Harry Potter and the Philosopher’s Stone", author: "J.K. Rowling", category: "Fantasy", location: "2nd Floor, F Section, Shelf 4" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", location: "2nd Floor, F Section, Shelf 5" },
  { title: "Jane Eyre", author: "Charlotte Brontë", category: "Literature", location: "3rd Floor, A Section, Shelf 2" },
  { title: "Wuthering Heights", author: "Emily Brontë", category: "Literature", location: "3rd Floor, A Section, Shelf 3" },
  { title: "The Alchemist", author: "Paulo Coelho", category: "Philosophy", location: "1st Floor, B Section, Shelf 6" },

  { title: "Don Quixote", author: "Miguel de Cervantes", category: "Literature", location: "5th Floor, C Section, Shelf 2" },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", category: "Philosophy", location: "5th Floor, D Section, Shelf 4" },
  { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", category: "Literature", location: "4th Floor, B Section, Shelf 1" },
  { title: "The Old Man and the Sea", author: "Ernest Hemingway", category: "Literature", location: "1st Floor, A Section, Shelf 4" },
  { title: "Fahrenheit 451", author: "Ray Bradbury", category: "Science Fiction", location: "4th Floor, C Section, Shelf 6" },

  { title: "The Divine Comedy", author: "Dante Alighieri", category: "Literature", location: "6th Floor, D Section, Shelf 2" },
  { title: "Les Misérables", author: "Victor Hugo", category: "Literature", location: "5th Floor, A Section, Shelf 5" },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", category: "Philosophy", location: "2nd Floor, C Section, Shelf 1" },
  { title: "Anna Karenina", author: "Leo Tolstoy", category: "Literature", location: "5th Floor, B Section, Shelf 3" },
  { title: "Dracula", author: "Bram Stoker", category: "Fantasy", location: "3rd Floor, E Section, Shelf 1" },

  { title: "Frankenstein", author: "Mary Shelley", category: "Science Fiction", location: "3rd Floor, E Section, Shelf 2" },
  { title: "The Odyssey", author: "Homer", category: "Literature", location: "6th Floor, B Section, Shelf 4" },
  { title: "The Iliad", author: "Homer", category: "Literature", location: "6th Floor, B Section, Shelf 5" },
  { title: "A Tale of Two Cities", author: "Charles Dickens", category: "Literature", location: "4th Floor, D Section, Shelf 2" },
  { title: "Great Expectations", author: "Charles Dickens", category: "Literature", location: "4th Floor, D Section, Shelf 3" },

  { title: "The Little Prince", author: "Antoine de Saint-Exupéry", category: "Philosophy", location: "1st Floor, F Section, Shelf 2" },
  { title: "The Count of Monte Cristo", author: "Alexandre Dumas", category: "Literature", location: "5th Floor, E Section, Shelf 6" },
  { title: "The Stranger", author: "Albert Camus", category: "Philosophy", location: "2nd Floor, E Section, Shelf 4" },
  { title: "The Metamorphosis", author: "Franz Kafka", category: "Philosophy", location: "2nd Floor, E Section, Shelf 5" },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut", category: "Science Fiction", location: "4th Floor, F Section, Shelf 1" },

  { title: "The Kite Runner", author: "Khaled Hosseini", category: "Literature", location: "1st Floor, E Section, Shelf 3" },
  { title: "Life of Pi", author: "Yann Martel", category: "Fantasy", location: "3rd Floor, F Section, Shelf 6" },
  { title: "The Book Thief", author: "Markus Zusak", category: "Literature", location: "4th Floor, A Section, Shelf 4" },
  { title: "The Chronicles of Narnia", author: "C.S. Lewis", category: "Fantasy", location: "6th Floor, F Section, Shelf 2" },
  { title: "The Da Vinci Code", author: "Dan Brown", category: "Literature", location: "2nd Floor, D Section, Shelf 6" },

  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Science", location: "7th Floor, A Section, Shelf 1" },
  { title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", location: "7th Floor, B Section, Shelf 2" },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Science", location: "7th Floor, C Section, Shelf 3" },
  { title: "The Art of War", author: "Sun Tzu", category: "Philosophy", location: "7th Floor, D Section, Shelf 4" },
  { title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", location: "7th Floor, E Section, Shelf 5" }




];

const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const catBtns = document.querySelectorAll('.cat-btn');

function renderBooks(filter = 'all', search = '') {
  booksGrid.innerHTML = '';
  
  let filtered = books;

  if (filter !== 'all') {
    filtered = books.filter(book => book.category === filter);
  }

  if (search) {
    filtered = filtered.filter(book => 
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    booksGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:white; font-size:1.2rem;">Hech narsa topilmadi 😔</p>';
    return;
  }

  filtered.forEach(book => {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.innerHTML = `
      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author"><strong>Author:</strong> ${book.author}</p>
        <span class="book-location">
          <i class="fas fa-map-marker-alt"></i> ${book.location}
        </span>
      </div>
    `;
    booksGrid.appendChild(card);
  });
}

// Ilk yuklanishda barchasini ko‘rsatish
renderBooks();

// Qidiruv
searchBtn.addEventListener('click', () => {
  renderBooks(document.querySelector('.cat-btn.active').dataset.category, searchInput.value.trim());
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    renderBooks(document.querySelector('.cat-btn.active')?.dataset.category || 'all', searchInput.value.trim());
  }
});

// Kategoriya tugmalari
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderBooks(btn.dataset.category, searchInput.value.trim());
  });
});