/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import spiralbox from '../assets/spiralbox.png'
import blacksidebutton from '../assets/blacksidebutton.png'
function Innerintel() {
    return (
        <div className='flex justify-between  '>
            <div><img src={spiralbox} alt="" /></div>
            <div><a href="#" target="_blank" rel="noopener noreferrer"><img src={blacksidebutton} alt="" /></a></div>
        </div>
    )
}

export default Innerintel