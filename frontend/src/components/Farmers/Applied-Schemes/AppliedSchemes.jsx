import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-scroll'
// import sch1 from '../../../assets/sch1.jpg'
// import sch2 from '../../../assets/sch2.jpg'



const AppliedSchemes = () => {
  const host = "http://localhost:5000";

  const schemesInitial = {};

      const [schemes, setSchemes] = useState(schemesInitial)


      //   Get schemes
    const getSchemes = async ()=>{
        // API Call
        const res = await fetch(`${host}/api/schemes/fetchallscheme`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await res.json();
        // console.log(json)
        setSchemes(json);
        // return schemes;
    }

  const navigate = useNavigate();
var arr = [];
  const handleClick = () => {
    // alert("Applied...!");
    setSchemes(getSchemes());
    console.log(schemes);
    arr = schemes;
    console.log(arr);
    let container = document.getElementById('container');
    if(container.innerHTML===''){

    
    for(let i = 0; i < arr.length; i++){
      
      container.innerHTML += `
      <div class="card  border my-3 flex flex-col md:flex-row gap-3 ring-2 p-1">
      <div class="left flex items-center justify-center md:w-1/4  ">
        <img src={sch1} alt="" className='h-28' />
      </div>
      <div class="px-3 middle  md:w-1/2">
        <h3 class='text-xl font-medium py-3'>`+arr[i].schemeName + `</h3>
        <div class='objective my-2 flex gap-3 '>
          <div class='w-1/3 '>
            <p>Objective:</p>
          </div>
          <div class='w-2/3'>
            <p>`+arr[i].objective + `</p>
          </div>
        </div>
        <div class='benefits my-2 flex gap-3 '>
          <div class='w-1/3 '>
            <p>Benefit:</p>
          </div>
          <div class='w-2/3'>
            <p>` + arr[i].benefits+ `
            </p>
          </div>
        </div>
      </div>
     
    </div>
      `;
    }
  }
    let cards = document.querySelectorAll('.card');
    console.log("cards"+cards);
    for (let index = 0; index < cards.length; index++) {
      cards[index].classList.add('border-2');
      
    }
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
    <div>
      <button className='my-20 px-4 py-2 bg-blue-500 text-white rounded-md font-medium' onClick={handleClick}>
        View AppliedSchemes
        </button> 
        {/* {
          arr.map((ele)=>{
            return ele
          })
        } */}

        
      <div>
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
      </div>

      <div className='my-20 p-5'>
        <h2 className='text-3xl font-medium underline mb-20'>Applied Schemes</h2>
        <div className='container' id='container'>

        </div>

{/* 
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
            
          </div> */}
      </div>
    </div>
  )
}

export default AppliedSchemes