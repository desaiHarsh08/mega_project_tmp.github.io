import React from 'react'

const Help = () => {
    return (
        <div>
            <h1 className='text-3xl text-center underline font-medium my-7'>Help</h1>
            <div className="flex justify-center gap-7 items-center p-7">
                <div className='border ring-2 p-2 '>
                    <h2 className='text-xl font-medium text-center mx-2'>Agriculture officer</h2>
                    <p className='text-center'>Ajay Jambulkar</p>
                    <p className='text-center'>7507607902</p>
                </div>
                <div className='border ring-2 p-2 mx-2'>
                    <h2 className='text-xl font-medium text-center'>Agriculture officer</h2>
                    <p className='text-center'>Yograj Gajbhiye</p>
                    <p className='text-center'>8888653526</p>
                </div>
            </div>
        </div>
    )
}

export default Help