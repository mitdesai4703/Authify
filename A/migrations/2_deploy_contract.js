const Product = artifacts.require("ProductVerification");

module.exports = function(deployer) {
  deployer.deploy(ProductVerification);
};
