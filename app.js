const BlockClass = require("./block.js");

const block = new BlockClass.Block("Test Block");

const generateBlockHash = async () => {
  try {
    const blockHash = await block.generateHash();
    console.log(`Block Hash: ${blockHash}`);
    console.log(`Block: ${JSON.stringify(block)}`);
  } catch (error) {
    console.log(error);
  }
};

generateBlockHash();
