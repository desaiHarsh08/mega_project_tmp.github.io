import React from 'react'
import dap1 from '../assets/dap.jpeg'
import sufla from '../assets/sufla.jpeg'
import gromore from '../assets/gromore.jpeg'
import gromore1 from '../assets/Gromore1.jpeg'
import trishul from '../assets/trishul.jpeg'
import ujwala from '../assets/ujwala.jpeg'
import shrilaxmi from '../assets/shrilaxmi.jpeg'
import annadata from '../assets/annadata.jpeg'
import navratna from '../assets/navratna.jpeg'
import roko from '../assets/roko.jpeg'
import profex from '../assets/profex.jpeg'
import ferterra from '../assets/ferterra.jpeg'
import willoxam from '../assets/willoxam.jpeg'
import award from '../assets/award.jpeg'
import maiden from '../assets/maiden.jpeg'
import willicon from '../assets/willicon.jpeg'
import willbreak from '../assets/willbreak.jpeg'
import coragen from '../assets/coragen.jpeg'

const CP = () => {
  return (
    <div className='p-7'>
      <h1 className='font-medium text-3xl my-7 mb-20 underline  '>Price List As Per Government</h1>

      <h2 className='font-medium text-2xl text-center my-7 mb-20 underline  '>Fertilizers</h2>
      <div className='flex justify-center gap-20'>
        <div className="card border-2 ring-2 p-2">
          <div>
            <img src={dap1} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>DAP</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,350</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={sufla} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Sufla 15 15 15</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,470</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={gromore} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Gromore 20 20 0 13</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,250</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={gromore1} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Gromore 24 24 0</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,600</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={trishul} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Trishul 18 18 10</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,050</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-20 my-7'>
        <div className="card border-2 ring-2 p-2">
          <div>
            <img src={ujwala} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Ujwala Urea</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 266</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={shrilaxmi} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Shri Laxmi 18 18 10</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,110</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={annadata} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Annadata 20 20 0 13</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,250</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={navratna} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Navratna 20 20 0 13</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={trishul} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Potash </div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 600 </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <h2 className='font-medium text-2xl text-center my-20 underline  '>Pesticides</h2>
      <div className='flex justify-center gap-20 my-7'>
        <div className="card border-2 ring-2 p-2">
          <div>
            <img src={roko} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Roko Powder</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 300 (250gm)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={profex} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Profex Super </div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 300 (250gm)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={ferterra} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Ferterra</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 750(4kg)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={willoxam} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Willoxam</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 600 (500ml)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={willoxam} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Willoxam</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,150 (1L)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-20 my-7'>
        <div className="card border-2 ring-2 p-2">
          <div>
            <img src={award} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Award</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 600 (1L)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={maiden} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Maiden </div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 500 (250gm)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={willicon} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Willicon</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 100(50ml)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={willbreak} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Willbreak</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 300 (500ml)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card border-2 ring-2 p-2">
          <div className='flex justify-center items-center'>
            <img src={coragen} alt="" className='h-32' />
          </div>
          <div>
            <div className="row">
              <div className='flex justify-center'>Coragen</div>
              <div className='flex gap-3'>
                <p className="text-center">Price:</p>
                <p className="text-center">Rs 1,800 (150ml)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CP