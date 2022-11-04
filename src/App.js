import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { 
  FaBars, 
  FaTimes, 
  FaGithub, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram 
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className={loading ? "h-screen flex justify-center items-center" : ''}>
      {loading ? ( <ClimbingBoxLoader 
        className="" 
        color={'#db2777'} 
        loading={loading} 
        size={20} />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
      
          <div className="flex justify-center p-10 lg:hidden">
            <div className="bg-[#557a95] p-2 rounded-full">
              <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://www.linkedin.com/in/jowin-cueto-09150867456/" target="_blank">
                  <FaLinkedin size={30 } style={{ color: 'ffffff' }} />
              </a>
            </div>
            <div className="bg-blue-600 p-2 rounded-full ml-2">
              <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://www.facebook.com/jowin.cueto.12/" target="_blank">
                  <FaFacebook size={30} style={{ color: 'ffffff' }}/>
              </a>
            </div>
            <div className="bg-[#be4254] p-2 rounded-full ml-2">
              <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://www.instagram.com/iamjowinmc/" target="_blank">
                  <FaInstagram size={30} style={{ color: 'ffffff' }}/>
              </a>
            </div>
            <div className="bg-[#333333] p-2 rounded-full ml-2">
              <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://github.com/iamjow" target="_blank">
                  <FaGithub size={30} style={{ color: 'fffffff' }}/>
              </a>
            </div>
            <div className="bg-[#565f69] p-2 rounded-full ml-2">
              <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="/">
                  <BsFillPersonLinesFill size={30} style={{ color: 'fffffff' }}/>
              </a>
            </div>   
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
