import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const CustomersHome = () => {
  return (
    <div className='my-20'>CustomersHome
      <div>
        <h1 className='my-3 text-3xl font-semibold text-center'>Welcome To Farmer's Portal</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsam maxime dolorem eius praesentium asperiores. Nobis ab aut velit perferendis distinctio aperiam hic?</p>
      </div>


      {/* Search bar */}
      <div className='flex justify-center gap-3 items-center mt-14'>
        <div className='w-1/2'>
          <input type="text" className='w-full border-2 border-slate-500 p-2' placeholder='Search something...' />
        </div>
        <div>
          <Link to={'cart'}>
            <BsCartPlus className='text-3xl cursor-pointer' /></Link>
        </div>
      </div>

      {/* Cards */}
      <div>



        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                  <p className="mt-1">$21.15</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                  <p className="mt-1">$12.00</p>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                  <p className="mt-1">$18.40</p>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  )
}

export default CustomersHome