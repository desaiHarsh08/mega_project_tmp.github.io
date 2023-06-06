import React, { useEffect, useState } from 'react'
import { Link as LinkRoll } from 'react-scroll'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  // let location = useLocation();
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);



  useEffect(() => {
    if(localStorage.getItem("token")){
      setIsLogin(true);
    }
    else{
      setIsLogin(false);
    }
  }, [])


  const handleLogout = () => {
    localStorage.clear();
    // window.location.reload(true);
    navigate('/');
  }



  
  

  
  

  const handleClick = ()=>{
    document.getElementById('menu').classList.toggle('translate-x-[1000px]');
  }
  return (
    <div className='navbar top-0 fixed z-10 w-full bg-slate-700 text-white p-3'>
      <header>
        <nav className='flex justify-between items-center'>
          <div className="left">
            <div className='flex flex-col text-xs justify-center items-center border  p-1'>
              <span className='block'>MegaProject</span>
              <span className='block'>Farmer's Portal</span>
            </div>
          </div>
          <div className="right">
            <ul className='hidden md:flex gap-2'>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                { <LinkRoll to={'home'} smooth={true} duration={500} offset={0} >
                  Home
                </LinkRoll>}
                {/* {location==='/login' && <Link to={'/'}>Home</Link>} */}
              </li>
              {!isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'about'} smooth={true} duration={500} offset={0} >
                  About
                </LinkRoll>
              </li>:''}
              {!isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'features'} smooth={true} duration={500} offset={0} >
                  Features
                </LinkRoll>
              </li>:''}
              {/* {!isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'schemes'} smooth={true} duration={500} offset={-100} >
                  Schemes
                </LinkRoll>
              </li>:''}  */}
              {!isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'contact'} smooth={true} duration={500} offset={0} >
                  Contact
                </LinkRoll>
              </li>:''}
              {/* {
                isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'schemes'} >
                  Schemes
                </Link>
              </li>:''
              } */}
              {/* {
                isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'applied-schemes'} >
                  Applied Schemes
                </Link>
              </li>:''
              } */}
              {
                !isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'register'} >
                  Register
                </Link>
              </li>:''
              }
              {/* {
                isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'accessories'} >
                  Accessories
                </Link>
              </li>:''
              } */}
              {/* {
                isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'profile'} >
                  Profile
                </Link>
              </li>:''
              } */}
              {!isLogin?<li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <a href={'/login'} >
                  Login
                </a>
              </li>:
              <li onClick={handleLogout} className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
              <span >
                Logout
              </span>
            </li>}
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
                <LinkRoll to={'home'} smooth={true} duration={500} offset={0} >
                  Home
                </LinkRoll>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'about'} smooth={true} duration={500} offset={0} >
                  About
                </LinkRoll>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'features'} smooth={true} duration={500} offset={0} >
                  Features
                </LinkRoll>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'schemes'} smooth={true} duration={500} offset={-100} >
                  Schemes
                </LinkRoll>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <LinkRoll to={'contact'} smooth={true} duration={500} offset={0} >
                  Contact
                </LinkRoll>
              </li>
              <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'/login'} >
                  Login
                </Link>
              </li>
              {/* {location ==='http://localhost:3000/farmers' && <li className='hover:underline hover:underline-offset-4 cursor-pointer m-1 '>
                <Link to={'/login'} >
                  Cart
                </Link>
              </li>} */}
            </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar