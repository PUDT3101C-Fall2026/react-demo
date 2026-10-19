import { createRoot } from "react-dom/client";

import { Library } from "./library";

let root = createRoot(document.getElementById("app"));

root.render(<Library />);
