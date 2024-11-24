import './index.scss'
import LogoS from '../../assets/images/m2.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
   faWhatsapp,
   faInstagram
  } from '@fortawesome/free-brands-svg-icons'
const Sidebar=()=>(
    <div className="nav-bar">
        <Link className="logo" to='/'>
        <img src={LogoS} alt ="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="slobadan"/>
        
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            
            </NavLink>
            <NavLink exact="true" activeclassname="active"  className="contact-link"to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            
            </NavLink>
        </nav>
        <ul>
            <li>
                <a taget="_blank" rel='noreferrer' href='https://www.linkedin.com/in/manish-acharya-b62971218/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a taget="_blank" rel='noreferrer' href='https://github.com/22man67hh'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a taget="_blank" rel='noreferrer' href='https://wa.me/9863224162'>
                    <FontAwesomeIcon icon={faWhatsapp} color='#4d4d4e'/>
                </a>
            </li>
            <li>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/acharyamanish945">                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)
export default Sidebar