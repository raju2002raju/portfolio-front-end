import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import './About.css'

const About = () => {
  return (
    <div className='about-main-container'>
   
     <div className='about-container'>
     <div className='profile-image d-profile-image'>
        <img src='./Images/profile.png'/>
      </div>
      <div className='about-text-container'>
          <div className='About-container'>
          <h1>About <span>Me</span></h1>
        <h1>Full Stack<span> Developer</span></h1>
        <div className='profile-image m-profile-image'>
        <img src='./Images/profile.png'/>
      </div>
        <p>I’m a passionate web developer with a strong foundation in modern web technologies. Although I’m a fresher, I have hands-on experience building interactive and responsive websites through projects during my learning journey. My expertise lies in creating clean, user-friendly interfaces and delivering pixel-perfect designs.</p>
          </div>
            </div>
     </div>
   
    </div>
  )
}

export default About;
