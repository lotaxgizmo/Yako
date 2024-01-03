import React from 'react'
import header from '../assets/header.png'

function Header() {
    return (
        <>
            <img src={header} alt="" className='fixed w-[400px] z-[200] border-8s right-0' />
            {/* <div className='fixed w-screen. flex flex-col items-end  mt-5 px-10 border-8'>
        </div> */}
        </>
    )
}

export default Header