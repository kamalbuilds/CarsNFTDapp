# Cars NFT DApp

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Moralis ( For calling the contracts and using moralis-filecoin API for metadata storage) 
- Filecoin ( For storing the metadata of the NFT's)
- Polygon Mumbai ( Deploying the contract on Polygon Mumbai Testnet)
- Axellar (Buying and selling the NFT's cross chains )
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)


## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Start frontend
`$ npm run start`
