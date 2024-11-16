import React from 'react';
import "../../themes/homePage.css";
import Logo from "../../assets/icons/Logo.png";
import HeroImage from "../../assets/images/Hero-image.png"

const homePage = () => {
  return (
    <div className='homePage'>
       <nav className='nav'>
        <div>
          <img src={Logo} className='image'/>
        </div>
        <div>
            <ul>
                <li>Solutions</li>
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='buttons'>
           <button className='login'>LOG IN</button> 
           <button className='signup'>SIGN UP</button> 
        </div>
       </nav>

       <div className='heroSection'>
        <div>
            <h1 className='hero'>
              <span className='line'>Bring Stories to Life </span>
              <span className='line'> with the Person</span>
              <span className='line'> you Desire <span className='most'> MOST </span> to </span>
              <span className='line'>Collaborate with </span>
              </h1>
            <button className='Signupbutton'>SIGN UP FOR FREE</button>
            <p>No Credit Card Required</p>
        </div>
        <div>
           <img src = {HeroImage} alt='HeroImage' className='HeroImage' />
        </div>
       </div>
    </div>
  )
}

export default homePage