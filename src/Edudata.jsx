import React from 'react'
import './Edudata.css';
import { education_details } from './Education';
import { experience_details } from './Experience';

const Edudata = ({education,experience}) => {
    let para=(education?(education_details.map((v,i)=>{
        return(<p>{v.duration}</p>)
    })):(experience_details.map((v,i)=>{
        return(<p>{v.duration}</p>)
    })))
    let cat=(education?(education_details.map((v,i)=>{
        return(
            <div className='cat_list'>
                <h2>{v.degree}</h2>
                <h3>{v.school}</h3>
                <p>{v.caption}</p>
            </div>
        )
    })):(experience_details.map((v,i)=>{
        return(
            <div className='cat_list'>
                <h2>{v.job_title}</h2>
                <h3>{v.company}</h3>
                <p>{v.caption}</p>
            </div>
        )
    })))
  return (
    <>
    <div className='edu_details'>
        <div className='duration'>
            {para}
        </div>
        <div className='edu_category'>
            {cat}
        </div>
    </div>

    </>
  )
}

export default Edudata