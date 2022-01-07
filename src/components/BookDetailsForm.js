import React, { useState } from 'react';
import './BookDetailsForm.css';

function BookDetailsForm(props) {
  // const [oneBook, setOneBook] = useState({
  //   title: 'Algebra',
  //   description: 'Mathematics Book',
  // });
  const [oneBook, setOneBook] = useState('');

  // const titleChangeHandler = (e) => {
  //   setOneBook((prevState) => {
  //     return { ...prevState, title: e.target.value };
  //   });
  // };
  // const desChangeHandler = (e) => {
  //   setOneBook((prevState) => {
  //     return { ...prevState, description: e.target.value };
  //   });
  // };

  const changeHandler = (e) => {
      const { name, value } = e.target.value;
    setOneBook({ ...oneBook, [name]: value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    const getInputData = {
      title: oneBook.title,
      description: oneBook.description,
    };

    if (!getInputData.title || !getInputData.description) return;
    props.oneBookAdded(getInputData);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter Book Title"
          value={oneBook.title}
          onChange={changeHandler}
        />
        <textarea
          className="input"
          placeholder="Enter Description"
          value={oneBook.description}
          onChange={changeHandler}
        ></textarea>
        <input className="input btn" type="submit" value="Add Book" />
      </form>
    </div>
  );
}
export default BookDetailsForm;
