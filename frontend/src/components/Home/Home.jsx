import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import { Autoplay, Pagination, Navigation } from "swiper";

import sliderImg1 from '../../assets/slider-img1.png'
import sliderImg2 from '../../assets/slider-img2.jpg'
import sliderImg4 from '../../assets/slider-img4.jpg'

const Home = () => {
  return (
    <div className='home py-14 mt-14 h-[650px] flex items-center order-2 border-red-500' id='home'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >



        {/* Slides */}



        <SwiperSlide >
          <div className='my-swiper-slide flex flex-col md:flex-row w-full ' id='swiper-slide1'>
            <div className="left w-full md:w-[60%] h-full " style={{
              backgroundImage: `url(${sliderImg1})`,
              backgroundRepeat: 'no-repeat'
            }}>
              {/* <img src={sliderImg1} alt="" className='w-full' /> */}
            </div>
            <div className='right flex flex-col gap-10 justify-center items-center relative px-3  w-full md:w-[40%]  '>
              <h1 className='text-3xl font-semibold my-3'>Grow your success with our farmer-focused web portal.</h1>
              <p>
              Our farmer-focused web portal is designed to empower farmers with valuable resources, precision agriculture tools, and a community of like-minded individuals. Simplify farm management and grow your success with us.
              </p>
              {/* <div className='flex gap-3'>
                <button className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600'>Get started</button>
                <button className='px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600'>Read More</button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className='flex flex-col md:flex-row  w-full my-swiper-slide' id='swiper-slide2'>
            <div className="left w-full md:w-[60%] h-full " style={
              {
               
          backgroundImage: `url(${sliderImg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat'
              }
            }>
            </div>
            <div className='right flex flex-col gap-10 justify-center items-center relative px-3 w-full md:w-[40%]  '>
              <h1 className='text-3xl font-semibold my-3'>From seed to sale, our portal empowers farmers at every stage of the process</h1>
              <p>
                
Our web portal is a comprehensive solution that supports farmers at every stage of the crop cycle, from planting to harvesting and selling. Gain greater control and optimize your farm operations with our platform.
              </p>
              {/* <div className='flex gap-3'>
                <button className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600'>Get started</button>
                <button className='px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600'>Read More</button>
              </div> */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <div className='flex flex-col md:flex-row  w-full my-swiper-slide' id='swiper-slide3'>
            <div className="left w-full md:w-[60%] h-full " style={
              {
               
          backgroundImage: `url(${sliderImg4})`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat'
              }
            }>
            </div>
            <div className='right md:hidden flex flex-col gap-10 justify-center items-center relative px-3 w-full md:w-[40%]  '>
              <h1 className='text-3xl font-semibold my-3'>Simplify your farm management with our intuitive and easy-to-use web portal.</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aut, deleniti amet minus praesentium dolor omnis, perferendis laboriosam, dolore ipsum aspernatur pariatur quasi.
              </p>
              <div className='flex gap-3'>
                <button className='px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600'>Get started</button>
                <button className='px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600'>Read More</button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        

      









      </Swiper>
    </div>
  )
}

export default Home