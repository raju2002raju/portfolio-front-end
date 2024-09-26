import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import MySkills from './Components/MySkills/MySkills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
   <div>
    <Home/>
    <About/>
    <MySkills/>
    <Projects/>
    <Contact/>
   </div>
  );
}

export default App;
