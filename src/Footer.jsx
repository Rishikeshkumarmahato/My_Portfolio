import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <h1>Contact Me</h1>
        <div className='footer_contact'>
            <div className='footer_mob'>
                <i class="fa-solid fa-phone"></i>
                <p>7488613902</p>
            </div>
            <div className='footer_mob'>
                <i class="fa-solid fa-envelope"></i>
                <p>mahatorishikeshkumar@gmail.com</p>
            </div>
            <div className='footer_social'>
                <Link to={"https://www.instagram.com/rishii_chauhan_/"}><i class="fa-brands fa-instagram"></i></Link>
                <Link to={"https://github.com/Rishikeshkumarmahato"}><i class="fa-brands fa-github"></i></Link>
                <Link to={"https://www.linkedin.com/in/rishikesh-kumar-m-09209a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}><i class="fa-brands fa-linkedin"></i></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer