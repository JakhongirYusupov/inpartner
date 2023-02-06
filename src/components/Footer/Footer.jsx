import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <Link to="/" className='footer-logo'>
          <img src={logo} alt="inpartner" />
        </Link>
        <span>© 2022 Inpartner. All rights reserved.</span>
      </div>
    </div>
  )
}
