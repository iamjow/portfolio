import React, { useState } from 'react'
import { 
    FaBars, 
    FaTimes, 
    FaGithub, 
    FaLinkedin, 
    FaFacebook, 
    FaInstagram 
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isNav, setNav] = useState(false);
    const handleClick = () => setNav(!isNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-40">
        <div className="text-2xl text-pink-600">
            JCode
            {/* <img src={Logo} alt="logo" style={{ width: '50px' }}/> */}
        </div>

        {/* Menu */}
        <ul className="hidden md:flex">
            <li>
                <Link className="hover:text-pink-600 no-underline text-gray-300" to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link className="hover:text-pink-600 no-underline text-gray-300" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link className="hover:text-pink-600 no-underline text-gray-300" to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link className="hover:text-pink-600 no-underline text-gray-300" to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link className="hover:text-pink-600 no-underline text-gray-300" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!isNav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!isNav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className="py-6 text-4xl">
                <Link className="hover:text-pink-600 no-underline text-gray-300" onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link className="hover:text-pink-600 no-underline text-gray-300" onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link className="hover:text-pink-600 no-underline text-gray-300" onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link className="hover:text-pink-600 no-underline text-gray-300" onClick={handleClick} to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link className="hover:text-pink-600 no-underline text-gray-300" onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/* Social Icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#557a95]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://www.linkedin.com/in/jowin-cueto-09150867456/" target="_blank">
                        Linkein <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://www.facebook.com/jowin.cueto.12/" target="_blank">
                        Facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#be4254]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://www.instagram.com/iamjowinmc/" target="_blank">
                        Instagram <FaInstagram size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#333333]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="https://github.com/iamjow" target="_blank">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-40px] duration-300 bg-[#565f69]">
                    <a className="flex justify-between items-center w-full text-gray-300 hover:text-gray-300 no-underline" href="/">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar