import React, { useState } from 'react'
import './styles/header.scss'
function Header() {
    const [display, setDisplay ] = useState(false);
    return (
        <header className='header' id='header'>
            <button onClick={() => setDisplay(!display)}><i class="fas fa-bars header-icon"></i></button>
            <img src="https://bridge236.qodeinteractive.com/wp-content/uploads/2018/05/logo.png" alt="logo" className='header-logo'/>
        <ul className='header-list' style={{display: display ? 'block' : 'none'}}>
            <li><a href="#header">Home</a></li>
            <li><a href="#aboutMe">About me</a></li>
            <li><a href="#proyects">Proyects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

           
        </header>
    )
}

export default Header
