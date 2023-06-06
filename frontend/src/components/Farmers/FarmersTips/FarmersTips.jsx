import React from 'react'

const FarmersTips = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">Must know for the usage</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Important Tips</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Important tips for farmers can refer to various aspects of farming, including crop production, livestock management, financial planning, and overall farm operations. Here are some key areas where farmers can focus on...</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Crop - Info</h2>
              <p className="leading-relaxed text-base mb-4">Crop info for farmers refers to information about various aspects of crop production that can be valuable for farmers. </p>
              <a href='/crop-info' className="text-yellow-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Fertilizers & Pesticides</h2>
              <p className="leading-relaxed text-base mb-4">Fertilizers and pesticides are important tools used in agriculture to enhance crop productivity and protect plants from pests and diseases.</p>
              <a href='https://www.india.gov.in/topics/agriculture/fertilizers-pesticides' target='_blank' className="text-yellow-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Crop - Prices</h2>
              <p className="leading-relaxed text-base mb-4">Crop prices for farmers refer to the market prices at which their agricultural products, such as crops or produce, are bought and sold.</p>
              <a href='/c_p' className="text-yellow-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            {/* <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <p className="text-yellow-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </p>
      </div> */}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            <a href="/help">Help</a>
          </button>
        </div>
      </section>



    </div>
  )
}

export default FarmersTips