import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string
    ):string => 
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "20210323", "", "Hi", 126)

let blockchain: Block[] = [genesisBlock];
//genesisBlock을 blockchain변수에 넣음.

const getBlockchain = () : Block[] => blockchain;
// blockChain을 가져오는 함수

const getLatestBlock = () : Block => blockchain[blockchain.length - 1];
// 가장 최근의 블록을 가져오기 위한 함수

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);
// 시간을 알기위해 제작한 함수

const createNewBlock = (data:string) : Block => {
    const previousBlock : Block  = getLatestBlock();
    const newIndex : number = previousBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(
        newIndex, 
        previousBlock.hash, 
        newTimestamp, 
        data
    );
    const newBlock : Block = new Block(
        newIndex, 
        newHash, 
        previousBlock.hash, 
        data, 
        newTimestamp
    );
    return newBlock;
}
//각각의 데이터를 넣어 블락을 만드는 함수

console.log(createNewBlock("Hello"), createNewBlock("Bye"))

export {}; 