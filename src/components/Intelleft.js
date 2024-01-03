import React from 'react'
import intelbottom from '../assets/intelbottom.png'
import inteltotal from '../assets/inteltotal.png'
import vectorsmall from '../assets/vectorsmall.png'
import Innerintel from './Innerintel'
import Intelbottom from './Intelbottom'

function Intelleft() {
    return (
        <div className='text-black w-[989px]'>
            <div className="inteltop text-center border-[6px] border-b-0 border-black">
                <p className='text-[150px] -py-3'> YAKO INTEL</p>
            </div>
            <div className=" intelbottom border-[6px] border-black">
                <div className='flex items-center'>
                    <div className="vector p-4 pr-0 border-b-[6px] border-black w-fit">
                        <img src={vectorsmall} alt="" />
                    </div>
                    <p className='text-2xl p-4'>YAKO....YAKO.....YAKO....</p>
                </div>

                <div className="down p-5">
                    <p className='text-[29px] mb-10 my-[15px]'> The leader of planet SOL is YAKO. After repelling numerous invasions from other intergalactic species as well as increasing the mining, production, and refinement of Solenium, the Borks adopted a new currency, “YAKO tokens” named after their beloved leader. The value of Solenium and YAKO tokens increased tremendously due to the success of the Borks and their leader YAKO.</p>
                    <Innerintel />
                </div>
            </div>
            {/* <img src={intelbottom} alt="" /> */}
            <Intelbottom />
        </div>
    )
}

export default Intelleft