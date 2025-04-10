import React, { useState } from 'react'
import Header from './Header'
import './About.css';
import Edudata from './Edudata';
import Contact from './Contact';
import Footer from './Footer';

const About = () => {
    const [education, setEducation] = useState(true)
    const [experience, setExperience] = useState(false)
  return (
    <>
    <Header/>
    <div className='about'>
        <div className='about_head'>
            <h2>About Me</h2>
        </div>
        <div className='about_me'>
            <div className='my_data'>
                <h3>Hello I'm  <br />Rishikesh Kumar Mahato</h3>
                <h4>Full-Stack Web Developer</h4>
                <p>Highly motivated and detail-oriented Full Stack Web Developer with expertise in front-end and back-end technologies. Seeking to leverage strong skills in HTML, CSS, JavaScript, Node.js, and database management to contribute to the development of dynamic and user-friendly web applications. Eager to work in a collaborative environment, continuously learn new technologies, and deliver high-quality, scalable solutions that meet client needs and business objectives.</p>
            </div>
            <div className='btn'>
                <button>Get Resume<i class="fa-solid fa-download"></i></button>
            </div>
        </div>
        <div className='edu'>
           <button onClick={()=>{setEducation(true)
            setExperience(false)
           }} className={`btn1 ${education?'rm_border':''}`}>EDUCATION</button>
           <button onClick={()=>{setExperience(true)
            setEducation(false)
           }} className={`btn2 ${experience?'rm_border':''}`}>EXPERIENCE</button>
        </div>
        <div className='edu_data'> 
            <Edudata education={education} experience={experience}/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default About