import React from 'react'
import header from '../assets/header.png'
import hamburger from '../assets/hamburger.png'

function Header() {
    return (
        <>
            <div className="flex justify-center align-middle ">
                <img src={header} alt="" className='hidden lg:flex fixed w-[300px] lg:w-[400px] z-[200] border-8s right-0' />
                <img src={hamburger} alt="" className='lg:hidden flex fixed w-[70px] z-[200] border-8s ' />
                {/* <div className='fixed w-screen. flex flex-col items-end  mt-5 px-10 border-8'>
        </div> */}
            </div>
        </>
    )
}

export default Header