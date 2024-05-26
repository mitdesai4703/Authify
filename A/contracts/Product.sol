// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;


contract Product {
    struct ProductDetails {
        string manufacturerId;
        string productName;
        string productSN;
        string productBrand;
        string productPrice;
    }

    mapping(string => ProductDetails) public products;

    function addProduct(
        string memory _manufacturerId,
        string memory _productName,
        string memory _productSN,
        string memory _productBrand,
        string memory _productPrice
    ) public {
        ProductDetails memory newProduct = ProductDetails({
            manufacturerId: _manufacturerId,
            productName: _productName,
            productSN: _productSN,
            productBrand: _productBrand,
            productPrice: _productPrice
        });

        products[_productSN] = newProduct;
    }

    function getProduct(string memory _productSN)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory
        )
    {
        ProductDetails memory p = products[_productSN];
        return (
            p.manufacturerId,
            p.productName,
            p.productSN,
            p.productBrand,
            p.productPrice
        );
    }
}
