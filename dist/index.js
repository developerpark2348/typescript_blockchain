"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "20210323", "", "Hi", 126);
let blockchain = [genesisBlock];
//genesisBlock을 blockchain변수에 넣음.
const getBlockchain = () => blockchain;
// blockChain을 가져오는 함수
const getLatestBlock = () => blockchain[blockchain.length - 1];
// 가장 최근의 블록을 가져오기 위한 함수
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
// 시간을 알기위해 제작한 함수
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    return newBlock;
};
//각각의 데이터를 넣어 블락을 만드는 함수
console.log(createNewBlock("Hello"), createNewBlock("Bye"));
//# sourceMappingURL=index.js.map