import { useState } from "react";

let initialBooks = [
  { title: "Crafting Interpreters", author: "Robert Nystrom", color: "blue" },
  { title: "How to Bake Pi", author: "Eugenia Cheng", color: "orange" },
  {
    title: "Live Coding: A User's Manual",
    author:
      "Alan Blackwell, Emma Cocker, Geoff Cox, Alex McLean and Thor Magnusson",
    color: "red",
  },
  {
    title: "Networks of New York",
    author: "Ingrid Burrington",
    color: "darkblue",
  },
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
          <Book
            key={book.title}
            color={book.color}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
    </section>
  );
}

function NewBook(props) {
  // State field for the title being entered
  let [title, setTitle] = useState("");

  let [color, setColor] = useState("#302828");

  function submit() {
    setTitle("");
    setColor("#302828");
    props.onCreated({ title: title, author: "", color: color });
  }

  return (
    <div className="new-book" style={{ borderColor: color }}>
      <input value={title} onInput={(event) => setTitle(event.target.value)} />
      <input
        value={color}
        onInput={(event) => setColor(event.target.value)}
        type="color"
      ></input>
      <button onClick={submit} disabled={title == ""}>
        +
      </button>
    </div>
  );
}

function Book(props) {
  let [shown, setShown] = useState(false);

  return (
    <li style={{ background: props.color }}>
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
