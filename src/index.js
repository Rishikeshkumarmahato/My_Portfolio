import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './About';
import Skill from './Skill';
import Contact from './Contact';
import Projects from './Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
let all_routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'Home',
    element:<App/>
  },
  {
    path:'About',
    element:<About/>
  },
  {
    path:'Skill',
    element:<Skill/>
  },
  {
    path:"Contact",
    element:<Contact/>
  },
  {
    path:"Projects",
    element:<Projects/>
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={all_routes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
