const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(data) {
    this.id = 0;
    this.nonce = 144444;
    this.body = data;
    this.hash = "";
  }

  generateHash = async () => {
      const hash = await SHA256(JSON.stringify(this));
      this.hash = hash.toString()
      return this.hash;
  }
  
}

module.exports.Block = Block;
