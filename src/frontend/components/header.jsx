import React, { useState } from 'react'
import './styles/header.scss'
function Header() {
    const [display, setDisplay ] = useState(false);
    return (
        <header className='header'>
            <button onClick={() => setDisplay(!display)}><i class="fas fa-bars header-icon"></i></button>
            <img src="https://bridge236.qodeinteractive.com/wp-content/uploads/2018/05/logo.png" alt="logo" className='hero'/>
        <ul className='header-list' style={{display: display ? 'block' : 'none'}}>
            <li>Home</li>
            <li>Proyects</li>
            <li>About me</li>
            <li>Contact</li>
        </ul>

           
        </header>
    )
}

export default Header
