import React from 'react'
import imagecenter from '../assets/imagecenter.png'



function Image() {
    return (
        <div className='IMAGE px-10'>
            <img src={imagecenter} alt="" className='mix-blend-screen' />
        </div>
    )
}

export default Image