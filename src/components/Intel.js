/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import inteltop from '../assets/inteltop.png'
import pump from '../assets/pump.png'
import binaryright from '../assets/binaryright.png'
import buyyako from '../assets/buyyako.png'
import Intelleft from './Intelleft'

function Intel() {
    return (
        <div className='bg-[#ABF13C] px-10 py-6 flex flex-col items-center'>
            <div><img src={inteltop} alt="" /></div>
            <div className='border-2nil border-red-800nil w-full flex justify-between'>
                <div className='border-4nil border-blue-700nil w-4/6. flex flex-col pr-5'>

                    <Intelleft />
                </div>
                <div className='border-4nil border-pink-900nil w-fitc flex flex-col self-endx'>
                    <div><img src={binaryright} alt="" className='mb-10' /></div>
                    <div><img src={pump} alt="" className='' /></div>

                </div>

            </div>
            <div className="box border-[6px] border-black w-full h-14 my-8">

            </div>
            <div><a href="#" target="_blank" rel="noopener noreferrer">
                <img src={buyyako} alt="" />
            </a></div>
        </div>
    )
}

export default Intel