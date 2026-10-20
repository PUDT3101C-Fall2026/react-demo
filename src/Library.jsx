import { useState } from "react";

let books = [
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
  return (
    <section>
      <h1>My Library</h1>
      <ul>
        {books.map((book) => (
          <Book key={book.title} title={book.title} author={book.author} />
        ))}
      </ul>
    </section>
  );
}

function Book(props) {
  let [shown, setShown] = useState(false);

  return (
    <li>
      {props.title}{" "}
      <button onClick={() => setShown(!shown)}>
        {shown ? "Hide" : "Show"}
      </button>
      {shown ? (
        <ul>
          <li>{props.author}</li>
        </ul>
      ) : (
        ""
      )}
    </li>
  );
}
