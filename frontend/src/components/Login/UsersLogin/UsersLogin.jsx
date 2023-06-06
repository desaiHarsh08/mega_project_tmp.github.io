import React, { useState } from 'react'
import loginGif from '../../../assets/loginGif.gif'
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Spin from '../../spin';

const host = "http://localhost:5000";

const UsersLogin = () => {

  const [ loadingAnimation, setLoadingAnimation ] = useState(false);

  let navigate = useNavigate();

    
    // const host = "http://localhost:5000";
    console.log(host, "process ", process.env.REACT_APP_BASE_URL )

    const [credentials, setCredentials] = useState({ email: "", password: "" })


    const handleToken = async (credentialResponse) => {
      setLoadingAnimation(true);
      var token = credentialResponse.credential;
      var decoded = jwt_decode(token);
      const response = await fetch(`${host}/api/auth/login-using-auth-token`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json',
              'auth-token': token
          },
          body: JSON.stringify({ email: decoded.email, isEmailVerified: decoded.email_verified })
      });
      const json = await response.json()
      // // console.log(json);
      if (json.success) {
          // Save the authToken and redirect
          localStorage.setItem('token', json.authToken);
          localStorage.setItem('userImg', decoded.picture);
          localStorage.setItem('name', decoded.name);



          // window.location.reload(true);



          // navigate('/users');
          window.location.href = '/farmers';
      }
      else {
          alert("Invalid credentials!");
          setLoadingAnimation(false);
      }

  }


  const handleSubmit = async (e) => {
    console.log('fired');
    e.preventDefault();
    setLoadingAnimation(true);
        console.log(credentials)
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        
        const json = await response.json()
        // console.log(json);
        if (json.success) {
            // Save the authToken and redirect

            localStorage.setItem('token', json.authToken);
            localStorage.setItem('name', json.name);
            localStorage.setItem('email', json.email);
            localStorage.setItem('firstCharacter', json.firstCharacter);
            // navigate('/users');
            window.location.href = '/users';
            
        }
        else {
            alert("Invalid credentials!");
            setLoadingAnimation(false);
        }

  }
  

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
}

  return (
    <div>
      {loadingAnimation?<Spin />:''}
      <div className='login-container h-[100vh] flex flex-col md:flex-row'>
        <div className="left py-7  w-full  md:w-1/3  flex flex-col items-center justify-center bg-[#f0f8ff]" >
          <h1 className='text-2xl my-2 text- white font-semibold text-center '>One of us?</h1>
          <p className='text-whit e font-semibold text-center my-5 px-5 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod voluptate aut fugiat.</p>
          <img src={loginGif} alt='loginImg' className='w-40 sm:w-56 md:w-96 my-7 sm:my-20 hover:scale-125 transition-all duration-300 ' />
        </div>
        <div className="right w-full  md:w-2/3 h-full bg-slate-300 flex justify-center items-center">
          <div className='bg-white w-full h-full md:h-auto  md:w-2/3 lg:w-1/2 px-1  md:px-4 py-7 sm:py-2 border-2 shadow-lg flex flex-col gap-3  '>
            <h2 className='text-3xl font-medium text-center md:mt-7 '>Sign in</h2>
            <p className='text-center text-xl '>Happy to see you again!</p>
            <form onSubmit={handleSubmit} method='POST' className='w-full '>
              <div className='flex flex-col gap-2 px-4 py-2 '>
                <label htmlFor="email">Email Address</label>
                <div className='w-full flex '>
                  <div className='bg-slate-200 p-1 border-2 border-transparent px-2 justify-center items-center inline-flex '>
                    <MailOutlineIcon />
                  </div>
                  <input type="email" name="email" id="email" value={credentials.email} onChange={handleOnChange} className='border-slate-300 border px-4 py-2 w-full ' required />
                </div>
              </div>
              <div className='flex flex-col gap-2 px-4 py-2 '>
                <label htmlFor="email">Password</label>
                <div className='w-full flex '>
                  <div className='bg-slate-200 p-1 border-2 border-transparent px-2 justify-center items-center inline-flex'>
                    <LockOpenIcon />
                  </div>
                  <input type={'password'} value={credentials.password} onChange={handleOnChange} name='password' id='password' className='border-slate-300 border px-4 py-2 w-full ' required />
                </div>
              </div>
              <div className='flex flex-col gap-2 px-4 py-2 md:my-7 '>
                <button type='submit' className='px-4 py-2 border-2 border-transparent text-white bg-blue-500 rounded-md'>Sign in</button>

              </div>
            </form>

            <div className='pb-7 space-y-7'>
                            <p className='text-center my-3'>Or continue with</p>
                            <ul className='flex justify-center items-center flex-col space-x-7'>
                                <li data-ux_mode="redirect">

                                    <GoogleLogin 
                                        
                                        onSuccess={credentialResponse => {
                                            // // console.log("google:", credentialResponse.credential);
                                            handleToken(credentialResponse);
                                            
                                        }}
                                        onError={() => {
                                            console.log('Login Failed');
                                        }}
                                    />

                                </li>
                            </ul>
                        </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default UsersLogin