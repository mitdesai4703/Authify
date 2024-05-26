// import Web3 from 'web3';

// let web3;

// if (window.ethereum) {
//   web3 = new Web3(window.ethereum);
//   window.ethereum.request({ method: 'eth_requestAccounts' }).catch(error => {
//     console.log('User denied account access');
//   });
// } else if (window.web3) {
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   console.log('No MetaMask found');
//   web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
// }

// export default web3;



// import Web3 from 'web3';
// import Product from '../../build/contracts/Product.json';


// let web3;
// let accounts;
// let contract;

// if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
//   // Modern DApp browsers
//   window.ethereum.request({ method: 'eth_requestAccounts' })
//     .then(() => {
//       web3 = new Web3(window.ethereum);
//       initializeContract();
//     })
//     .catch(error => {
//       console.error('User denied account access', error);
//     });
// } else if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//   // Legacy DApp browsers
//   web3 = new Web3(window.web3.currentProvider);
//   initializeContract();
// } else {
//   // Non-DApp browsers
//   console.log('No Ethereum browser detected. You should consider trying MetaMask!');
// }

// function initializeContract() {
//   accounts = web3.eth.getAccounts();
//   contract = new web3.eth.Contract(Product.abi, Product.networks[Object.keys(Product.networks)[0]].address);
// }

// export { web3, accounts, contract };

// export default web3;


import Web3 from 'web3';

let web3;

// Modern dapp browsers...
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Request account access if needed
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    // User denied account access...
    console.error('User denied account access');
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
}
// Non-dapp browsers...
else {
  console.log('No web3 instance injected, using Local web3.');
  const provider = new Web3.providers.HttpProvider('http://localhost:7545');
  web3 = new Web3(provider);
}

export default web3;



