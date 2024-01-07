import React from 'react'
import header from '../assets/header.png'
import Headerback from '../assets/Headerback.svg'
import Xx from '../assets/Xx.svg'
import Home from '../assets/Home.svg'
import Raydiumm from '../assets/Raydiumm.svg'
import Telegram from '../assets/Telegram.svg'
import yako3 from '../assets/yako3.svg'


function Headerdesktop() {
    return (
        <div className="fixed right-0 z-[200] hidden lg:block">
            <div className='relative w-[400px]'>
                {/* <img src={header} alt="" className='hidden lg:flex fixed w-[300px] lg:w-[400px] z-[200] border-8s right-0' /> */}
                {/* <img src={header} alt="" className='hidden lg:flex fixed w-[300px] lg:w-[400px] z-[200] border-8s right-0s' /> */}

                <img src={Headerback} alt="" className='absolute  w-[400px]' />
                <div className="normenu absolute top-[17px] flex ">
                    <a href="#Home" target="_blank" rel="noopener noreferrer">
                        <img src={Home} alt="" className=' mt-20. w-[93px] ml-[27px]' />
                    </a>

                    <a href="https://x.com/yakosolana" target="_blank" rel="noopener noreferrer">
                        <img src={Xx} alt="" className='w-[93px] mx-[5px]' />
                    </a>
                </div>
                <a href="https://yako.monster" target="_blank" rel="noopener noreferrer">

                    <img src={yako3} alt="" className='absolute top-[10px] right-[19px] w-[77px] z-10' />
                </a>
                <a href="https://t.me/yakosolana" target="_blank" rel="noopener noreferrer">
                    <img src={Telegram} alt="" className='absolute top-[17px] right-[19px] w-[157px]' />
                </a>
                <a href="#Raydium" target="_blank" rel="noopener noreferrer">
                    <img src={Raydiumm} alt="" className='absolute top-[150px] [17px] right-[19px] w-10' />
                </a>

            </div>
        </div>
    )
}

export default Headerdesktop