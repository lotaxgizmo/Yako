import React from 'react'
import hamburger from '../assets/hamburger.png'
import Headerdesktop from './Headerdesktop'
import Headermobile from './Headermobile'

function Header() {
    return (
        <>
            <div className="flex justify-center align-middle ">
                <Headerdesktop />
                <Headermobile />

                {/* <img src={hamburger} alt="" className='lg:hidden flex fixed w-[70px] z-[200] border-8s mt-2' /> */}
                {/* <div className='fixed w-screen. flex flex-col items-end  mt-5 px-10 border-8'>
        </div> */}
            </div>
        </>
    )
}

export default Header