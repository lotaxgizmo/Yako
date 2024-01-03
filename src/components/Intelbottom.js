import React from 'react'
import downbutton from '../assets/downbutton.png'
import stripes from '../assets/stripes.png'
import donout from '../assets/donout.png'

function intelbottom() {
    return (
        <div className='border-[6px] border-black  flex flex-col lg:flex-row justify-between mt-10'>
            <div className="textboxe lg:w-[500px] p-2 flex flex-col-reverse lg:flex-col">
                <p className='text-[18px]'> Unfortunately, with great success comes great competition, and the leader of the nearby planet ETH, Evil Vitalik began to take notice. In a fit of jealous rage Evil Vitalik used a powerful energy weapon to destroy all of planet SOL, but not before YAKO and what was left of his Bork army boarded their escape pods with the Solenium and YAKO tokens, hiding them on an undisclosed planet.</p>
                <div className='m-[-25px]'><img src={donout} alt="" className=' m-4 lg:m-0 mix-blend-difference animate-spinn' /></div>
            </div>
            <div><img src={stripes} alt="" className='hidden lg:flex' /></div>
            <div className='p-2'><img src={downbutton} alt="" /></div>
        </div>
    )
}

export default intelbottom