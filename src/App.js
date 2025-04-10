import logo from './logo.svg';
import './App.css';
import Header from './Header';
import my_img from './assets/my_img.jpg'
import Skill from './Skill';
import About from './About';
import Edudata from './Edudata';
import Footer from './Footer';
import Projects from './Projects';

function App() {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className='name_section'>
        <h1 datta-text="Hello! I'm  Rishikesh Kumar Mahato">Hello! I'm <br/> Rishikesh Kumar Mahato</h1>
        <h5>Full-Stack Web Developer</h5>
        <h3>Objective</h3>
        <p>Highly motivated and detail-oriented Full Stack Web Developer with expertise in front-end and back-end technologies. Seeking to leverage strong skills in HTML, CSS, JavaScript, Node.js, and database management to contribute to the development of dynamic and user-friendly web applications. Eager to work in a collaborative environment, continuously learn new technologies, and deliver high-quality, scalable solutions that meet client needs and business objectives.</p>
        <button>Get Resume<i class="fa-solid fa-download"></i></button>
      </div>
      <div className='photograph'>
        <img src={my_img} alt=''/>
      </div>
    </div> 
    <Footer/>
    </>
  )
}

export default App;
