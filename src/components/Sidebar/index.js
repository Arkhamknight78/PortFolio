import './index.scss'
import {Link, NavLink }  from 'react-router-dom'
import V1 from '../../assets/images/V1.png'
// import LogoSubtitle from '../../../assets/images/logo_sub.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import leetcodeIcon from '../../assets/icons/leetcodeIcon.avif'
const Sidebar=() => {
    return (
        <div className='nav-bar'>
        <Link className = 'nav-bar_logo' to='/'>
        <img src={V1} alt='logo' />
        {/* <img className='sub_logo' src={LogoSubtitle} alt='Sub_logo' /> */}
        </Link>
        <nav>
            <NavLink exact='true' activeclassName='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassName='active' className="about_link" to='/about'>
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassName='active' className="skill_link" to='/skills'>
            <FontAwesomeIcon icon={faLaptop} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact='true' activeclassName='active' className="contact_link" to='/contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul className='social'>
            <li>
                <a target='_blank'
                 rel="noreferer noreferrer"
                 href='https://www.linkedin.com/in/vinayak-saxena-a88ba9229/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />

                </a>
            </li>
            <li>
                <a target='_blank'
                 rel="noreferer noreferrer"
                 href='https://github.com/Arkhamknight78'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />

                </a>
            </li>
            <li>
                <a target='_blank'
                 rel="noreferer noreferrer"
                 href='https://github.com/Arkhamknight78'
                >
                    <FontAwesomeIcon icon={leetcodeIcon} color='#4d4d4e' />

                </a>
            </li>
            
        </ul>
        </div>
    )
    }   

    export default Sidebar