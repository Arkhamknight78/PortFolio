import './index.scss'
import {Link, NavLink }  from 'react-router-dom'

// import LogoSubtitle from '../../../assets/images/logo_sub.png'
import CIcon from '@coreui/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faUpwork } from '@fortawesome/free-brands-svg-icons'
import leetcodeIcon from './leetcodeIcon.png'
import { cibLeetcode } from '@coreui/icons'
const Sidebar=() => {
    return (
        <div className='nav-bar'>
        <Link className = 'nav-bar_logo' to='/'>
        {/* <img src={IMG_3644} alt='logo' /> */}
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
            <NavLink exact='true' activeclassName='active' className="project_link" to='/project'>
            <FontAwesomeIcon icon={faUpwork} color='#4d4d4e' />
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
                    <FontAwesomeIcon icon={faLinkedin} color='#002146' />


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
                 href='https://leetcode.com/u/VinayakS78/'
                >
                    {/* <FontAwesomeIcon icon={} color='#4d4d4e' />
                     */}
                    <img src={leetcodeIcon} 
                    alt='leetcode' 
                    className='leetcodeIcon' 
                    color='#4d4d4e'
                    style={{width: '30px', height: '30px'}}
                    />
                    {/* <CIcon icon={cibLeetcode} color='#4d4d4e' size='lg'/> */}

                </a>
            </li>
            
        </ul>
        </div>
    )
    }   

    export default Sidebar