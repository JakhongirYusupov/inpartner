import './Header.scss';
import logo from '../../assets/images/logo.svg';
import defaultProfileImg from '../../assets/images/profile-default-image.svg';
import { BiSearch } from 'react-icons/bi';
import { TbMenu } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [activeProfileButton, setactiveProfileButton] = useState(false);
  const [isactiveHamburberBar, setisactiveHamburberBar] = useState(false);
  const [isactiveSearch, setisactiveSearch] = useState(false);
  return (
    <header className='header'>
      <div className="container">
        <div className='header-logo-input-wrapper'>
          <Link to="/" className='header-logo'>
            <img src={logo} alt="inpartner" />
          </Link>
          <form action="" className='header-form'>
            <input type="text" placeholder='Qidirish' />
            <BiSearch className='header-form-search-icon' />
          </form>
        </div>
        <nav className='header-nav'>
          <NavLink style={({ isActive }) => isActive ? { "color": "#FF8040" } : null} to="/elonlar" className='header-nav-item'>E'lonlar</NavLink>
          <NavLink style={({ isActive }) => isActive ? { "color": "#FF8040" } : null} to="/chat" className='header-nav-item'>Chat</NavLink>
          <NavLink style={({ isActive }) => isActive ? { "color": "#FF8040" } : null} to="/elonberish" className='header-nav-item'>E'lon Berish</NavLink>
          <div className='header-profile-wrapper'>
            <div className='header-profile' onClick={() => setactiveProfileButton((e) => e ? false : true)}>
              <img src={defaultProfileImg} alt="Profileimage" />
              <MdOutlineKeyboardArrowDown className='header-profile-arrow-icon' />
            </div>
            {
              activeProfileButton ?
                <>
                  <div className='header-profile-bar'>
                    <div className='header-profile-bar-item'>
                      <span>Muhammadaziz Mo'sinov</span>
                    </div>
                    <div className='header-profile-bar-item' >
                      <span>Profile</span>
                      <span>Sozlamalar</span>
                    </div>
                    <div className='header-profile-bar-item' >
                      <span>Chiqish</span>
                      <RiLogoutBoxRLine className='header-profile-bar-item-close-icon' />
                    </div>
                  </div>
                  <div className='module' onClick={(() => setactiveProfileButton(false))}></div>
                </>
                : null
            }
          </div>
          <div className='header-humburger-button' onClick={(() => setisactiveHamburberBar((e) => e ? false : true))}>
            <TbMenu className='header-humburger-button-icon' />
            {
              isactiveHamburberBar ?
                <>
                  <div className="header-humburger-button-bar">
                    <Link to="/elonlar">E'lonlar</Link>
                    <Link to="/chat">Chat</Link>
                    <span onClick={(() => setisactiveSearch(true))}>Qidirish</span>
                    <Link to="/elonberish">E'lon Berish</Link>
                  </div>
                  <div className="module"></div>
                </>
                : null
            }
          </div>
          {
            isactiveSearch ?
              <div className='header-search-module'>
                <form action="" className='header-search-module-form' onSubmit={(() => setisactiveSearch(false))}>
                  <input type="text" placeholder='Search' required minLength={3} maxLength={50} />
                  <button type='submit'><BiSearch className='header-search-module-form-icon' /></button>
                </form>
              </div>
              : null
          }
        </nav>
      </div>
    </header>
  )
}
