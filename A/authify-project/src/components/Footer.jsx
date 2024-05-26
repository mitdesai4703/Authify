import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logoimg from '../../public/images/Rectangle 32.png';

const Footer = () => {
  return (
    <Wrapper className="section">
      <div className="all">
        <div className="left-side">
          <img src={logoimg} alt="Logo" />
        </div>
        <div className="right-side">
          <div className="links">
            <div>
              <a className='tags' href="#services">Our Services</a>
              <a href="#verify">Verify Product</a>
              <a href="#manufacture">Join As A Manufacturer</a>
            </div>
            <div>
              <a className='tags' href="#purchase-gift-card">Helps</a>
              <a href="#add-business">Contact Us</a>
              <a href="#awareness">Awareness</a>
              <a href="#contact-us">FAQ's</a>
            </div>
          </div>
        </div>

        <div className="icons">
          <p>Follow Us :</p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .all {
    display: flex;
    height: 100px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .left-side {
    text-align: center;
    margin-left: -80px;
  }

  .left-side img {
    max-width: 150px;
  }

  .right-side {
    flex: 2;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-family: "DM Serif Display", serif;
  }

  .tags {
    font-size: 30px;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
  }

  .links div {
    margin: 10px 40px;
  }

  .links a {
    display: block;
    color: #007bff;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .links a:hover {
    text-decoration: underline;
  }

  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .icons p {
    font-size: 20px;
    margin: 10px 0;
  }

  .social-icons {
    display: flex;
    gap: 20px;
  }

  .social-icons a {
    color: #495057;
    font-size: 30px;
  }

  .social-icons a:hover {
    color: #007bff;
  }
`;

export default Footer;
