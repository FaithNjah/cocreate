import React from 'react'
import "../../themes/footer.css"
import Logo from '../../assets/icons/Logo.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top1'>
                <img src= {Logo} alt='img' />
            </div>
            <div className='footer-top2'>
                <h3>Company</h3>
                <p>About Us</p>
                <p>Blog</p>
                <p>Customers</p>
                <p>Pricing</p>
            </div>
            <div className='footer-top3'>
                <h3>Solutions</h3>
                <p>Content Creators</p>
                <p>Communities</p>
                <p>Educators</p>
                <p>Brands</p>
            </div>
            <div className='footer-top4'>
                <h3>Resources</h3>
                <p>Guides</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
        <div className='footer-bottom'>

        </div>
    </div>
  )
}

export default Footer