import React from 'react'
import logo from './assets/logo.png'
import './Header.css';
import Skill from './Skill';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <div className='head'>
        <div className='heading'>
            <img src={logo} alt="logo" />
            <h1>My Portfolio</h1>
        </div>
        <div className='Nav'>
            <ul>
                <li><Link to={'/Home'}>HOME</Link></li>
                <li><Link to={'/About'}>ABOUT US</Link></li>
                <li><Link to={'/Skill'}>SKILLS</Link></li>
                <li><Link to={'/Projects'}>PROJECTS</Link></li>
                <li><Link to={'/Contact'}>CONTACT</Link></li>
            </ul>
        </div>
        <div className='hire'>
            <button>Hire Me {'>>'} </button>
        </div>
    </div>
    </>
  )
}

export default Header