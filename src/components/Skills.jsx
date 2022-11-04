import React from 'react'
import Javascript from '../assets/javascript.png';
import Typescript from '../assets/typescript.png';
import Vue from '../assets/vue.png';
import Html from '../assets/html.png';
import Css from '../assets/css.png';

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold text-[#8892b0]">Experience</p>
                <p className="py-4">These are technologies I've work with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Javascript} alt="logo" />
                    <p className="my-4">Javascript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Typescript} alt="logo" />
                    <p className="my-4">Typescript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Vue} alt="logo" />
                    <p className="my-4">Vue JS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Html} alt="logo" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Css} alt="logo" />
                    <p className="my-4">CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills