import './App.css';
import booksData from "./data/books.json";
import React from "react";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Kayla's Book Catalog</h1>
      </header>

      <main>
        <div className="content">
          {booksData.map((book) => (
            <Book
              key={book.isbn13}
              title={book.title}
              price={book.price}
              image={book.image}
              url={book.url}
            />
          ))}

          <button className="add-button">
            +
            <div>Add</div>
          </button>
        </div>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Kayla Luo
      </footer>
    </div>
  );
}

// Reusable Book component
function Book({ title, price, image, url }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <p className="book-price">{price}</p> {/* 👈 show price instead of author */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        Details
      </a>
    </div>
  );
}

export default App;
