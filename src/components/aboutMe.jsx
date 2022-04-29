import React from 'react'
import IReact from '../assets/icons/react'
import IJs from '../assets/icons/js'
import IGit from '../assets/icons/git'
import IHtml from '../assets/icons/html'
import ICss from '../assets/icons/css'
import ISass from '../assets/icons/sass'
import IGitH from '../assets/icons/gitH'
import Iwebpack from '../assets/icons/webpack'
import Inode from '../assets/icons/node'
import Iexpress from '../assets/icons/express'
import Imongo from '../assets/icons/mongo'
import Iboostrap from '../assets/icons/boostrap'
import Igraphql from '../assets/icons/graphql'
import Isql from '../assets/icons/sql'
import Itypescript from '../assets/icons/typescript'
import IPython from '../assets/icons/python'
import IAWS from '../assets/icons/aws'
import ITailwind from '../assets/icons/tailwind'
import IVue from '../assets/icons/vue'
import IServerless from '../assets/icons/serverless' 
import Numbers from './numbers'
import js from '../assets/images/js.png'
import is from '../assets/images/is.png'
import wa from '../assets/images/wa.png'
import git from '../assets/images/git.png'
import './styles/aboutMe.scss'
function aboutMe ({ me, certifications, extra, title, que }) {
  function getDays (date1, date2) {
    return Math.ceil((date2 - date1) / 8.64e7)
  }
  const days = getDays(new Date('Jan 25, 2020'), new Date(Date.now()))
  return (
    <article className='about' id='0'>
      <h2 className='about-title'>{`<${title}>`}</h2>
      <section className='about-me'>
        <Numbers number='1000' description={me[0]} counter={7} />
        <Numbers number={days.toString()} description={me[1]} counter={15} />
        <Numbers number='600' description='commits' counter={13} />
        <Numbers number='40' description={me[2]} counter={4} />
      </section>
      <section className='about-frameworks'>
        <h3 className='about-frameworks-title'>Frameworks</h3>
        <ul className='about-frameworks-list'>
          <li>Rect.js <IReact /></li>
          <li>javaScript <IJs /></li>
          <li>Git <IGitH /></li>
          <li>HTML <IHtml /></li>
          <li>CSS <ICss /></li>
          <li>Vue <IVue /></li>
          <li>Python <IPython /></li>
          <li>GitHub<IGit /></li>
          <li>AWS <IAWS /></li>
          <li>Node.js <Inode /></li>
          <li>Webpack <Iwebpack /></li>
          <li>MongoDB <Imongo /></li>
          <li>SQL <Isql /></li>
          <li>TypeScript <Itypescript /></li>
          <li>Serverless <IServerless /></li>
          <li>Express.js <Iexpress /></li>
          <li>Bootstrap <Iboostrap /></li>
          <li>GraphQL <Igraphql /></li>
          <li>Sass<ISass /></li>
          <li>Tailwind <ITailwind /></li>
        </ul>
      </section>

      <section className='about-skills'>
        <h3 className='about-skills-title'>{que}</h3>
        <ul className='about-skills-list'>
          <li>User authentication</li>
          <li>Responsive design</li>
          <li>Progressive web apps</li>
          <li>Server side rendering</li>
          <li>Backend and frontend integration</li>
          <li>Single page app</li>
          <li>APIs end-points</li>
          <li>Serverless functions</li>
          <li />
        </ul>
      </section>
      <section className='about-certificates'>
        <h3 className='about-certificates__title'>{certifications}</h3>
        <ul className='about-certificates__list'>
          <li><img src={js} alt='' /></li>
          <li><img src={is} alt='' /></li>
          <li><img src={wa} alt='' /></li>
          <li><img src={git} alt='' /></li>
          <li>
            <div className='about-certificates__more'>
              <p><a href='https://platzi.com/p/jesber122/' target='_blank' rel='noopener noreferrer'>{extra}</a></p>
            </div>
          </li>
        </ul>
      </section>

    </article>
  )
}

export default aboutMe
