import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaInstagram } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { SiPlatzi } from 'react-icons/si'
import './styles/footer.scss'
function footer () {
  return (
    <footer>
      <p>Contact whit me here</p>
      <a href='https://github.com/bueno12223'> <AiFillGithub /> </a>
      <a href='https://platzi.com/p/jesber122/'><SiPlatzi /></a>
      <a href='https://www.instagram.com/mr.yisus122/'> <FaInstagram /></a>
      <a href='https://twitter.com/jesusadrianberr'> <GrTwitter /></a>
      <a href='https://www.linkedin.com/in/jesus-adri%C3%A1n-berrio-vald%C3%A9s-8156941a2/'> <AiFillLinkedin /></a>
    </footer>
  )
}

export default footer
