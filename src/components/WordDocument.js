import officegen from "officegen";

class WordDocument {
  constructor() {
    this.doc = officegen("docx");
  }
}

export default WordDocument;
