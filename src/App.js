import React, { useState } from 'react';
import './style.css';
import BooksList from './components/BooksList';
import StudentsList from './components/StudentsList';
import BookDetailsForm from './components/BookDetailsForm';

let bookArray = [
  {
    id: 1,
    title: 'Algebra',
    description: 'Mathematics Book',
  },
  {
    id: 2,
    title: 'Physic',
    description: 'Science Book',
  },
  {
    id: 3,
    title: 'C++',
    description: 'Programming Book',
  },
];

const initBooks = {
  id: null,
  title: '',
  description: '',
};

export default function App() {
  const [books, setBooks] = useState(bookArray);

  const oneBookAddedHandler = (book) => {
    book.id = Math.max(...books.map((b) => b.id)) + 1;
    setBooks([...books, book]);
  };
  const handlerDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  const handlerEdit = (id) => {
    console.log(id)
  };

  return (
    <div>
      <h1>Library Management</h1>
      <StudentsList />
      <BookDetailsForm oneBookAdded={oneBookAddedHandler} />
      <BooksList allBooks={books} onDelete={handlerDelete} onEdit={handlerEdit} />
    </div>
  );
}
