import React from 'react'
import "../../themes/aboutUs.css"
import aboutUsImg from "../../assets/images/aboutusimg.png"

const aboutUs = () => {
  return (
    <div className='aboutUs'>
        <h1>About Us</h1>
        <div className='divContent'>
            <div className='textContent'>
                <p><span className='paragraph'>COCreate team is a group of tech </span>
                    <span className='paragraph'>enthusiasts and writers that are</span>
                    <span className='paragraph'>passionate about creativity, collaboration</span>
                    <span className='paragraph'>and diverse network</span>
                </p>
            </div>
            <div className='imageContent'>
                <img src= {aboutUsImg} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default aboutUs