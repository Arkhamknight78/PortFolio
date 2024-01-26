import V from '../../assets/images/V.png'
import './indexH.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/indexAni';
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = ['i', 'n', 'a', 'y', 'a', 'k'];
    const jobArray = [
     'A', 
     ' ',
     'W',
     'e',
     'b', 
     ' ', 
     'D', 
     'e', 
     'v', 
     'e', 
     'l', 
     'o', 
     'p', 
     'e', 
     'r'
    ];

    useEffect(() => {
        // Set the timeout
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        // Clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
    }, []);
    
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <img src={V} alt="Developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>

                <h2>
                    <span className='skills'>FrontEnd Developer | React Developer | JavaScript Developer
                        <br />
                        I design and code beautifully simple things, and I love what I do.
                    </span>
                </h2>
                {/* <Link to='/contact' className='flat-button'> Contact Me </Link> */}


            </div>
        </div>
        <Loader type='pacman'  />
        </>
    );
}

export default Home;