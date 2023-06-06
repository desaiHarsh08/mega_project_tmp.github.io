import React from 'react'
import { Link } from 'react-router-dom'

const LoginHome = () => {
    return (
        <div className='h-[85vh] py-20 flex gap-3  justify-center items-center '>
            <Link to={'farmer'} className='hover:bg-slate-200'>
                <div className='flex justify-center items-center p-14 shadow-lg border-2 h-[120px] w-[175px] cursor-pointer'>
                    <h1 className='text-2xl font-semibold'>Farmer</h1>
                </div>
            </Link>
        </div>
    )
}

export default LoginHome