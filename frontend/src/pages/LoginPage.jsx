import React from 'react'
import { Outlet } from 'react-router-dom';

const LoginPage = () => {


  const handleSubmit = (e) => {
    console.log('fired');
    e.preventDefault();
  }

  return (
    <div >
      <div >
        <Outlet />
      </div>
    </div>
  )
}

export default LoginPage