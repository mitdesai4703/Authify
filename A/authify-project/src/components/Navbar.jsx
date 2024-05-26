import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    const Nav = styled.nav `

        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;

        .menuIcon {
            display: flex;
            align-items: center;
            
        }

        .navbar-list {
            display: flex;
            gap: 2.8rem;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .navbar-link {
            text-decoration: none;
            color: white;
            font-size: 24px;
            transition: color 0.3s;

            &:hover {
                color: red;
            }
        }

        .navbar-list-btn {
            display: flex;
            gap: 1rem;
            margin-left: auto;
            list-style: none;
        }

        .navbar-button1, .navbar-button2 {
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s, border-color 0.3s;
        }

        .navbar-button1 {
            background-color: white;
            color: red;
            font-size:20px
            border: 2px solid red;

            &:hover {
                background-color: rgba(229,75,75,1);
                color: white;
                border-color: red;
            }
        }

        .navbar-button2 {
            background-color: rgba(229,75,75,1);
            color: white;
            border: 2px solid white;

            &:hover {
                background-color: white;
                color: red;
                border-color: red;
            }
        }



    `;
  return <Nav>
    <div className='menuIcon'>
        <ul className='navbar-list'>
            <li>
                <NavLink className="navbar-link" to={"/"}>Home</NavLink>
            </li>

            <li>
                <NavLink className="navbar-link" to={"/Manufacture"}>Manufacture</NavLink>
            </li>

            <li>
                <NavLink className="navbar-link" to={"/Consumer"}>Consumer</NavLink>
            </li>

           

            <li>
                <NavLink className="navbar-link" to={"/Awarness"}>Awarness</NavLink>
            </li>
        </ul>
        
    </div>
  </Nav>

  
  
};

export default Navbar
