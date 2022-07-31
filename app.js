/**
 * Importing the Block class
 */
//
const BlockClass = require("./block.js");

/**
 * Creating a block object
 */
const block = new BlockClass.Block("Test Block");

// Generating the block hash

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
