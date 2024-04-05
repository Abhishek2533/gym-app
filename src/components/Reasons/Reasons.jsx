import React from 'react'
import './Reasons.css'

import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
    return (
        <div className='reasons' id='reason'>

            <div className="left-side">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" />
                <img src={image3} alt="image3" />
                <img src={image4} alt="image4" />
            </div>

            <div className="right-side">

                <span>Some Reasons</span>

                <div className='heading-reasons'>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>

                <div className='details-reasons'>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>over 140+ expert coaches</span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>train smarter and faster then before</span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={tick} alt="tick" />
                        <span>reliable partners</span>
                    </div>
                </div>

                <span style={{ fontWeight: 'bolder', color: 'darkgray' }}>our partners</span>

                <div className="partners">
                    <img src={nb} alt="nb" />
                    <img src={adidas} alt="adidas" />
                    <img src={nike} alt="nike" />
                </div>

            </div>

        </div>
    )
}

export { Reasons }