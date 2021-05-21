import React from 'react'
import IReact from '../assets/icons/react'
import IJs from '../assets/icons/js'
import IGit from '../assets/icons/git'
import IHtml from '../assets/icons/html'
import ICss from '../assets/icons/css'
import ISass from '../assets/icons/sass'
import Iapi from '../assets/icons/api'
import Iwebpack from '../assets/icons/webpack'
import Inode from '../assets/icons/node'
import Iexpress from '../assets/icons/express'
import Imongo from '../assets/icons/mongo'
import Iauth from '../assets/icons/auth'
import Ivanilla from '../assets/icons/vanilla'
import Inpm from '../assets/icons/npm'
import Iredux from '../assets/icons/redux'
import Numbers from './numbers'
import js from '../assets/images/js.png'
import is from '../assets/images/is.png'
import wa from '../assets/images/wa.png'
import git from '../assets/images/git.png'
import './styles/aboutMe.scss'
function aboutMe () {
  return (
    <article className='about' id='aboutMe'>
      <h2 className='about-title'>{'<About me>'}</h2>
      <section className='about-me'>
        <Numbers number='600' description='hours experience' counter={6} />
        <Numbers number='150' description='days since i start' counter={15} />
        <Numbers number='201' description='commits' counter={13} />
        <Numbers number='41' description='programming courses pass' counter={4} />
      </section>
      <section className='about-frameworks'>
        <h3 className='about-frameworks-title'>My frameworks</h3>
        <ul className='about-frameworks-list'>
          <li>Rect.js <IReact /></li>
          <li>javaScript <IJs /></li>
          <li>Git<IGit /></li>
          <li>HTML <IHtml /></li>
          <li>CSS <ICss /></li>
          <li>Sass<ISass /></li>
          <li>API REST <Iapi /></li>
          <li>Webpack <Iwebpack /></li>
          <li>Node.js <Inode /></li>
          <li>Express.js <Iexpress /></li>
          <li>MongoDB <Imongo /></li>
          <li>Oauth <Iauth /></li>
          <li>Vanilla JS <Ivanilla /></li>
          <li>NPM <Inpm /></li>
          <li>redux <Iredux /></li>
        </ul>
      </section>

      <section className='about-skills'>
        <h3 className='about-skills-title'>What can i do?</h3>
        <ul className='about-skills-list'>
          <li>User authentication</li>
          <li>Responsive design</li>
          <li>Progressive web apps</li>
          <li>Server side rendering</li>
          <li>Backend and frontend integration</li>
          <li>Single page app</li>
          <li>APIs end-points</li>
          <li>Digital marketing</li>
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
              <p>See  my +40 certificates <a href='https://platzi.com/p/jesber122/' target='_blank' rel='noopener noreferrer'>here</a></p>
            </div>
          </li>
        </ul>
      </section>

    </article>
  )
}

export default aboutMe
