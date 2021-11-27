Start on 2021/11/27

- [1. What is Ethereum](#1-what-is-ethereum)
  - [1.1. Metamask Setup](#11-metamask-setup)
  - [1.2. Ethereum Accounts](#12-ethereum-accounts)
  - [1.3. Receiving Ether](#13-receiving-ether)
  - [1.4. What's a transaction](#14-whats-a-transaction)
  - [Why'd we wait?](#whyd-we-wait)

---

# 1. What is Ethereum
## 1.1. Metamask Setup
1. We go to Google Chrome extension store and add "metamask" a 3D fox icon app.
2. After creating an account and secure the password, we can open testing network and choose "**Rinkeby**" for testing purpose.

## 1.2. Ethereum Accounts
1. When creating an accounton metamask, we have 3 pieces of information to have an account on ethereum network, `Account Address`, `Public key`, and `Private key`.
2. "**Account Address**" is an unique identifier similar to an email address that we can share to anyone in the public to identify the account.
3. "**Public key**" and "**Private key**" are used to create "password" that is used to authorize certain activities of an account. Both public and private key are stored in hexadecimal numbers.
4. When we paste a hexadecimal number in browser's developer console, it will return the number in ten-based.
5. In Ethereum world, all the accounts are common across networks which could be counter intuitive. In the real world example, we register emails from Google or Yahoo which can't be shared between the services. 
6. However, in Ethereum, the account is available across the networks.

## 1.3. Receiving Ether
1. For testing purpose, we can request 0.1 test ETH from either [https://rinkeby-faucet.com/](https://rinkeby-faucet.com/) or [https://faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby).
2. When sending/receiving crypto coins, it may take some time, seconds to minutes to finish the transaction.
3. After the transaction finishes, we can check back on metamask for the transaction result.

## 1.4. What's a transaction
1. An ethereum account can access multiple networks that such as for wallets.
2. When we request a testing ETH from the given link, we send a request from the webpage to the backend server.
3. In this example, the server use `web3.js` library to connect to the ethereum network. Note that `web3.js` can be used to connect to any ethereum network.
4. We may consider `web3.js` as a programmatic portal that interacts with different nodes in the ethereum network.
5. The backedn server use `web3.js` to create a "**transaction object**".
6. A **transaction**
   1. `nonce` 
      1. How many times the sender has sent a transaction. In this example, the server is the sender (who provides the testing ETH). 
      2. This will be recorded every time it's used to send crypto to an account.
   2. `to` - Address of account this money is going to.
   3. `value` - Amount of ether to send to the target address.
   4. `gasPrice` - Amount of ether the sender is willing to pay per unit gas to get this transaction processed.
   5. `startGas/gasLimit` - Units of gas that this transaction can consume.
   6. `v`, `r`, `s`
      1. Crytographic pieces of data that can be used to generate the senders account address. Generated from the sender's private key.
      2. Generating `v`, `r`, and `s` are an one-way process like hashing which you can generate the same output every time as long as you get the "**private key**"

## Why'd we wait?
1. After the backend server (sender) creates a "transaction" object, it sends "transaction" object to the "Rinkeby" test network.
2. The ethereum network and program handling transaction for financial purposes are very complicated as it has to handle an magnificent amount of values and different transactions from different accounts (users) in the network. 
3. When the transaction starts, it connects to one of the nodes in the network. Besides, we can switch between the nodes we want to connect to.
4. For example, when the transaction sending to a node, there may be another 2 transaction coming at the same time.
5. The node can turn all the transactions into a list of transactions as a "block".
6. The node runs some "**validation**" on the "**block**". The validation logic takes some times to validate if the data and information is correct, which is the "**mining**" process in convention.