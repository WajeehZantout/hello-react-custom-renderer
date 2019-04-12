class Text {
  constructor(root, props) {
    this.root = root;
    this.props = props;

    this.adder = this.root.doc.createP();
  }

  appendChild(child) {
    if (typeof child === "string") {
      this.adder.addText(child);
    }
  }
}

export default Text;
