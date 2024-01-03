/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import aboutback2 from '../assets/aboutback2.png'
import buyyako from '../assets/buyyako.png'
import eyethingy from '../assets/eyethingy.png'

function Summary() {
    return (
        <div className='  w-screen bg-s-200/20 px-10 py-20 text-black'>
            <div className="back relative">
                <img src={aboutback2} alt="" className='w-auto absolute' />
                <div className="maincontent h-[750px] flex flex-col items-center p-20 ">
                    <div className='bg-green-400d w-full z-20'>
                        <p className='text-[96px]'>YAKO</p>
                        <p className='text-[29px]'>and a large part of his army set course for planet ETH, to take the fight back to Evil Vitalik and overtake the galactic leader’s reign once and for all… </p>
                        <div className='flex justify-between'>
                            <div className='py-10'>
                                <a href="#" target="_blank" rel="noopener noreferrer"><img src={buyyako} alt="" className='w-auto ' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Summary