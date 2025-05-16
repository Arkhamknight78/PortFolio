import { useState, useEffect } from 'react';
import '../Skills/indexSk.scss';
import AnimatedLetters from '../AnimatedLetters/indexAni';
import Loader from 'react-loaders';

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
            <div className="container skill-page">
                <div className='text-zone'>

                    <h1>
                        <u><AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', 'A', 'n', 'd', ' ', 'T', 'e', 'c', 'h', 'n', 'o', 'l', 'o', 'g', 'i', 'e', 's']}
                            idx={15} />
                        </u>
                    </h1>
                    <div className='paras'>
                    <p> <u><span>Technologies</span></u>
                    <br />
                        - <span className='techname'>React:</span> Proficient in developing responsive, component-based user interfaces.
                        <br />
                           
                    {/* </p> */}
                    {/* <p> <u><span>Backend Technologies</span></u> */}
                    {/* <br /> */}
                        - <span className='techname' >Node & Express:</span> Experienced in building scalable server-side applications and RESTful APIs.
                        <br />
                        - <span className='techname' >SpringBoot:</span>  Skilled in creating secure CRUD applications and microservices, with integration of MongoDB.
                        <br />
                        - <span className='techname'>Database:</span>  Comfortable with both relational <span className='techname'>(MySQL)</span> and NoSQL databases <span className='techname'>(MongoDB)</span>.
                        <br />
                        
                        {/* - <span className='techname'>OAuth2.0:</span> Experience in implementing OAuth2.0 for authentication and authorization. */}
                    </p>
                    <p>
                        <u><span>Programming Languages</span></u>
                        <br />
                        - <span className='techname'>C++:</span>  Strong command of data structures, algorithms, and competitive programming.
                        <br />
                        - <span className='techname'>Java:</span>Proficient in object-oriented programming; experienced with Java Collections, Java 8 features, and Spring Boot-based development.
                        <br />
                         - <span className='techname'>JavaScript:</span> Deep understanding of vanilla JavaScript and modern ES6+ syntax and paradigms.
                        <br />
                        
                        
                    </p>
                    <p>
                        <u><span>Version Control</span></u>
                        <br />
                        - <span className='techname'>Git:</span> Skilled in using Git for efficient version control and collaborative workflows.
                        <br />
                        - <span className='techname'>GitHub:</span>  Proficient in managing repositories, handling pull requests, and coordinating team contributions.
                        <br />
                    </p>


                    {/* <p>
                        <span> Tools & Technologies</span>
                        - VS Code: Extensive experience using Visual Studio Code for development.
                        - Command Line: Comfortable working with the command line interface.
                        - Netlify: Experience in deploying web applications on Netlify.
                    </p>                     */}
                    {/* <p>
                        <span>Continuous Learning</span>
                        - Online Courses: Regularly updating skills through online platforms like Coursera and Udemy.
                        - Books: Reading books on programming and technology.
                    </p> */}
                    </div>

                </div>




            </div>

        </>
    )
}

export default About;