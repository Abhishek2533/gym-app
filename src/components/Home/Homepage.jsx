import React, { useState } from 'react'
import './Home.css'
import Logo from '../../assets/logo.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import Menu from '../../assets/bars.png';

import { motion } from "framer-motion"
import CountUp from 'react-countup';
import { Link } from 'react-scroll';

const Homepage = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const smallDevice = window.innerWidth <= 520 ? true : false;
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className="main" id='home'>

                <div className="blur homepage-blur"></div>
                <div className="left-homepage">

                    <div className='nav'>
                        <img src={Logo} alt="logo" style={{ width: '10rem', height: '3rem' }} />
                        {
                            (mobile === true && openMenu === false) ?
                                (<div className='menu' onClick={() => setOpenMenu(true)}>
                                    <img src={Menu} alt="menu-bar" width={35} height={30} style={{ zIndex:  999 }} />
                                </div>)
                                :
                                (<ul className='list'>
                                    <li>
                                        <Link
                                            onClick={() => setOpenMenu(false)}
                                            to='home'
                                            activeClass='active'
                                            spy={true}
                                            smooth={true}>Home</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setOpenMenu(false)}
                                            to='program'
                                            spy={true}
                                            smooth={true}>Programs</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setOpenMenu(false)}
                                            to='reason'
                                            spy={true}
                                            smooth={true}>Why Us</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setOpenMenu(false)}
                                            to='plan-id'
                                            spy={true}
                                            smooth={true}>Plans</Link>
                                    </li>
                                    <li>
                                        <Link
                                            onClick={() => setOpenMenu(false)}
                                            to='testimonials'
                                            spy={true}
                                            smooth={true}>Testimonials</Link>
                                    </li>
                                </ul>)
                        }
                    </div>

                    <div className="ad-container">
                        <motion.div className='moving-ad-box'
                            initial={{ left: mobile ? (smallDevice? '100px' : '178px') : '238px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ type: 'tween', duration: 3 }}
                        ></motion.div>
                        <span className='ad-text'>The best fitness club in the town</span>
                    </div>

                    <div className="motto">

                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div className="motto-text-below">
                            <span>In here we will help you to shape and build your Ideal body and live up your life to fullest</span>
                        </div>

                    </div>

                    <div className="services">
                        <div>
                            <span><CountUp start={100} end={140} prefix='+' duration={3} enableScrollSpy={true} /></span>
                            <span>expert coaches</span>
                        </div>
                        <div>
                            <span><CountUp start={200} end={978} prefix='+' duration={3} enableScrollSpy={true} /></span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span><CountUp start={2} end={50} prefix='+' duration={3} enableScrollSpy={true} /></span>
                            <span>fitness programs</span>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>

                </div >

                <div className="right-homepage">

                    <button className="btn">Join Now</button>

                    <motion.div className="heart-rate"
                        initial={{ x: 40 }}
                        transition={{ type: "spring", duration: 3 }}
                        whileInView={{ x: 0 }}
                    >
                        <img src={Heart} alt="hear" />
                        <span>Heart Rate</span><span>116 bpm</span>
                    </motion.div>

                    <img src={hero_image} alt="hero-img" className='hero-img' />
                    <motion.img
                        src={hero_image_back}
                        alt="hero-img-back"
                        className='hero-img-back'
                        initial={{ x: 100 }}
                        transition={{ type: "spring", duration: 3 }}
                        whileInView={{ x: 0 }}
                    />

                    <motion.div className="calories"
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ type: "spring", duration: 2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <img src={Calories} alt="calories-img" />
                        <div>
                            <span>Calories Burned</span><span>220 kcal</span>
                        </div>
                    </motion.div>

                </div>

            </div >
        </>
    )
}

export default Homepage;