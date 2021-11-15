import React, { useState } from 'react';
import './style.css';
import BooksList from './components/BooksList';
import StudentsList from './components/StudentsList';
import BookDetailsForm from './components/BookDetailsForm';

export default function App(props) {
  let books = [
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

  const oneBookAddedHandler = (data) => {
    books.push({ id: books.length + 1, ...data });
    console.log(books);
  };

  return (
    <div>
      <h1>Library Management</h1>
      <StudentsList />
      <BookDetailsForm oneBookAdded={oneBookAddedHandler} />
      <BooksList showBooks={books} />
    </div>
  );
}
