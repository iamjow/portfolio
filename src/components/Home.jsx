import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-auto px-8 flex flex-col justify-center h-full">
            <p className="text-[#8892b0]">Hi, my name is</p>
            <p className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jowin Cueto</p>
            <p className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front End Developer</p>
            <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a front end developer, Optimizing the user experience using HTML, JAVASCRIPT and CSS to bring concepts to life. Developing and maintaining the user interface, Implementing design on mobile websites, fixing bugs and testing for usability.</p>

            <div className="w-40">
                <Link to="work" className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 no-underline" smooth={true} duration={500}>
                    View Work
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3"/>
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home