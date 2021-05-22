import React, { useState } from 'react'
import Jesus from '../assets/images/jesus.svg'
import Imenu from '../assets/icons/menu'
import './styles/header.scss'
function Header ({ setLenguje, lenguaje, data }) {
  const [display, setDisplay] = useState(false)

  return (
    <header className='header' id='header'>
      <button onClick={() => setDisplay(!display)}> <Imenu className='header-icon' /></button>
      <img src={Jesus} alt='logo' className='header-logo' />
      <ul className='header-list' style={{ display: display ? 'block' : 'none' }}>
        {data.map((e, idx) => <li key={e}><a href={`#${idx}`}>{e}</a></li>)}
        <li onClick={(e) => setLenguje(!lenguaje)}><img src={`https://flagcdn.com/${lenguaje ? 'gb' : 'es'}.svg`} alt='English' /></li>
      </ul>

    </header>
  )
}

export default Header
