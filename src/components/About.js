import React from 'react'
import aboutback from '../assets/aboutback.png'
import buyyakoblack from '../assets/buyyakoblack.png'
import eyethingy from '../assets/eyethingy.png'

function About() {
    return (
        <div className='  w-screen bg-s-200/20 px-10 py-20'>
            <div className="back relative">
                <img src={aboutback} alt="" className='w-auto absolute' />
                <div className="maincontent h-[750px] flex flex-col items-center p-20">
                    <div className='bg-green-400d w-full z-20'>
                        <p className='text-[96px]'>In the year 2069...</p>
                        <p className='text-[29px]'> a mostly peaceful extraterrestrial species called the Borks inhabit the planet SOL. They have long prospered on planet SOL due to its rich supply of  Solenium, a powerful resource that can be harnessed for energy, weapons, and among other things a psychedelic compound the likes of which no other planet has seen.  Some say it can rip the space time continuum and that it even slows down time when it is consumed.</p>
                        <div className='flex justify-between'>
                            <div className='py-10'><a href="#" target="_blank" rel="noopener noreferrer"><img src={buyyakoblack} alt="" className='w-auto ' /></a></div>
                            <div><img src={eyethingy} alt="" className='w-auto py-10' /></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About