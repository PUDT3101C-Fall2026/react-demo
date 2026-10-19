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

export function Library() {
  let [selected, setSelected] = useState(null);

  return (
    <section id="library">
      <ul>
        {books.map(({ title }) => (
          <li
            style={{ fontWeight: title == selected ? "bold" : "normal" }}
            onClick={() => setSelected(title)}
          >
            {title}
          </li>
        ))}
      </ul>
    </section>
  );
}
