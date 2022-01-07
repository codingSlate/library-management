import React from 'react';
function BooksList({ allBooks, onDelete }) {
  console.log(allBooks.length);
  return <div>{!allBooks.length && <p>No Data Found</p>}
  {allBooks.length > 0 && <article >
    {allBooks.map(book => (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        </div>
    ))}
    </article>}
  </div>;
}
export default BooksList;
