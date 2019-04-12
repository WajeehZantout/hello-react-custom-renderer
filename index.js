import React from "react";

import render from "./src/render";
import App from "./src/App";

render(<App />, `${__dirname}/document.docx`);
