import React from 'react'
import aboutImg from '../../assets/about-img.jpg'

const About = () => {
  return (
    <div className='about mt-20 py-20' id='about'>
      <div className='mb-10 flex flex-col items-center justify-center '>
            <h1 className="sm:text-3xl text-4xl  font-medium title-font text-center text-gray-900 my-3">About Us
            </h1>
            <div className='w-1/5 my-1 bg-blue-500 h-1 rounded-md '></div>
            <div className='w-[10%] my-1 bg-red-500 h-1 rounded-md '></div>
          </div>

      <div className='my-5 flex flex-col md:flex-row  justify-center'>
        <div className="left flex justify-center items-center md:w-[40%]">
          <img src={aboutImg} alt="aboutImg" className='rounded-full w-[40%]' />
        </div>
        <div className="right px-3 text-justify md:w-[50%]">
          <p className='my-5'>
          The objective of developing a web application for a farmers' portal is to provide a digital platform that can help farmers access information, services, and tools related to agriculture easily. The primary aim is to empower farmers by providing them with the latest agricultural information, market trends, and resources to help them increase their productivity and profitability. 
          </p>
          <p className='my-5'>
          Agriculture is a crucial sector of the economy in many countries, providing food and livelihoods for millions of people. However, farmers often face numerous challenges, including limited access to information, finance, and markets. These challenges can hinder their productivity and profitability, leading to poverty and food insecurity. Therefore, developing a web application for a farmers' portal can help address some of these challenges, providing farmers with the resources they need to succeed.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About