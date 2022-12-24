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

# Problems that it is aiming to solve 

# Security: 

Blockchain technology allows for secure, transparent transactions that are resistant to fraud and tampering. A DApp for buying and selling vehicles could use smart contracts to automate the process of transferring ownership, reducing the risk of errors or fraud.

# Transparency: 

A DApp built on a public blockchain would provide a transparent record of all transactions, allowing buyers and sellers to see the history of the vehicle and any related issues.

# Decentralization: 

By using a decentralized platform, buyers and sellers can interact directly with each other, without the need for a central authority or intermediaries. This can potentially reduce costs and increase efficiency.

# Automation:

Smart contracts can be used to automate many of the processes involved in buying and selling vehicles, such as verifying ownership and transferring titles. This can save time and reduce the risk of errors.

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
