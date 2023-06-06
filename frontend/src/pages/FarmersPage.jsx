import React, { useEffect, useState } from 'react'
import { FarmersTips, FeaturesHighlight } from '../components'

import { Link, useNavigate } from 'react-router-dom'


const FarmersPage = () => {

  // let location = useLocation();
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

console.log(isLogin)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }
    else {
      setIsLogin(false);
    }
  }, [])


  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload(true);
    navigate('/');
  }









  const handleClick = () => {
    document.getElementById('menu').classList.toggle('translate-x-[1000px]');
  }

  return (
    <div>

      <div>
        <header className='text-white bg-slate-700 font-medium fixed top-0 w-full'>
          <nav className='flex justify-between items-center p-5'>
            <div className='flex flex-col text-xs justify-center items-center border  p-1'>
              <span className='block'>MegaProject</span>
              <span className='block'>Farmer's Portal</span>
            </div>
            <ul className='hidden md:flex space-x-5'>
              <li>
                <Link to={''}>Home</Link>
              </li>
              <li>
                <Link to={'schemes'}>Schemes</Link>
              </li>
              <li>
                <Link to={'applied-schemes'}>Applied Schemes</Link>
              </li>
              <li onClick={handleLogout} className='cursor-pointer'>
                <p>Logout</p>
              </li>
            </ul>


            {/* On small screen devices */}
            <div className="hamburger md:hidden " onClick={handleClick}>
              <div id="bar1" className='w-7 h-1 rounded-md bg-white'></div>
              <div id="bar2" className='w-7 h-1 rounded-md bg-white my-1'></div>
              <div id="bar3" className='w-7 h-1 rounded-md bg-white'></div>
            </div>
            <div id="menu"  className="px-3 md:hidden py-9 h-screen menu transition-all top-0 duration-500 bg-blue-500 text-white absolute left-0 right-0 translate-x-[1000px] w-full ">
              <div className='flex justify-between pb-3 border-b-2 mb-9 items-center '>
                <span>MegaProject</span>
                <div onClick={handleClick}>
                  <div className='w-7 bg-white h-1 rotate-45 rounded-md'></div>
                  <div className='w-7 bg-white h-1 -translate-y-[4px] -rotate-45 rounded-md'></div>
                </div>
              </div>
            <ul className='flex flex-col gap-2 justify-center items-center'>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
              <Link to={''}>Home</Link>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
              <Link to={'schemes'}>Schemes</Link>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
              <Link to={'applied-schemes'}>Applied Schemes</Link>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
              <li onClick={handleLogout} className='cursor-pointer'>
                <p>Logout</p>
              </li>
              </li>
            </ul>
            </div>




          </nav>
        </header>
      </div>


      <div className="mt-32"><div><h1 className="font-semibold text-3xl text-center ">Welcome To Farmer's Portal</h1></div> <FeaturesHighlight /><FarmersTips /></div>

    </div>
  )
}

export default FarmersPage