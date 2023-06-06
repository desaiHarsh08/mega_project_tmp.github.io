import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll'
import sch1 from '../../../assets/sch1.jpg'
import sch2 from '../../../assets/sch2.jpg'
import sch3 from '../../../assets/sch3.jpg'
import sch4 from '../../../assets/sch4.jpg'
import sch5 from '../../../assets/sch5.jpg'
import sch6 from '../../../assets/sch6.jpg'
import sch7 from '../../../assets/sch7.jpg'
import sch8 from '../../../assets/sch8.jpg'
import sch9 from '../../../assets/sch9.jpg'
import sch10 from '../../../assets/sch10.jpg'
import sch11 from '../../../assets/sch11.jpg'
import sch12 from '../../../assets/sch12.jpg'
import sch13 from '../../../assets/sch13.jpg'
import sch14 from '../../../assets/sch14.jpg'
import sch15 from '../../../assets/sch15.jpg'

const Schemes = () => {

  const navigate = useNavigate();

  const host = "http://localhost:5000";

  const [scheme, setScheme] = useState({});
 console.log(scheme)


    //   Add scheme
    const createScheme = async (schemeName, objective, benefits)=>{
      // API Call
      const res = await fetch(`${host}/api/schemes/addscheme`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
          },
          body: JSON.stringify({schemeName, objective, benefits})
      });
      const json = await res.json();
      // console.log(json)
      setScheme(json);
      // return json.success
      if(json===true){
        alert('Scheme already applied...!');
      }else{
        alert('Scheme applied...!');
      }
  }

  // const handleClick = () => {
  //   // console.log(obj, bene);
  //   alert("Applied...!");
  // }

  const handleOne = () => {
    let schemeName = 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)';
    let objective = 'To provide direct income support to small and marginal farmers.';
    let benefits = 'Eligible farmers receive financial assistance of Rs. 6,000 per year in three equal installments.';
    createScheme(schemeName, objective, benefits);
  }

  const handleTwo = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleThree = () => {
    let schemeName = 'Soil Health Card Scheme';
    let objective = 'To assess soil fertility and provide farmers with customized recommendations for balanced fertilization.';
    let benefits = 'Soil health cards with nutrient status and recommendations help farmers optimize fertilizer use and improve soil health.';
    createScheme(schemeName, objective, benefits);
  }
  const handleFour = () => {
    let schemeName = 'Paramparagat Krishi Vikas Yojana (PKVY)';
    let objective = 'To promote organic farming and reduce the use of chemical inputs.';
    let benefits = 'Financial support and technical guidance are provided to farmers for adopting organic farming practices.';
    createScheme(schemeName, objective, benefits);
  }
  const handleFive = () => {
    let schemeName = 'Rashtriya Krishi Vikas Yojana (RKVY)';
    let objective = 'Financial assistance is provided to states for implementing agriculture-related projects and initiatives.';
    let benefits = 'Financial assistance is provided to states for implementing agriculture-related projects and initiatives.';
    createScheme(schemeName, objective, benefits);
  }
  const handleSix = () => {
    let schemeName = 'National Agricultural Market (e-NAM) Scheme';
    let objective = 'To promote efficient water use in agriculture through irrigation infrastructure development.';
    let benefits = 'Farmers can sell their produce directly to buyers through e-auctions, ensuring better price realization and reducing intermediaries.';
    createScheme(schemeName, objective, benefits);
  }
  const handleSeven = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleEight = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleNine = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleTen = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleEleven = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleTwelve = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleThirteen = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleForteen = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }
  const handleFifteen = () => {
    let schemeName = 'Pradhan Mantri Fasal Bima Yojana (PMFBY)';
    let objective = 'To provide crop insurance coverage and mitigate the risk of crop losses.';
    let benefits = 'Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.';
    createScheme(schemeName, objective, benefits);
  }

  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload(true);
    navigate('/');
  }
  const handleFarmer = () => {
    navigate('/farmers');
  }

  return (
    <div className='mt-20'>
      <div>
        <header className='text-white bg-slate-700 font-medium fixed top-0 w-full'>
          <nav className='flex justify-between items-center p-5'>
            <div className='flex flex-col text-xs justify-center items-center border  p-1'>
              <span className='block'>MegaProject</span>
              <span className='block'>Farmer's Portal</span>
            </div>
            <ul className='flex space-x-5'>
              <li onClick={handleFarmer} className='cursor-pointer'>
                <p>Home</p>
              </li>
              <li onClick={handleLogout} className='cursor-pointer'>
                <p>Logout</p>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className='px-5 py-7'>
        <h2 className='text-3xl font-medium underline my-7'>Schemes</h2>
        <div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch1} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To provide direct income support to small and marginal farmers.</p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Eligible farmers receive financial assistance of Rs. 6,000 per year in three equal installments.
                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleOne}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch2} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Fasal Bima Yojana (PMFBY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To provide crop insurance coverage and mitigate the risk of crop losses.</p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Insurance coverage against yield losses, prevented sowing, and post-harvest losses. Premiums are subsidized for farmers.
                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleTwo}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch3} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Soil Health Card Scheme</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To assess soil fertility and provide farmers with customized recommendations for balanced fertilization.</p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Soil health cards with nutrient status and recommendations help farmers optimize fertilizer use and improve soil health.
                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleThree}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch4} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Paramparagat Krishi Vikas Yojana (PKVY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To promote organic farming and reduce the use of chemical inputs.
                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Financial support and technical guidance are provided to farmers for adopting organic farming practices.

                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleFour}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch5} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Rashtriya Krishi Vikas Yojana (RKVY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To support holistic agriculture development at the state level.

                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Financial assistance is provided to states for implementing agriculture-related projects and initiatives.

                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleFive}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch6} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>National Agricultural Market (e-NAM) Scheme</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To create an online platform for transparent and efficient agricultural trading.
                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Farmers can sell their produce directly to buyers through e-auctions, ensuring better price realization and reducing intermediaries.



                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleSix}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch7} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Krishi Sinchai Yojana (PMKSY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To promote efficient water use in agriculture through irrigation infrastructure development.

                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Financial assistance is provided for the creation of new irrigation facilities, water storage structures, and micro-irrigation systems.



                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleSeven}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch8} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Kisan Credit Card (PM-KCC)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To provide affordable credit to farmers for agricultural activities.


                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Farmers receive credit cards that enable them to access timely and adequate credit for farming-related expenses.




                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleEight}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch9} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>National Mission for Sustainable Agriculture (NMSA)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To promote sustainable agricultural practices and climate-resilient farming.


                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Financial support is provided for projects focusing on water conservation, soil health, organic farming, and agroforestry.





                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleNine}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch10} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Agriculture Infrastructure Fund (AIF)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To support the creation of post-harvest infrastructure and agri-entrepreneurship


                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Financial assistance is provided for the establishment of cold storage facilities, processing units, and other agri-infrastructure projects.






                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleTen}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch11} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Livestock Development Schemes</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To promote livestock development and enhance animal productivity.



                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p>Financial support, breeding programs, and healthcare services are provided for livestock rearing and improvement.







                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleEleven}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch12} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Kisan Maan-Dhan Yojana (PM-KMY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To provide social security to small and marginal farmers.




                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p> Eligible farmers receive a monthly pension after attaining the age of 60 years.








                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleTwelve}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch13} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Matsya Sampada Yojana (PMMSY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To modernize and promote sustainable fisheries in the country.





                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p> Financial assistance is provided for infrastructure development, technology adoption, and capacity building in the fisheries sector.








                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleThirteen}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch14} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>National Bamboo Mission (NBM)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To promote bamboo cultivation and value addition.






                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p> Financial support, training, and marketing assistance are provided to farmers engaged in bamboo cultivation and related activities.









                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleForteen}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
          <div className="card border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
            <div className="left flex items-center justify-center md:w-1/4  ">
              <img src={sch15} alt="" className='h-28' />
            </div>
            <div className="px-3 middle  md:w-1/2">
              <h3 className='text-xl font-medium py-3'>Pradhan Mantri Van Dhan Yojana (PMVDY)</h3>
              <div className='objective my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Objective:</p>
                </div>
                <div className='w-2/3'>
                  <p>To promote sustainable livelihoods and value addition for forest dwellers.







                  </p>
                </div>
              </div>
              <div className='benefits my-2 flex gap-3 '>
                <div className='w-1/3 '>
                  <p>Benefit:</p>
                </div>
                <div className='w-2/3'>
                  <p> Financial support and capacity building are provided for the establishment of Van Dhan Vikas Kendras for value addition of forest produce.









                  </p>
                </div>
              </div>
            </div>
            <div className="right flex justify-center items-center md:w-1/4  ">
              <button className='block px-4 py-2 hover:bg-red-700 bg-red-600 text-white rounded-md font-medium mx-2 ' onClick={handleFifteen}>Apply</button>
              <button className='block px-4 py-2 hover:bg-orange-700 bg-orange-600 text-white rounded-md font-medium mx-2 '>Read More</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Schemes