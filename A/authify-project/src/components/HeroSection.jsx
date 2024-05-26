import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const HeroSection = () => {
  return  <Wrapper>
  <div className='container-grid-grid-two-column'>
    <div className='section-hero-data'>
        <h1 className='hero-top-data'>Fight fakes. Empower consumers.</h1>
        <p className='hero-para'>We're revolutionizing product verification with <br></br>
         tamper-proof blockchain.</p>
         <button className='hero-btn'>
            <NavLink className={"verify-btn"} to={"/Consumer"} >Verify</NavLink>
         </button>
    </div>
    <div className='hero-img1'>
        <picture>
            <img src='./images/pic1.png' alt='' srcSet='' height={300}/>
        </picture>
    </div>
    <div className='hero-img2'>
    <picture>
            <img src='./images/pic2.png' alt='' srcSet='' height={300}/>
        </picture>
    </div>
  </div>

  <div className='authenticode'>
    <div>
        <h1 className='authenticode-h1'>How AuthentiCode work</h1>
    </div>
    <div className='cards'>
        <div className='card-1'>
            <img src='./images/Scan.svg' height={250}></img>
            <h2 className='card-1-h2'>Step 1: Scan QR code</h2>
            <p className='card-1-p'>Enter the product code to validate its <br></br>authenticity and make a secure<br></br>transaction.</p>
        </div>

        <div className='card-2'>
            <img src='./images/Verified.svg' height={250}></img>
            <h2 className='card-2-h2' >Step 2: Verify authenticity</h2>
            <p className='card-2-p'>Verify the product's authenticity and <br></br>proceed with a secure purchase to <br></br>combat counterfeit products.</p>
        </div>

        <div className='card-3'>
            <img src='./images/Plan.svg' height={250}></img>
            <h2 className='card-3-h2'>Step 3: Make a secure purchase</h2>
            <p className='card-3-p'>Complete the secure payment process <br></br>and await product verification for a <br></br> genuine purchase experience.</p>
        </div>
    </div>
  </div>

  <div className='information-section'>
    <div className='information-card-1'>
        <div>
            <img  className='card-1-img' src='./images/manufacture.jpeg' height={250}></img>
        </div>
        <div className='card-1-text'>
            <h2 className='card-1-text-h2'>Manufacturer</h2>
            <p className='card-1-text-p'>manufacturers have the responsibility to produce consistent, high quality products that are useful to consumer following industry standards and sustainable principles and in so doing, provide jobs and bolster trade and the worldwide economy.</p>
        </div>
    </div>

    <div className='information-card-2'>
        <div className='card-2-text'>
            <h2 className='card-2-text-h2'>Consumer</h2>
            <p className='card-2-text-p'>Consumers play a critical role in a market economy because they are the ones who purchase goods. When consumers spend money on goods and services, it creates demand for those products, which in turn stimulates production and drives economic growth.</p>
        </div>
        <div >
            <img className='card-2-img' src='./images/consumer.jpeg' height={250}></img>
        </div>

    </div>

    
    </div>
  

  </Wrapper>
};

const Wrapper = styled.section`

.container-grid-grid-two-column{
    background: rgba(183, 231, 228, 1);
    height:700px;
}

.section-hero-data{
    display: flex;
    margin-left:50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding-bottom:100px;
    

}

.hero-top-data{
    width: 100%;
    align-text:center;
    font-family:"Serif";
    margin-bottom:10px;
}

.hero-para{
   width: 700px;
   height: 80px;
   top: 338px;
   left: 442px;
   margin-bottom:10px;
   font-size:30px;

}

.hero-input{
width: 529px;
height: 62px;
top: 466px;
left: 456px;
gap: 0px;
border-radius: 22px 22px 22px 22px;
margin-top:50px;
padding: 30px;
font-size:30px;
opacity: 0px;

}

.hero-btn{
    ${'' /* background-color: rgba(229,75,75,1);
    color: white;
    border: 2px solid rgba(229,75,75,1);
    margin-top:20px;
    padding-top: 10px;
    padding-right:20px;
    padding-bottom:10px;
    padding-left: 20px;

    &:hover {
    background-color: white;
     color: red;
     border-color: red;
} */}

padding:10px 40px;
margin-top:20px;
background-color: rgba(229,75,75,1);
border:none;
cursor:pointer;
border-radius:5px;
}

.verify-btn{
    color:white;
    font-size:20px;
}

.verify-btn:hover{
    color:black;
    transition:0.3s ease-in;
}

.hero-img1{
 position: absolute;
 top: 200px;
 left: 20px;
 height:100px;
}

.hero-img2{
position: absolute;
top: 370px;
right: 70px;
}

.authenticode-h1{
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top:50px;
    font-family:"Serif";
}

.cards{
    display:flex;
    padding-top:30px;
    justify-content:space-evenly;

}

.card-1{
    border: 1px solid black;
    border-radius: 0px 22px 0px 22px;
    padding-top:30px;
    margin-left:20px;
    width:350px;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.card-1-h2{
    font-size:30px;
}

.card-1-p{
    font-size:20px;
}

.card-2{
    border: 1px solid black;
    border-radius: 0px 22px 0px 22px;
    padding-top:30px;
    margin-left:20px;
    width:350px;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.card-2-h2{
    font-size:30px;
}

.card-2-p{
    font-size:20px;
}

.card-3{
    border: 1px solid black;
    border-radius: 0px 22px 0px 22px;
    padding-top:30px;
    margin-left:20px;
    width:350px;
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.card-3-h2{
    font-size:27px;
}

.card-3-p{
    font-size:20px;
}

.information-section{
    background-color: rgba(229,75,75,1);
    margin-top:100px;
    display:flex;
    flex-direction:column;
}

.information-card-1{
    display:flex;
    margin-left:20px;
    margin-right:20px;
}

.card-1-img{
    width:250px;
    height:350px;
    border-radius:70px;
    padding-top:30px;
    padding-bottom:30px;
    margin-left:20px;
}

.card-1-text{
    display:flex;
    flex-direction:column;
    width:1500px;
    padding-left:20px;
}

.card-1-text-h2{
    color:white;
    padding-right:750px;
    padding-top:40px;
}

.card-1-text-p{
    color:white;
    width:1000px;
    font-size:20px;
    padding-left:80px;
}

.information-card-2{
    display:flex;
    margin-left:20px;
    margin-right:20px;
}
.card-2-img{
    width:250px;
    height:350px;
    border-radius:70px;
    padding-top:30px;
    padding-bottom:30px;
    margin-right:20px;
}

.card-2-text{
    display:flex;
    flex-direction:column;
    width:1500px;
    padding-left:20px;
}

.card-2-text-h2{
    color:white;
    padding-right:830px;
    padding-top:40px;
}

.card-2-text-p{
    color:white;
    width:1000px;
    font-size:20px;
    padding-left:80px;
}

.information-card-3{
    display:flex;
    margin-left:20px;
    margin-right:20px;
}
.card-3-img{
    width:250px;
    height:320px;
    padding-top:30px;
    padding-bottom:30px;
}

.card-3-text{
    display:flex;
    flex-direction:column;
    width:1500px;
    padding-left:20px;
}

.card-3-text-h2{
    color:white;
    padding-right:750px;
    padding-top:40px;
}

.card-3-text-p{
    color:white;
    width:700px;
    font-size:20px;
    padding-left:80px;
}

`;
export default HeroSection
