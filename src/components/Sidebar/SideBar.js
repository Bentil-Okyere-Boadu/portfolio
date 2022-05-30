import React from 'react'
import './SideBar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../assets/images/logo-B.svg'
import LogoFull from '../../assets/images/logoFULL.png'


const SideBar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={Logo} alt='logo'/>
            <img className='sub-logo' src={LogoFull} alt='bentil'/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassName="active" to='/'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact='true' activeclassName="active" className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact='true' activeclassName="active" className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target='_blank'
                rel="noreferrer"
                href='https://www.linkedin.com/in/bentil-okyere-boadu/'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                target='_blank'
                rel="noreferrer"
                href='https://www.linkedin.com/in/bentil-okyere-boadu/'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            {/* <li>
                <a
                target='_blank'
                rel="noreferrer"
                href='https://www.linkedin.com/in/bentil-okyere-boadu/'
                >
                    <FontAwesomeIcon icon={faMailchimp} color='#4d4d4e'/>
                </a>
            </li> */}
        </ul>
    </div>
  )
}

export default SideBar