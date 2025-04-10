import React from 'react'
import './Skill.css';
import { skill_name } from './Skill_name';
import Header from './Header';
import Footer from './Footer';

const Skill = () => {
  let skill_div=
    skill_name.map((v,i)=>{
      return(
        <div className='skill' key={i}>
          <img src={v.image} />
          {console.log(v.image)}
          <h2>{v.name}</h2>
          <span className='bar'><span className={v.class_name}></span></span>
        </div>
      )
  })
  return (
    <>
    <Header/>
    <div className='My_Skills'>
      <div className='skill_head'>
        <h1>My Special Skills</h1>
        </div>
        <div className='skill_list'>
          {skill_div}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Skill