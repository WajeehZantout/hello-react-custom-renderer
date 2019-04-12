import React from "react";

import WordRenderer from "./src/reconciler";
import App from "./src/App";

WordRenderer.render(<App />, `${__dirname}/document.docx`);
