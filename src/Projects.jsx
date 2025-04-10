import React from 'react'
import './Projects.css';
import { Project_name } from './Project_name';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Projects = () => {
    let all_projects=Project_name.map((v,i)=>{
        return(<div className='project_item' key={i}>
                <img src={v.image} alt='pro_img'/>
                <h3>{v.name}</h3>
                <Link to={v.link}><i class="fa-solid fa-arrow-right"></i></Link>
            </div>)
    })
  return (
    <>
    <Header/>
    <div className='projects'>
        <div className='projects_head'>
            <h1>My Projects</h1>
        </div>
        <div className='project_list'>
            {all_projects}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Projects