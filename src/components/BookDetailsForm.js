import React, { useState } from 'react';
import './BookDetailsForm.css';

function BookDetailsForm(props) {
  const [oneBook, setOneBook] = useState({
    title: 'Algebra',
    description: 'Mathematics Book',
  });

  const titleChangeHandler = (e) => {
    setOneBook((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };
  const desChangeHandler = (e) => {
    setOneBook((prevState) => {
      return { ...prevState, description: e.target.value };
    });
  };

  const addBookHandler = (e) => {
    e.preventDefault();
    const getInputData = {
      title: oneBook.title,
      description: oneBook.description,
    };
    // console.log(getInputData);
    // console.log(props.oneBookAdded);
    props.oneBookAdded(getInputData);
  };
  return (
    <div>
      <form onSubmit={addBookHandler}>
        <input
          className="input"
          type="text"
          placeholder="Enter Book Title"
          value={oneBook.title}
          onChange={titleChangeHandler}
        />
        <textarea
          className="input"
          placeholder="Enter Description"
          value={oneBook.description}
          onChange={desChangeHandler}
        ></textarea>
        <input className="input btn" type="submit" value="Add Book" />
      </form>
    </div>
  );
}
export default BookDetailsForm;
