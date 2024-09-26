import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

// Custom hook for typing animation
const useTypingEffect = (words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const Home = () => {
  const jobTitles = ["Web Developer", "Front-end Developer", "React js Developer"];
  const typedText = useTypingEffect(jobTitles, 100, 50, 2000);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/documents/Rishi_Roy_CV.pdf';
    link.download = 'Rishi_Roy_CV.pdf';
    document.body.appendChild(link);
    link.click();
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
            <h1>And I'm <span>{typedText}</span></h1>
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
  );
};

export default Home;