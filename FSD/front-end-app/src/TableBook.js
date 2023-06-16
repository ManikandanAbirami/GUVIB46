import React, { useState } from "react";

function TableBook(props) {
  const { books, onDelete, onUpdate } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Description</td>
          </tr>
          {books.map((book) => {
            return (
              <tr key={book._id}>
                <td>{book.title}</td>
                {/* <td>{book.description}</td> */}
                <td>
                  <DescriptionForm
                    book={book}
                    onUpdate={onUpdate}
                  ></DescriptionForm>
                </td>
                <td>
                  <button onClick={() => onDelete(book._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function DescriptionForm(props) {
  const { book, onUpdate } = props;

  const [description, setDescription] = useState(book.description);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <td>
        <input
          type="text"
          value={description}
          onChange={(e) => handleChange(e)}
        ></input>
      </td>
      <td>
        <button
          onClick={() => onUpdate({ _id: book._id, description: description })}
        >
          Update
        </button>
      </td>
    </div>
  );
}

export default TableBook;
