import React, { useState } from 'react'
import './Testimonial.css'

import { AnimatePresence, motion } from 'framer-motion';

import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

import image1 from "../../assets/t-image1.png";
import image2 from "../../assets/t-image2.jpg";
import image3 from "../../assets/t-image3.jpg";

const testimonialsData = [
    {
        image: image1,
        review:
            "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
        name: 'MATHEW HENDRICKSON',
        status: 'ENTREPRENEUR'
    },
    {
        image: image2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ',
        name: 'JOHN KEVIN',
        status: 'COACH'
    },
    {
        image: image3,
        review: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem',
        name: 'FRANKLIN',
        status: "CUSTOMER"
    }
];

const Testimonial = () => {

    const [selected, setSelected] = useState(0)
    const totalLength = testimonialsData.length;

    return (
        <div className='testimonial'>

            <AnimatePresence>
                <motion.div
                    className="left-testimonial"
                >
                    <span>Testimonial</span>
                    <span className='stroke-text'>what they</span>
                    <span>say about us</span>
                    <motion.span
                        key={selected}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {testimonialsData[selected].review}
                    </motion.span>
                    <span>
                        <span style={{ color: 'orange' }}>{testimonialsData[selected].name}</span>{" "}
                        - {testimonialsData[selected].status}
                    </span>
                </motion.div>

                <div className="right-testimonial">

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ type: "spring", duration: 2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ type: "spring", duration: 2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    ></motion.div>
                    <motion.img
                        key={selected}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        src={testimonialsData[selected].image} alt="image" />
                    <div className="arrows">
                        <img src={leftArrow} alt="left-arrow"
                            onClick={() => {
                                selected === 0 ? setSelected(totalLength - 1) : setSelected((prev) => prev - 1)
                            }}
                        />
                        <img src={rightArrow} alt="right-arrow"
                            onClick={() => {
                                selected === totalLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                            }}
                        />
                    </div>
                </div>
            </AnimatePresence>

        </div >
    )
}

export default Testimonial;