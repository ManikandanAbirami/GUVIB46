import React, { useState } from "react";

function CreateBook(props) {
  const { onCreate } = props;

  const [book, setBook] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(book);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Title:
        <input
          name="title"
          type="text"
          value={book.title}
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
      <label>
        Description:
        <input
          name="description"
          type="text"
          value={book.description}
          onChange={(e) => handleChange(e)}
        ></input>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateBook;
