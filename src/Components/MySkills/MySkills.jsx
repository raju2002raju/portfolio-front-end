import React from 'react'
import './MySkills.css'

const MySkills = () => {
  return (
    <div className='skill-main-container'>
     <div className='skill-container'>
        <h1>My <span>Skills</span></h1>

        <div className='skill-container-2'>
            <div className="skill-div">
                <p className='headings'>HTML5 , CSS3 & Javascript</p>
                <p className='content'>I have a solid understanding of HTML and CSS, which I use to structure and style websites with a focus on responsive design.

Proficient in JavaScript, enabling me to add interactivity and functionality to web pages.</p>
            </div>
            <div className="skill-div">
                <p className='headings'>React.js & Node.js</p>
                <p className='content'>I have experience working with React.js, creating dynamic single-page applications with reusable components.</p>
            </div>
            <div className="skill-div">
                <p className='headings'>Basic UI/UX Design</p>
                <p className='content'> I can create simple and intuitive user interfaces with an emphasis on user experience.</p>
            </div>
         
        </div>
     </div>
    
    </div>
  )
}

export default MySkills;
