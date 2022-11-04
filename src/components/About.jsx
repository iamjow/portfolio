import React from 'react'

const About = () => {
  return (
    <div>
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols gap-8">
                    <div className="pb-8 pl-4">
                        <p className="text-4xl font-bold text-[#8892b0]">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-2xl font-bold">
                        <p>Hi. I'm Jowin, nice to meet you, Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                           Currently, I work at PROLOOK SPORTS. I've been there for just over 3 years. My responsibilities include implementing and maintaining in all existing projects. I love non-strict environment because I can think clearly and focus on what I'm doing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About