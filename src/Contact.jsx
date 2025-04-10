import React from 'react'
import './Contact.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <Header/>
    <div className='contact'>
        <div className='contact_head'>
            <h1>Contact Me</h1>
        </div>
        <div className='contact_body'>
            <div className='social_connect'>
                <div className='address'>
                    <div className='add_conn'>
                        <label>Phone:</label>
                        <p>7488613902</p>
                    </div>
                    <div className='add_conn'>
                        <label>Email:</label>
                        <p>mahatorishikeshkumar@gmail.com</p>
                    </div>
                    <div className='add_conn'>
                        <label>Address:</label>
                        <p>Pokhariyapeer,Atardah,Muz</p>
                    </div>
                </div>
                <div className='follow'>
                    <h1>Follow Me</h1>
                    <div className='social_media'>
                        <Link to={"https://www.instagram.com/rishii_chauhan_/"}><i class="fa-brands fa-instagram"></i></Link>
                        <Link to={'https://github.com/Rishikeshkumarmahato'}><i class="fa-brands fa-square-github"></i></Link>
                        <Link to={'https://www.linkedin.com/in/rishikesh-kumar-m-09209a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app '}><i class="fa-brands fa-linkedin"></i></Link>
                    </div>
                </div>
            </div>
            <div className='form_connect'>
                <h5>|| Get in Touch</h5>
                <div className='form'>
                    <label>If you have any project or <br />need help. Contact me</label>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis repudiandae animi, iste eum repellendus quidem similique minima quae esse voluptatum dignissimos tempore eveniet eos eaque voluptas suscipit blanditiis adipisci enim ad neque, corrupti quisquam. Veniam, delectus corrupti non accusantium amet incidunt eos blanditiis maiores. Facere est explicabo optio totam labore.</p>
                    <div className='form_input'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='form_input'>
                        <input type="text" placeholder='Phone' />
                        <input type="text" placeholder='Subject' />
                    </div>
                    <textarea rows={15} cols={50} placeholder='Comment...'></textarea>
                    <button>Submit Message</button>
                </div>
            </div>
        </div>
    </div><Footer/></>
  )
}

export default Contact