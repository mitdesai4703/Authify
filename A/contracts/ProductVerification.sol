// ProductVerification.sol
pragma solidity ^0.8.0;

contract ProductVerification {
    mapping(string => bool) private productStatus;

    function verifyProduct(string memory productSN) public view returns (bool) {
        return productStatus[productSN];
    }

    function setProductStatus(string memory productSN, bool status) public {
        productStatus[productSN] = status;
    }
}
