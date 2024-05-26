// migrations/2_deploy_contracts.js
const Product = artifacts.require("Product");

module.exports = function(deployer) {
  deployer.deploy(Product);
};
