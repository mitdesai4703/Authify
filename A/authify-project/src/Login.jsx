import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Logged in with:", { email, password });
  };

  return (
    <Wrapper className="section">
      <div className="Login-container">
        {/* <img className="Login-img"  alt="Secure login"></img> */}
        <div className="Right-part">
          <form className="Form-detail" onSubmit={handleSubmit}>
            <h1>Log in</h1>
            {error && <p className="error">{error}</p>}
            <div className="input-group">
              <label htmlFor="email">Username or email</label>
              <input
                type="email"
                placeholder="Enter a email or username"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="btn">
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .Login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #b7e7e4;
  }

  .Login-img {
    width: 600px;
    height: 500px;
  }

  .Right-part {
    width: 400px;
    height: 400px;
    padding: 40px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    border-radius: 30px;
    margin-left: 20px;
  }

  .Form-detail {
    display: flex;
    flex-direction: column;
  }

  .Form-detail h1 {
    position: relative;
    bottom: 20px;
    margin-bottom: 20px;
    font-size: 28px;
    text-align: center;
    font-family: "DM Serif Display", serif;
  }

  .error {
    color: red;
    text-align: center;
    margin-bottom: 15px;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    position: relative;
    bottom: 10px;
    right: 10px;
    font-family: "Dosis", sans-serif;
  }

  .input-group input {
    width: 100%;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-family: "Dosis", sans-serif;
  }

  .Form-detail button {
    width: 120px;
    height: 40px;
    padding: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #e54b4b;
    border: none;
    cursor: pointer;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default Login;
