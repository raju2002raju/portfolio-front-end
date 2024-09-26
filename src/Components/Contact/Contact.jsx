import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-backend-bxym.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }  
  };

  return (
    <div className='contact-main-container'>
      <div className='about-container'>
        <div className='about-text-container'>
          <div className='About-container'>
            <h1>Contact <span>Me</span></h1>
            <h1>let’s work <span>together</span></h1>
            <p>I’m always excited to connect with new people and explore new opportunities. Whether you’re interested in discussing a project, need assistance with a web development task, or just want to collaborate, I’d be happy to chat.</p>
            <p>91-9915862688</p>
            <p>royr55601@gmail.com</p>
          </div>
        </div>
        <div className='profile-image'>
          <form onSubmit={handleSubmit} className='input-fields'>
            <input 
              type="text" 
              className='input-fild-box' 
              name="name" 
              placeholder='Enter Your Name' 
              value={formData.name} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className='input-fild-box' 
              name="email" 
              placeholder='Enter Your Email' 
              value={formData.email} 
              onChange={handleChange} 
            />
            <input 
              type="text" 
              className='input-fild-box' 
              name="phone" 
              placeholder='Enter Your Phone Number' 
              value={formData.phone} 
              onChange={handleChange} 
            />
            <textarea 
              className='input-fild-message' 
              name="message" 
              placeholder='Enter Your Message' 
              value={formData.message} 
              onChange={handleChange} 
            />
            <div className='contact-submit'>
              <button type="submit" className='contact-submit-btn'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
