/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import never from '../assets/never.png'
import goggles from '../assets/goggles.png'
import leftbutton from '../assets/leftbutton.png'
import rightbutton from '../assets/rightbutton.png'

function Buy() {
    return (
        <div className='px-10 flex flex-col items-center py-20'>
            <div className="imgs flex justify-between items-center">
                <div><a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=G7ytdz7hHPW4CmFeAqWhhTPj3FMFvWHQWRD1aVEF2M7Q" target="_blank" rel="noopener noreferrer">
                    <img src={leftbutton} alt="" className='w-auto' />
                </a></div>
                <div><img src={goggles} alt="" className='w-auto' /></div>
                <div><a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=G7ytdz7hHPW4CmFeAqWhhTPj3FMFvWHQWRD1aVEF2M7Q" target="_blank" rel="noopener noreferrer">
                    <img src={rightbutton} alt="" className='w-auto' />
                </a></div>
            </div>
            <img src={never} alt="" className='w-[1100px] py-10' />
        </div>
    )
}

export default Buy