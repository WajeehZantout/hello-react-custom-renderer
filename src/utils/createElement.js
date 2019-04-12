import WordDocument from "../components/WordDocument";
import Text from "../components/Text";

let ROOT_NODE_INSTANCE = null;

const getHostContextNode = rootNode => {
  if (typeof rootNode !== undefined) {
    ROOT_NODE_INSTANCE = rootNode;
  } else {
    console.warn(
      `${rootNode} is not an instance of officegen docx constructor.`
    );

    ROOT_NODE_INSTANCE = new WordDocument();
  }

  return ROOT_NODE_INSTANCE;
};

const createElement = (type, props) => {
  switch (type) {
    case "ROOT":
      return new WordDocument();
    case "Text":
      return new Text(ROOT_NODE_INSTANCE, props);
    default:
      throw new Error(`Unknown element: ${type}`);
  }
};

export { createElement, getHostContextNode };
