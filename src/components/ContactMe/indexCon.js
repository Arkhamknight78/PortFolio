import { useState, useEffect } from 'react';
import '../ContactMe/indexCon.scss';
import AnimatedLetters from '../AnimatedLetters/indexAni';
import Loader from 'react-loaders';
import email_gif_1200 from '../../assets/images/email_gif_1200.gif';

const About = () => {
    const [letterClass, setletterClass] = useState('text-animate');

    useEffect(() => {
        // Set the timeout
        const timeoutId = setTimeout(() => {
            setletterClass('text-animate-hover');
        }, 3000);

        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>

                <h1>
                    <u><AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15} />
                    </u>

                </h1>
                <p>I'm a Delhi-based web developer. If you have a concept but lack the technical know-how to bring it to life, I've got you covered. I specialize in crafting stunning web applications, assisting in business growth, designing landing pages, and creating personalized portfolio websites for your projects. Let me transform your ideas into reality. </p>
            <p>
               
               <div className='flat-button'>
                <a href="mailto:vinsxn02@gmail.com" className="email">Contact me via email</a> 
                </div> 
            </p>


            </div>
            <img src={email_gif_1200} alt='email' className='img' />


        </div>
       <Loader type='pacman' />
        </>
    )
}

export default About;