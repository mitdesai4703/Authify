import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import web3 from './web3';
import ProductContract from '../../build/contracts/Product.json'; 

const Manufacture = () => {
  const [formData, setFormData] = useState({
    manufacturerId: '',
    productName: '',
    productSN: '',
    productBrand: '',
    productPrice: '',
  });

  const [qrValue, setQrValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { manufacturerId, productName, productSN, productBrand, productPrice } = formData;

    if (!manufacturerId || !productName || !productSN || !productBrand || !productPrice) {
      setError('All fields are required');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = ProductContract.networks[networkId];
      const contractInstance = new web3.eth.Contract(
        ProductContract.abi,
        deployedNetwork && deployedNetwork.address
      );

      await contractInstance.methods
        .addProduct(manufacturerId, productName, productSN, productBrand, productPrice)
        .send({ from: accounts[0] });

      setQrValue(productSN);
    } catch (err) {
      setError('Failed to add product');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Wrapper className="section">
      <div className='all'>
        <div className='container'>
          <div className='title'>Add Your Product</div>
          <form onSubmit={handleSubmit}>
            <div className='user-details'>
              <div className='input-box'>
                <span className='details'>Manufacturer ID</span>
                <input type='text' id='manufacturerId' value={formData.manufacturerId} onChange={handleChange} placeholder='Enter Manufacture ID' required />
              </div>
              <div className='input-box'>
                <span className='details'>Product Name</span>
                <input type='text' id='productName' value={formData.productName} onChange={handleChange} placeholder='Enter Product Name' required />
              </div>
              <div className='input-box'>
                <span className='details'>Product SN</span>
                <input type='text' id='productSN' value={formData.productSN} onChange={handleChange} placeholder='Enter Product SN' required />
              </div>
              <div className='input-box'>
                <span className='details'>Product Brand</span>
                <input type='text' id='productBrand' value={formData.productBrand} onChange={handleChange} placeholder='Enter Product Brand' required />
              </div>
              <div className='input-box'>
                <span className='details'>Product Price</span>
                <input type='text' id='productPrice' value={formData.productPrice} onChange={handleChange} placeholder='Enter Product Price' required />
              </div>
            </div>
            <div className='button'>
              <button className='submit-btn' type='submit' disabled={loading}>{loading ? 'Adding...' : 'Add Product'}</button>
            </div>
          </form>
          {error && <p className='error'>{error}</p>}
          {qrValue && (
            <div className='qr-code'>
              <QRCode value={qrValue} />
              <button onClick={() => {
                const canvas = document.querySelector('canvas');
                const pngUrl = canvas
                  .toDataURL('image/png')
                  .replace('image/png', 'image/octet-stream');
                const downloadLink = document.createElement('a');
                downloadLink.href = pngUrl;
                downloadLink.download = `${qrValue}.png`;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
              }}>
                Download QR Code
              </button>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgba(183, 231, 228, 1);


  .container {
    max-width: 700px;
    width: 100%;
    background: white;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .title {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }

  .user-details {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .input-box {
    margin-bottom: 15px;
    width: calc(50% - 10px);
  }

  .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .input-box input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
  }

  .input-box input:focus {
    border-color: #007bff;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .button input {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button input:hover {
    background-color: #0056b3;
  }

  .submit-btn{
    background: rgba(229, 75, 75, 1);
    color:white;
    padding:10px;
    border:none;
    cursor:pointer;
    border-radius:5px;
  }

  .submit-btn:hover{
    color:black;
    transition:0.3s ease-in;
  }

  .qr-code {
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .qr-code button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
  }

  .qr-code-container button:hover {
    background-color: #0056b3;
  }
`;

export default Manufacture;

