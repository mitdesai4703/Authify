import React, { useState } from 'react'
import styled from 'styled-components'

export default function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Signed up with:", formData);
    // Handle sign-up logic here
  };

  return (
    <Wrapper className="section">
     <div className="SignUp-container">
      <div className="Left-part">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          {error && <p className="error">{error}</p>}
          <div className="input-row">
            <div className="First-name">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="Last-name">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="input-col">
            <div className="input-col-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-col-group">
              <label htmlFor="password">Create Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-col-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      {/* <img src={signUpImage} className="Sign-up-img" alt="Sign up" />  */}
    </div>

    </Wrapper>
   
  );
}

const Wrapper = styled.section`
.SignUp-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #b7e7e4;
  padding: 20px;
  box-sizing: border-box;
}

.Left-part {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.Left-part h1 {
  margin-bottom: 20px;
  font-size: 28px;
  position: relative;
  bottom: 25px;
  text-align: center;
  font-family: "DM Serif Display", serif;
}

.Sign-up-img {
  max-width: 500px;
  height: auto;
}

.input-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-col-group {
  margin-bottom: 20px;
}

.input-row label,
.input-col-group label {
  display: block;
  position: relative;
  right: 5px;
  margin-bottom: 5px;
  font-family: "Dosis", sans-serif;
}

.input-row input,
.input-col-group input {
  width: 100%;
  height: 35px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 18px;
  font-family: "Dosis", sans-serif;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.input-row input:focus,
.input-col-group input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  outline: none;
}

.error {
  color: red;
  text-align: center;
  margin-bottom: 15px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn button {
  width: 120px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #e54b4b;
  border: none;

  cursor: pointer;
  transition: background-color 0.3s;
}

.btn button:hover,
.btn button:focus {
  background-color: #c43b3b;
  outline: none;
}

.input-row .First-name {
  margin-right: 30px;
}


`;

