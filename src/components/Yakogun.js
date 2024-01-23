/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import yakopicture from '../assets/yakopicture.png'
import yakosecond from '../assets/yakosecond.png'
import guns from '../assets/guns.png'
import buyyakoblack from '../assets/buyyakoblack.png'

function Yakogun() {
    return (
        <div className=" relative flex flex-col items-center h-80. mt-10c lg:mt-40">
            <div className='relative flex items-center justify-center align-middle w-screen lg:bottom-10 h-72 lg:h-96 '>
                <div className="but absolute top-[70px] z-10 ">
                    <div className=" btns w-screen flex flex-col items-center ">
                        <img src={yakopicture} alt="" className='w-[110px] rotate-[-30deg] lg:w-auto my-2 lg:animate-bounce' />
                    </div>
                </div>
                <div className="absolute yakosecond animate-bounce">

                    <img src={yakosecond} alt="" className='w-auto ' />
                </div>
            </div>

            <div className='animate-pulse mb-10 lg:mb-0'><img src={guns} alt="" /></div>
            <div className=' '><a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=G7ytdz7hHPW4CmFeAqWhhTPj3FMFvWHQWRD1aVEF2M7Q" target="_blank" rel="noopener noreferrer"><img src={buyyakoblack} alt="" /></a></div>
        </div>
    )
}

export default Yakogun