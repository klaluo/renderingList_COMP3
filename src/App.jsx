import './App.css';
import booksData from "./data/books.json";
import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState(booksData);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRemove = (isbn13) => {
    setBooks(books.filter((book) => book.isbn13 !== isbn13));
  };

  const handleSelect = (isbn13) => {
    setSelectedBook(selectedBook === isbn13 ? null : isbn13);
  };

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    handleCloseModal();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Kayla's Book Catalog</h1>
      </header>

      <main>
        <div className="content">
          {books.map((book) => (
            <Book
              key={book.isbn13}
              price={book.price}
              image={book.image}
              url={book.url}
              selected={selectedBook === book.isbn13}
              onSelect={() => handleSelect(book.isbn13)}
              onRemove={() => handleRemove(book.isbn13)}
            />
          ))}

          <button className="add-button" onClick={handleOpenModal}>
            +
            <div>Add</div>
          </button>
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Kayla Luo
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Add a New Book</h2>
            <form onSubmit={handleFormSubmit}>
              <label>Title <input type="text" required /></label>
              <label>Author <input type="text" required /></label>
              <label>Publisher <input type="text" /></label>
              <label>Publication Year <input type="number" /></label>
              <label>Language <input type="text" /></label>
              <label>Pages <input type="number" /></label>
              <div className="modal-actions">
                <button type="button" class="cancel-button"onClick={handleCloseModal}>Cancel</button>
                <button type="submit" class="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Book component
function Book({ title, price, image, url, selected, onSelect, onRemove }) {
  return (
    <div
      className={`book-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p className="book-price">{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Details
      </a>
      <button className="remove-button" onClick={(e) => { 
        e.stopPropagation(); 
        onRemove();
      }}>
        Remove
      </button>
    </div>
  );
}

export default App;

