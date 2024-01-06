/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import aboutback from '../assets/aboutback.png'
import aboutbackmobile from '../assets/aboutbackmobile.png'
import buyyakoblack from '../assets/buyyakoblack.png'
import eyethingy from '../assets/eyethingy.png'

function About() {
    return (
        <div className='ABOUT  w-screen bg-s-200/20 px-0 lg:px-10 py-20'>
            <div className="back relative">
                <img src={aboutback} alt="" className='w-auto absolute hidden lg:flex' />
                <img src={aboutbackmobile} alt="" className='w-auto absolute flex lg:hidden ' />
                <div className="maincontent lg:h-[750px] flex flex-col items-center p-10 pt-20  lg:p-20">
                    <div className='bg-green-400d w-full z-20'>
                        <p className='text-[36px] lg:text-[96px]'>In the year 2069...</p>
                        <p className='text-2xl lg:text-[29px]'> a mostly peaceful extraterrestrial species called the Borks inhabit the planet SOL.
                            <br />
                            <br />
                            They have long prospered on planet SOL due to its rich supply of  Solenium, a powerful resource that can be harnessed for energy, weapons, and among other things a psychedelic compound the likes of which no other planet has seen.
                            <br />
                            <br />
                            Some say it can rip the space time continuum and that it even slows down time when it is consumed.</p>
                        <div className='flex justify-between flex-col lg:flex-row'>
                            <div className='py-3 lg:py-10'><a href="#" target="_blank" rel="noopener noreferrer"><img src={buyyakoblack} alt="" className='w-auto ' /></a></div>
                            <div className='hidden lg:flex'><img src={eyethingy} alt="" className='w-auto py-10' /></div>
                        </div>
                    </div>
                </div>
                <img src={aboutbackmobile} alt="" className='w-auto  flex lg:hidden ' />
            </div>


        </div>
    )
}

export default About