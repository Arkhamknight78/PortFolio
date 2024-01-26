import { useState, useEffect } from 'react';
import '../About/indexAb.scss';
import AnimatedLetters from '../AnimatedLetters/indexAni';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
// import tailwind-css-svgrepo-compare from '../../assets/icons/tailwind-css-svgrepo-compare.svg';
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
        <Loader type='cube-transition' />
        <div className="container about-page">
            <div className='text-zone'>

                <h1>
                    <u><AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15} />
                    </u>
                </h1>
                <p> I'm a very ambitious Full stack Developer looking for a role in the IT industry
                    with opportunity to learn and grow. I have a passion for learning and developing new skills.
                </p>
                <p>I'm confident, naturally curious, and perpetually on an improvement stride.</p>


            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact} size='4x' color='#74C0FC' />

                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} size='4x' color='#f0870f' />

                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3Alt} size='4x' color='#2307ab' />

                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faGitAlt} size='4x' color='#DD0101' />

                    </div>
                    <div className='face6'>
                        <svg height="65px" 
                        width="65px" 
                        viewBox="0 -51 256 256" 
                        version="1.1" xmlns="http://www.w3.org/2000/svg"
                        transform='rotate(90)'
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            preserveAspectRatio="xMidYMid"
                            fill="#000000"
                            stroke="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <defs>
                                    <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1">
                                        <stop stopColor="#2298BD" offset="0%"></stop>
                                        <stop stopColor="#0ED7B5" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <g>
                                    <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" fill="url(#linearGradient-1)"></path>
                                </g>
                            </g>
                        </svg>


                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} size='4x' color='#FFD43D' />

                    </div>
                </div>

            </div>


        </div>
       
        </>
    )
}

export default About;