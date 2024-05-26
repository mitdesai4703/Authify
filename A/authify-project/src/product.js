// import web3 from './web3';
// import Product from '../../build/contracts/Product.json';

// const contractAddress = '0xD4Ec335cCF41AaDa34CAeA42d8A59e261f39b4f5';  // Replace with your contract address
// const contractABI = Product.abi;

// const productContract = new web3.eth.Contract(contractABI, contractAddress);

// export default productContract;


// import web3 from './web3'; // Import the web3 instance configured for your environment
// import ProductContract from '../../build/contracts/Product.json'; // Import the ABI of your Product smart contract

// const productContractAddress = '0xD4Ec335cCF41AaDa34CAeA42d8A59e261f39b4f5'; // Replace with the actual address of your deployed smart contract

// // const contractInstance = new web3.eth.Contract(ProductContract.abi, productContractAddress);

// const verifyProduct = async (productSN, consumerCode) => {
//   try {
//     // Perform verification logic here
//     // For example, call a function on your smart contract to verify the product
//     // You can use contractInstance.methods.functionName().call() to call a view/pure function
    
//     // Example:
//     const result = await contractInstance.methods.verifyProduct(productSN, consumerCode).call();
    
//     // Process the result and return true/false based on verification success
//     return result;
//   } catch (error) {
//     console.error('Error verifying product:', error);
//     throw new Error('Error verifying product');
//   }
// };

// export default verifyProduct;


import web3 from './web3'; // Import the web3 instance configured for your environment
import ProductContract from '../../build/contracts/Product.json'; // Import the ABI of your Product smart contract

// Function to add product detail to the smart contract
const addProductDetail = async (productDetail) => {
  try {
    // Get the deployed contract instance
    const contract = new web3.eth.Contract(ProductContract.abi, 'YOUR_CONTRACT_ADDRESS'); // Replace 'YOUR_CONTRACT_ADDRESS' with the actual contract address
    
    // Call the smart contract function to add product detail
    await contract.methods.addProduct(productDetail).send({ from: 'YOUR_ACCOUNT_ADDRESS' }); // Replace 'YOUR_ACCOUNT_ADDRESS' with your Ethereum account address
    
    // Product detail successfully added
    console.log('Product detail added successfully');
  } catch (error) {
    // Error occurred while adding product detail
    console.error('Failed to add product detail:', error);
    throw error; // Throw the error for further handling
  }
};

export default addProductDetail;


