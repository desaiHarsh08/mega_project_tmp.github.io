import React from 'react'

const Features = () => {
  return (
    <div className='features  md:py-14  ' id='features'>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className='mb-20 flex flex-col items-center justify-center '>
            <h1 className="sm:text-3xl text-4xl  font-medium title-font text-center text-gray-900 my-3">Features
            </h1>
            <div className='w-1/5 my-1 bg-blue-500 h-1 rounded-md '></div>
            <div className='w-[10%] my-1 bg-red-500 h-1 rounded-md '></div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Simple UI</h2>
                <p className="leading-relaxed text-base">Easy for users to find the information they need and complete tasks without feeling overwhelmed or confused. </p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Farming related information</h2>
                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
                
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Price Tracking</h2>
                <p className="leading-relaxed text-base">Marketing and sales tools, such as price tracking, crop pricing and market analysis, and connecting farmers to buyers.</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Features