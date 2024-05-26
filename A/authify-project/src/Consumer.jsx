

import React, { useState, useEffect } from "react";
import Web3 from "web3";
import styled from "styled-components";
// import ProductVerificationABI from "../"; // Import the ABI

const Consumer = () => {
  const [productSN, setProductSN] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        console.error("MetaMask not detected");
      }
    };

    initWeb3();
  }, []);

  const handleChange = (e) => {
    setProductSN(e.target.value);
    setError("");
  };

  const handleQrUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setQrCode(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetStatus = async (e) => {
    e.preventDefault();

    if (!productSN) {
      setError("Product SN cannot be empty");
      return;
    }

    if (!qrCode) {
      setError("Please upload a QR code");
      return;
    }

    try {
      const web3 = window.web3;
      const networkId = await web3.eth.net.getId();
      const deployedNetworkId = "0x56b49b09BCF650E0D74ac7e2e8e315e7b1926a51"; // Your network ID
const deployedNetwork = ProductVerificationABI.networks[deployedNetworkId];

if (!deployedNetwork) {
  // Handle the case where network information is not available for the specified network ID
  console.error("Network information not found for network ID:", deployedNetworkId);
  return;
}

// Continue with your code to interact with the contract using deployedNetwork

      const contract = new web3.eth.Contract(
        ProductVerificationABI.abi,
        deployedNetwork.address
      );

      // Call the verifyProduct function
      const isVerified = await contract.methods.verifyProduct(productSN, qrCode).call();
      if (isVerified) {
        setStatus("Product Verified");
      } else {
        setStatus("Product Invalid");
      }
    } catch (error) {
      console.error("Error getting status:", error);
      setStatus("Error verifying product");
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <h1 className="verify-text">Verify Product</h1>
        <Button onClick={() => document.getElementById("qrUpload").click()}>
          Upload QR
        </Button>
        <input
          type="file"
          id="qrUpload"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handleQrUpload}
        />
        <form onSubmit={handleGetStatus}>
          <InputContainer>
            <Input
              className="product-sn"
              type="text"
              placeholder="Product SN"
              value={productSN}
              onChange={handleChange}
            />
          </InputContainer>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <Button type="submit">Get Status</Button>
        </form>
        {status && <Status>{status}</Status>}
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(183, 231, 228, 1);
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 100px;
  border-radius: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background: rgba(229, 75, 75, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;

const Status = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
`;

export default Consumer;
