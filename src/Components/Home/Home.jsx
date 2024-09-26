import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement('a');
    
    link.href = '/documents/Rishi_Roy_CV.pdf';

    link.download = 'Rishi_Roy_CV.pdf';
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
  };

  return (
    <div className='home-main-container'>
      <Navbar/>
      <div className='home-container'>
        <div className='text-container'>
          <div className='container'>
            <h1>Hello! it's Me</h1>
            <h2>Rishi Roy</h2>
            <div className='profile-image m-profile-image'>
              <img src='./Images/profile.png' alt="Rishi Roy" />
            </div>
            <h1>And I'm <span>Web Developer</span></h1>
            <p>As a fresher, I am eager to work in a professional environment where I can apply my skills, learn from experienced developers, and contribute to real-world projects. My goal is to continuously improve and grow as a developer.</p>
            <div className='social-media-container'>
              <div className="social-media"><FontAwesomeIcon icon={faFacebook} /></div>
              <div className="social-media"><FontAwesomeIcon icon={faInstagram} /></div>
              <div className="social-media"><FontAwesomeIcon icon={faWhatsapp} /></div>
              <div className="social-media"><FontAwesomeIcon icon={faGithub} /></div>
            </div>
            <div className='cv-download-div'>
              <button onClick={handleDownloadCV}>Download CV</button>
            </div>
          </div>
        </div>
        <div className='profile-image d-profile-image'>
          <img src='./Images/profile.png' alt="Rishi Roy" />
        </div>
      </div>
    </div>
  )
}

export default Home