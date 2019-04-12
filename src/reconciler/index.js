import ReactReconciler from "react-reconciler";
import fs from "fs";

import { createElement, getHostContextNode } from "../utils/createElement";
import { eventLogger } from "../utils";

const hostConfig = {
  appendInitialChild: (parentInstance, child) => {
    if (parentInstance.appendChild) {
      parentInstance.appendChild(child);
    }
  },

  createInstance: (type, props, internalInstanceHandle) => {
    return createElement(type, props);
  },

  createTextInstance: (text, rootContainerInstance, internalInstanceHandle) => {
    return text;
  },

  finalizeInitialChildren: (wordElement, type, props) => {
    return false;
  },

  getPublicInstance: inst => {
    return inst;
  },

  prepareForCommit: () => {
    // noop
  },

  prepareUpdate: (wordElement, type, oldProps, newProps) => {
    return true;
  },

  resetAfterCommit: () => {
    // noop
  },

  resetTextContent: wordElement => {
    // noop
  },

  getRootHostContext: instance => {
    return getHostContextNode(instance);
  },

  getChildHostContext: instance => {
    return {};
  },

  shouldSetTextContent: (type, props) => {
    return false;
  },

  now: () => {},

  useSyncScheduling: true,

  supportsMutation: false
};

const WordRenderer = ReactReconciler(hostConfig);

export default {
  render: async (element, filePath) => {
    const container = createElement("ROOT");

    // Returns the current fiber (flushed fiber)
    const node = WordRenderer.createContainer(container);

    // Schedules a top level update with current fiber and a priority level (depending upon the context)
    WordRenderer.updateContainer(element, node, null);

    // Officegen generates a output stream and not a file
    const stream = fs.createWriteStream(filePath);

    await new Promise((resolve, reject) => {
      // Generate a word document
      container.doc.generate(stream, eventLogger(filePath, resolve, reject));
    });
  }
};
