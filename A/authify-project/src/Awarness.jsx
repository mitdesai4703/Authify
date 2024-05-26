import React from 'react'
import styled from 'styled-components';

const Awarness = () => {
  return (
    <Wrapper className="section">
    <div className="awareness">
      <div className="awareness-container">
        <div className="heading">
          <h1>Awareness</h1>
          <div></div>
        </div>

        <div className="Aware">
          <div className="awareness-info-1">
          <img className='image' src='public\images\risk-pic.jpg'></img>
            {/* <img src={Image1} className="image" /> */}
            <div className="text-right">
              <h2 className="aware-heading">Risks of Fake Products</h2>
              <div className="aware-detail-1">
                <p>
                  <b>Safety Hazards:</b> Counterfeit products, especially
                  electronics, medications, or cosmetics, may contain harmful
                  materials or malfunction, leading to injuries or health risks.
                </p>
                <p>
                  <b>Financial Loss:</b> Consumers waste money on products that
                  are ineffective or inferior to the real ones.
                </p>
                <p>
                  <b> Damaged Brand Reputation:</b> Fake products can erode
                  trust in legitimate brands.
                </p>
                <p>
                  <b>Fueling Criminal Activity:</b> Counterfeiting is a
                  multi-billion dollar industry that funds illegal
                  organizations.
                </p>
              </div>
            </div>
          </div>

          <div className="awareness-info-2">
            <div className="text-left">
              <h2 className="aware-heading">How to Spot Fakes</h2>
              <div className="aware-detail-2">
                <p>
                  <b>Price:</b> If a deal seems too good to be true, it probably
                  is.
                </p>
                <p>
                  <b>Packaging:</b> Look for typos, poor printing quality, or
                  inconsistencies with genuine packaging.
                </p>
                <p>
                  <b>Product Quality:</b> Fakes may have flimsy materials, loose
                  stitching, or uneven finishes.
                </p>
                <p>
                  <b>Security Features:</b> Many brands incorporate holograms,
                  unique serial numbers, or special tags to identify genuine
                  products.
                </p>
              </div>
            </div>
            <img className='image-right' src='public\images\2.jpg'></img>
            {/* <img src={Image2} className="image" /> */}
          </div>

          <div className="awareness-info-1">
          <img className='image' src='public\images\3.jpg'></img>
            {/* <img src={Image3} className="image" /> */}
            <div className="text-right">
              <h2 className="aware-heading">Reporting Counterfeits</h2>
              <div className="aware-detail-1">
                <p>
                  <b>Government Agencies:</b> Report suspected counterfeits to
                  relevant government agencies that handle intellectual property
                  or consumer protection.
                </p>
                <p>
                  <b>Brand Websites:</b> Many brands have dedicated channels for
                  reporting counterfeit products.
                </p>
              </div>
            </div>
          </div>

          <div className="awareness-info-2">
            <div className="text-left">
              <h2 className="aware-heading">Spread the Message</h2>
              <div className="aware-detail-2">
                <p>
                  <b>Educate Others:</b> Share information about fake product
                  identification with friends, family, and online communities.
                </p>
                <p>
                  <b>Support Legitimate Businesses:</b> Choose to buy from
                  brands that prioritize quality and consumer safety.
                </p>
              </div>
            </div>
            <img className='image-right' src='public\images\4.jpg'></img>
            {/* <img src={Image4} className="image" /> */}
          </div>
        </div>
      </div>
    </div>

    </Wrapper>
    
  );
};

const Wrapper = styled.section`
.awareness {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b7e7e4;
  width: 100%;
  height: 100%;
}

.awareness-container {
  margin: 50px;
  padding: 5px;
  padding-bottom: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  width: 70%;
  height: fit-content;
}

.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  font-size: 60px;
  font-family: "DM Serif Display", serif;
}

.heading div {
  height: 3px;
  margin-top:40px;
  width: 150px;
  background-color: #e54b4b;
  position: relative;
  bottom: 40px;
}

.image {
  width: 300px;
  height:300px;
  margin-left:20px;
  border-radius: 30px;
  box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.2);
}
.image-right{
  width: 300px;
  height:300px;
  margin-right:20px;
  border-radius: 30px;
  box-shadow: 7px 10px 20px rgba(0, 0, 0, 0.2);

}

.awareness-info-1,
.awareness-info-2 {
  display: flex;
  font-family: "Dosis", sans-serif;
  justify-content: space-around;
  margin-bottom: 50px;
  width: 1200px;
}

.text-left,
.text-right {
  max-width: 600px;
}

/* .text-left {
  margin-right: 50px;
}
.text-right {
  margin-left: 50px;
} */

.Aware {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.aware-detail-1,
.aware-detail-2 {
  padding-left: 50px;
  font-size: 22px;
}

.aware-heading {
  font-size: 35px;
}

`;

export default Awarness
