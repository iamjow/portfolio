import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form method="POST" action="https://getform.io/f/1bcd007d-e944-4a72-b433-1172397bffb9" className="flex flex-col max-w-[600px] w-full">
            <div className='pb-8'>
                <p className="text-4xl text-[#8892b0] font-bold">Contact</p>
                <p className="text-gray-300 py-4">Submit the form below or shoot me an email - <span className="text-pink-600">jowincueto25@gmail.com</span></p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
            <input className="my-4 p-2 bg-[#ccd6f6] p-2" type="text" placeholder="Email" name="email" />
            <textarea className="bg-[#ccd6f6] p-2" rows="10" placeholder="Message" name="message"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact