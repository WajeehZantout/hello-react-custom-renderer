import path from "path";

const eventLogger = (filePath, resolve, reject) => {
  return {
    finalize: () => {
      console.log(`✨  Word document created at ${path.resolve(filePath)}.`);
      resolve();
    },
    error: () => {
      console.log("An error occurred while generating the document.");
      reject();
    }
  };
};

export { eventLogger };
