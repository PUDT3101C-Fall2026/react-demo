import { createRoot } from "react-dom/client";

let root = createRoot(document.getElementById("app"))

root.render(<h1>Today's random number is { Math.random() }</h1>);