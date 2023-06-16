export function getBooksAPI() {
  return fetch("http://localhost:4000/books")
    .then((res) => res.json())
    .then((data) => data);
}

export function addBookAPI(book) {
  try {
    return fetch("http://localhost:4000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => data);
  } catch (err) {
    console.log(err);
  }
}

export function updateBookAPI(book) {
  return fetch("http://localhost:4000/books/" + book._id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  })
    .then((res) => res.json())
    .then((data) => data);
}

export function deleteBookAPI(id) {
  return fetch(`http://localhost:4000/books/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
}
