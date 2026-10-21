import { useState } from "react";

let initialBooks = [
  { title: "Crafting Interpreters", author: "Robert Nystrom" },
  { title: "How to Bake Pi", author: "Eugenia Cheng" },
  {
    title: "Live Coding: A User's Manual",
    author:
      "Alan Blackwell, Emma Cocker, Geoff Cox, Alex McLean and Thor Magnusson",
  },
  { title: "Networks of New York", author: "Ingrid Burrington" },
];

// This is our Library component which is exported for use in main.jsx
export function Library() {
  let [books, setBooks] = useState(initialBooks);

  return (
    <section>
      <h1>My Library</h1>
      <NewBook
        onCreated={(book) => {
          setBooks([...books, book]);
        }}
      />
      <ul className="books">
        {books.map((book) => (
          <Book key={book.title} title={book.title} author={book.author} />
        ))}
      </ul>
    </section>
  );
}

function NewBook(props) {
  // State field for the title being entered
  let [title, setTitle] = useState("");

  function submit() {
    setTitle("");
    props.onCreated({ title: title, author: "" });
  }

  return (
    <div className="new-book">
      <input value={title} onInput={(event) => setTitle(event.target.value)} />
      <button onClick={submit} disabled={title == ""}>
        +
      </button>
    </div>
  );
}

function Book(props) {
  let [shown, setShown] = useState(false);

  return (
    <li>
      {props.title}{" "}
      {/* <button onClick={() => setShown(!shown)}>
        {shown ? "Hide" : "Show"}
      </button>
      {shown ? (
        <ul>
          <li>{props.author}</li>
        </ul>
      ) : (
        ""
      )} */}
    </li>
  );
}
