import React from 'react'
import { AiFillGithub, AiFillApi } from 'react-icons/ai'
import { SiJavascript, SiHtml5, SiCss3, SiSass, SiWebpack, SiMongodb, SiNpm, SiRedux } from 'react-icons/si'
import { DiReact, DiJavascript1 } from 'react-icons/di'
import { GrNode } from 'react-icons/gr'
import { HiServer } from 'react-icons/hi'
import { GiSecurityGate } from 'react-icons/gi'
import { RiLockPasswordFill } from 'react-icons/ri'
import Numbers from './numbers'
import js from '../assets/images/js.png'
import is from '../assets/images/is.png'
import wa from '../assets/images/wa.png'
import git from '../assets/images/git.png'
import './styles/aboutMe.scss'
const moment = require('moment')
function aboutMe () {
  const given = moment('2020-12-10', 'YYYY-MM-DD')
  const current = moment().startOf('day')
  const days = moment.duration(given.diff(current)).asDays() * -1

  return (
    <article className='about' id='aboutMe'>
      <h2 className='about-title'>{'<About me>'}</h2>
      <section className='about-me'>
        <Numbers number='600' description='hours experience' counter={6} />
        <Numbers number={days.toString()} description='days since i start' counter={15} />
        <Numbers number='137' description='commits' counter={13} />
        <Numbers number='41' description='programming courses pass' counter={4} />
      </section>
      <section className='about-frameworks'>
        <h3 className='about-frameworks-title'>My frameworks</h3>
        <ul className='about-frameworks-list'>
          <li>Rect.js <DiReact /></li>
          <li>javaScript <SiJavascript /></li>
          <li>Git<AiFillGithub /></li>
          <li>HTML <SiHtml5 /></li>
          <li>CSS <SiCss3 /></li>
          <li>Sass<SiSass /></li>
          <li>API REST <AiFillApi /></li>
          <li>Webpack <SiWebpack /></li>
          <li>Node.js <GrNode /></li>
          <li>Express.js <HiServer /></li>
          <li>MongoDB <SiMongodb /></li>
          <li>Oauth <GiSecurityGate /></li>
          <li>Vanilla JS <DiJavascript1 /></li>
          <li>NPM <SiNpm /></li>
          <li>redux <SiRedux /></li>
        </ul>
      </section>

      <section className='about-skills'>
        <h3 className='about-skills-title'>What can i do?</h3>
        <ul className='about-skills-list'>
          <li><RiLockPasswordFill />User authentication</li>
          <li>Responsive design</li>
          <li>Progressive web apps</li>
          <li>Server side rendering</li>
          <li>Web accessibility</li>
          <li>Single page app</li>
          <li>APIs end-points</li>
          <li>SEO</li>
          <li />
        </ul>
      </section>
      <section className='about-certificates'>
        <h3 className='about-certificates__title'>My certifications</h3>
        <ul className='about-certificates__list'>
          <li><img src={js} alt='' /></li>
          <li><img src={is} alt='' /></li>
          <li><img src={wa} alt='' /></li>
          <li><img src={git} alt='' /></li>
          <li>
            <div className='about-certificates__more'>
              <p>See  my +40 certificates <a href='https://platzi.com/p/jesber122/'>here</a></p>
            </div>
          </li>
        </ul>
      </section>

    </article>
  )
}

export default aboutMe
