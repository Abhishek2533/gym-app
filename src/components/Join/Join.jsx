import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Join.css'

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_rc9xdar', 'template_ffgmtl8', form.current, {
                publicKey: '4ZfCYolUWTBfhYV40',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className='join' id='join-us'>
            <div className='left-join'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'> WITH US?</span>
                </div>
            </div>

            <div className='right-join'>
                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user-email' placeholder='Enter your email' />
                    <button className="btn join-btn">Join Now</button>
                </form>
            </div>
        </div>
    )
}

export default Join