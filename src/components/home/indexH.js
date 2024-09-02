
import './indexH.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/indexAni';
import Loader from 'react-loaders';
import PortFolio from '../../assets/images/PortFolio.jpg'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const nameArray = [' ', 'V','i', 'n', 'a', 'y', 'a', 'k', ','];
    const jobArray = 
    [
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
                    {/* <img src={V} alt="Developer" /> */}
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22} />
                </h1>

                <h2>
                    <span className='skills'>| C++ | Java | Python | Data Structures | Algorithms | OOPs 
                    <br/>
                    | JavaScript| jQuery | ReactJS | NodeJS | MongoDB | MySQL 
                     
                    <br/>
                     | HTML | CSS  | Git | GitHub  | Netlify | Firebase | OAuth2.0 | RESTful | JSON

                     <br/>


                        <br />
                        <br />
                        I design and code beautifully simple things, and I love what I do.
                    </span>
                </h2>
                {/* <Link to='/contact' className='flat-button'> Contact Me </Link> */}
                <div className='flat-button'> <a href='https://docs.google.com/document/d/1rfu-tJHxOhdfj27PDK8tDnwpW7hYAmRzQ6lFyGyNj6I/edit?usp=sharing' target='_blank' className='button' rel="noreferrer">Resume</a> </div>
            </div>
        </div>
        <div className='img-zone'>
            <img src={PortFolio} alt='logo' />
        </div>
        
        <Loader type='pacman'  />
        </>
    );
}

export default Home;
