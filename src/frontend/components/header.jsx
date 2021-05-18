import React, { useState } from 'react'
import Jesus from '../assets/images/jesus.svg'
import './styles/header.scss'
function Header () {
  const [display, setDisplay] = useState(false)
  return (
    <header className='header' id='header'>
      <button onClick={() => setDisplay(!display)}><i className='fas fa-bars header-icon' /></button>
      <img src={Jesus} alt='logo' className='header-logo' />
      <ul className='header-list' style={{ display: display ? 'block' : 'none' }}>
        <li><a href='#header'>Home</a></li>
        <li><a href='#aboutMe'>About me</a></li>
        <li><a href='#proyects'>Proyects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    </header>
  )
}

export default Header
