import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium exercitationem illo distinctio, debitis et nihil quaerat itaque voluptates sit quis dolorem doloribus aut aspernatur qui vitae veritatis sunt id fugiat laudantium nemo molestias reprehenderit?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon }alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+12-4986969-87</li>
                    <li>contact@food.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <div className="footer-copyright">
            <p>Copyright 2024 &copy; tomato.com. All Right are reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
