/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import yakopicture from '../assets/yakopicture.png'
import yakosecond from '../assets/yakosecond.png'
import guns from '../assets/guns.png'
import buyyakoblack from '../assets/buyyakoblack.png'

function Yakogun() {
    return (
        <div className=" relative flex flex-col items-center h-80.">
            <div className='relative w-screen bottom-10 h-96 '>
                <div className="but absolute top-[70px] z-10 ">
                    <div className=" btns w-screen flex flex-col items-center ">
                        <img src={yakopicture} alt="" className='w-auto my-2 animate-bounce' />
                    </div>
                </div>
                <div className="absolute yakosecond ">

                    <img src={yakosecond} alt="" className='w-auto ' />
                </div>
            </div>

            <div className='animate-pulse'><img src={guns} alt="" /></div>
            <div className=' '><a href="#" target="_blank" rel="noopener noreferrer"><img src={buyyakoblack} alt="" /></a></div>
        </div>
    )
}

export default Yakogun