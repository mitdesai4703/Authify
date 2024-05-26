import React from 'react'
import Home from "./Home";
import Manufacture from "./Manufacture";
import Consumer from "./Consumer";
import AboutUs from './AboutUs';
import Awarness from './Awarness';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './Login';
import SignUp from './SignUp';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const App = () => {

  const theme ={
    media: {mobile: "768px" , tab:"998px"},
  };
  
  return <>
  <ThemeProvider theme={theme}>
  <GlobalStyle />
  <BrowserRouter>
  <Header />
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/manufacture' element={<Manufacture />} />
    <Route path='/consumer' element={<Consumer />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/awarness' element={<Awarness />} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<SignUp/>} />

    </Routes>
    <Footer />
  </BrowserRouter>
  </ThemeProvider>

  </>
    
  
}

export default App
