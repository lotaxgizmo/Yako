import React from 'react'
import HeroPart from './HeroPart'
import solray from '../assets/solray.png'
import hero from '../assets/hero.png'
import leftback from '../assets/leftback.png'
import infinity from '../assets/infinity.png'
import yakohero from '../assets/yakohero.png'

function Hero() {
    return (
        <div className='flex flex-col justify-center align-middle items-center dbg-red-200 relative '>
            <div className="mainhero flex w-full justify-between align-middle items-center px-10 relative .border-8 mt-5
            flex-col lg:flex-row">

                <div className='self-start'><img src={leftback} alt="" className='w-[200px] hidden lg:flex' /></div>


                <div className='self-center z-10'><img src={hero} alt="" className='w-[450px] my-10 lg:my-0' /></div>
                <div className="lg:hidden block absolute yakohero">

                    <img src={yakohero} alt="" className='w-auto ' />
                </div>
                <div className='self-center lg:self-end relative bottom-[50px]'><img src={infinity} alt="" className='w-32 lg:w-auto' /></div>

            </div>
            <div className='px-10'><img src={solray} alt="" className='relative bottom-10' /></div>
            <HeroPart />
        </div>
    )
}

export default Hero