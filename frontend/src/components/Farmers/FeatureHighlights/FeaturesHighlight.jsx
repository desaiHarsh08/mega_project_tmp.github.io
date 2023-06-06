import React from 'react'
import PMFBY from '../../../assets/PMFBY.jpeg'
import PMKSY from '../../../assets/PMKSY.jpg'
import PKVY from '../../../assets/pkvy.jpg'

const FeaturesHighlight = () => {
  return (
    <div>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-yellow-500"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Popular Schemes by GOI</h1>
        <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">As knowledge cutoff in September 2021, there were several popular schemes introduced by the Indian government for farmers.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          {/* <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" /> */}
          <img alt="content" className="object-cover object-center h-full w-full" src={PMFBY} />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pradhan Mantri Fasal Bima Yojana (PMFBY)</h2>
        <p className="text-base leading-relaxed mt-2">Pradhan Mantri Fasal Bima Yojana (PMFBY) is the government sponsored crop insurance scheme that integrates multiple stakeholders on a single platform.</p>
        <a href='https://pmfby.gov.in/' target={'_blank'} rel="noreferrer" className="text-yellow-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={PMKSY} />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Pradhan Mantri Krishi Sinchai Yojana</h2>
        <p className="text-base leading-relaxed mt-2">Pradhan Mantri Krishi Sinchai Yojana is a national mission to improve farm productivity and ensure better utilization of the resources in the country. The budget of ₹53 billion in a time span of one year 2015-2016 has been allocated to this scheme</p>
        <a href='https://pmksy.gov.in/' target={'_blank'} rel="noreferrer" className="text-yellow-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={PKVY} />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Paramparagat Krishi Vikas Yojana </h2>
        <p className="text-base leading-relaxed mt-2">“Paramparagat Krishi Vikas Yojana” is an elaborated component of Soil Health Management (SHM) of major project National Mission of Sustainable Agriculture (NMSA). Under PKVY Organic farming is promoted through adoption of organic village by cluster approach and PGS certification.

</p>
        <a href='https://hindi.nvshq.org/paramparagat-krishi-vikas-yojana/' rel="noreferrer" target={'_blank'} className="text-yellow-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default FeaturesHighlight