import './index.scss';
import {Link, NavLink} from 'react-router-dom'
import LogoNB from '../../assets/images/NBcircleWhite.png'
import LogoSubtitle from '../../assets/images/NBnameWhite.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src={LogoNB} alt='logo'/>
            <img className='sub-logo' src={LogoSubtitle} alt='subtitle'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nikolay-bozhkov-213aa9250/'>
                <FontAwesomeIcon icon={faLinkedin} color='#4e4e4d'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/nbzhk'>
                <FontAwesomeIcon icon={faGithub} color='#4e4e4d'/>
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar;