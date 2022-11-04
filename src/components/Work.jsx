import React from 'react'
import Prolook1 from '../assets/prolook1.png';
import Dsg from '../assets/dsg.png';
import Marucci from '../assets/marucci.png';
import Prolook2 from '../assets/prolook2.png';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold text-[#8892b0]">Work</p>
                <p className="py-6">Check out some of my recent work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{ backgroundImage: `url(${Prolook1})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div">

                    {/* Hover Effect */}
                    <div className="w-full h-full flex flex-col justify-center text-center content-div-child">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Prolook Sports Version 1
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://www.prolook.com/" target="_blank">
                                <button className="text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Visit</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Dsg})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div">

                    {/* Hover Effect */}
                    <div className="w-full h-full flex flex-col justify-center text-center content-div-child">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Dick's & Sporting Goods
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://prolookteam.com/" target="_blank">
                                <button className="text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Visit</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Marucci})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div">

                    {/* Hover Effect */}
                    <div className="w-full h-full flex flex-col justify-center text-center content-div-child">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Marucci
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://customizer.marucciteam.com/designs" target="_blank">
                                <button className="text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Visit</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Prolook2})` }} className="shadow-lg shadow-[#040c16] group container flex justify-center items-center mx-auto content-div">

                    {/* Hover Effect */}
                    <div className="w-full h-full flex flex-col justify-center text-center content-div-child">
                        <span className="text-2xl font-bold text-white tracking-wider">
                            Prolook Sports Version 2
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://prolook-v2-75-stg.qstrike.net/" target="_blank">
                                <button className="text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Visit</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
