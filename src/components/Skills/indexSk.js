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
                            strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', 'S', 'e', 't']}
                            idx={15} />
                        </u>
                    </h1>
                    <div className='paras'>
                    <p> <u><span>Frontend Technologies</span></u>
                    <br />
                        - <span className='techname'>HTML/CSS:</span> Proficient in creating responsive and visually appealing web pages using HTML5 and CSS3.
                        <br />
                            - <span className='techname'>JavaScript:</span> Strong understanding of vanilla JavaScript and experience with modern frameworks such as React.js.
                            <br />
                    </p>
                    <p> <u><span>Backend Technologies</span></u>
                    <br />
                        - <span className='techname' >Node.js:</span> Experience in building server-side applications using Node.js and Express.js.
                        <br />
                        - <span className='techname'>Database:</span> Familiarity with relational databases <span className='techname'>(MySQL)</span> and
                        NoSQL databases <span className='techname'>(MongoDB)</span>.
                        <br />
                        
                        - <span className='techname'>OAuth2.0:</span> Experience in implementing OAuth2.0 for authentication and authorization.
                    </p>
                    <p>
                        <u><span>Programming Languages</span></u>
                        <br />
                        - <span className='techname'>Java:</span>Object Oriented Programming with Java.
                        <br />
                        
                        - <span className='techname'>C++/Java:</span> Solving Data-Structures and Algorithm with C++ 
                        <br />
                    </p>
                    <p>
                        <u><span>Version Control</span></u>
                        <br />
                        - <span className='techname'>Git:</span> Proficient in using Git for version control and collaborating on projects.
                        <br />
                        - <span className='techname'>GitHub:</span> Experience in using GitHub for hosting and managing repositories.
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