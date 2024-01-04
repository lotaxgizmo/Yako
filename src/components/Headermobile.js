/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import hamburger from '../assets/hamburger.png'
import menuopen from '../assets/menuopen.svg'
import closehamburger from '../assets/closehamburger.svg'
import yakonormal from '../assets/yakonormal.svg'



function Headermobile() {



    return (
        <div className='lg:hidden fixed z-[200] flex flex-col items-center'>

            <div><img src={hamburger} alt="" className='  w-[70px] z-[200] border-8s mt-2' /></div>
            {/* <div className='relative flex flex-col items-center justify-center text-black'>
                <img src={menuopen} alt="" className='mt-5  ' />
                <div className='absolute top-8'><img src={closehamburger} alt="" className='  w-[60px] z-[200] border-8s mt-2d' /></div>
                <div className='absolute top-24'><img src={yakonormal} alt="" className='  w-[76px] z-[200] border-8s mt-2d' /></div>
                <div className="links flex flex-col absolute bottom-10 border-4d z-40">
                    <a href="#Home" className='md: text-[53px] leading-[60px] py-2 z-40 border-b-2 border-black w-64- text-center'>Home</a>
                    <a href="#About" className='md: text-[53px] leading-[60px] py-2 z-40 border-b-2 border-black w-64- text-center'>About</a>
                    <a href="https://t.me/yakosolana" className='md: text-[53px] leading-[60px] py-2 z-40 border-b-2 border-black w-64- text-center'>Telegram</a>
                    <a href="#Raydium" className='md: text-[53px] leading-[60px] py-2 z-40 border-b-2 border-black w-64- text-center'>Raydium</a>
                </div>
            </div> */}
        </div>
    )
}

export default Headermobile