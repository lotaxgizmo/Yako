/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import alert from '../assets/alert.png'
import buyyako from '../assets/comingsoon.png'
import telegramm from '../assets/telegramm.png'
import yakohero from '../assets/yakohero.png'

function HeroPart() {
    return (
        <div className=" relative flex flex-col items-center h-80">
            <div className='relative w-screen bottom-10'>
                <div className="but absolute top-[10px] z-10">
                    <div className=" btns w-screen flex flex-col items-center">
                        <div className='my-2'><a href="#" target="_blank" rel="noopener noreferrer"><img src={buyyako} alt="" className='w-auto ' /></a></div>
                        <div className='my-2'><a href="https://t.me/yakosolana" target="_blank" rel="noopener noreferrer"><img src={telegramm} alt="" className='w-auto ' /></a></div>
                    </div>
                </div>
                <div className="hidden lg:block absolute yakohero">

                    <img src={yakohero} alt="" className='w-auto ' />
                </div>
            </div>
            <div><img src={alert} alt="" className='relative w-auto top-60' /></div>
        </div>
    )
}

export default HeroPart