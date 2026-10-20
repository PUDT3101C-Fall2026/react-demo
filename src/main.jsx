import { createRoot } from "react-dom/client";

import { Library } from "./Library.jsx";

let root = createRoot(document.getElementById("app"));

root.render(<Library />);
