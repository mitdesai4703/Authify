import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"} >
        <img src='./images/logo.png' alt='logo' className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`

padding:0 4.8rem;
height: 100px;
background: rgba(183, 231, 228, 1);
display: flex;
justify-content: space-between;
align-item: center;

.logo{
width: 250px;
height: 100px;
margin-left:-90px;
}



`;

export default Header
