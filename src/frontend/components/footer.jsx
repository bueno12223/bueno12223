import React from 'react'
import IGit from '../assets/icons/git'
import IPlatzi from '../assets/icons/platzi'
import IIg from '../assets/icons/ig'
import ITw from '../assets/icons/twitter'
import IIn from '../assets/icons/lkn'
import './styles/footer.scss'
function footer ({ data }) {
  return (
    <footer>
      <p>{data}</p>
      <a href='https://github.com/bueno12223' target='_blank' rel='noopener noreferrer'> <IGit /> </a>
      <a href='https://platzi.com/p/jesber122/' target='_blank' rel='noopener noreferrer'><IPlatzi /></a>
      <a href='https://www.instagram.com/mr.yisus122/' target='_blank' rel='noopener noreferrer'> <IIg /></a>
      <a href='https://twitter.com/jesusadrianberr' target='_blank' rel='noopener noreferrer'> <ITw /></a>
      <a href='https://www.linkedin.com/in/jesus-adri%C3%A1n-berrio-vald%C3%A9s-8156941a2/' target='_blank' rel='noopener noreferrer'> <IIn /></a>
    </footer>
  )
}

export default footer
