
import React from 'react'
import IReact from '../assets/icons/react'
import IJs from '../assets/icons/js'
import IGit from '../assets/icons/git'
import IHtml from '../assets/icons/html'
import ICss from '../assets/icons/css'
import Iwebpack from '../assets/icons/webpack'
import Inode from '../assets/icons/node'
import Iexpress from '../assets/icons/express'
import Imongo from '../assets/icons/mongo'
import Iboostrap from '../assets/icons/boostrap'
import INext from '../assets/icons/Inext'
import Isql from '../assets/icons/sql'
import Itypescript from '../assets/icons/typescript'
import IPython from '../assets/icons/python'
import IAWS from '../assets/icons/aws'
import ITailwind from '../assets/icons/tailwind'
import IVue from '../assets/icons/vue'
import IServerless from '../assets/icons/serverless'
import Idocker from '../assets/icons/Idocker'
import IPostgre from '../assets/icons/Ipostgre'
import Igcloud from '../assets/icons/Igcloud'
import Iredis from '../assets/icons/Iredis'
import Iflask from '../assets/icons/Iflask'
import Ifirebase from '../assets/icons/firebase'
import Numbers from './numbers'
import js from '../assets/images/js.png'
import is from '../assets/images/is.png'
import wa from '../assets/images/wa.png'
import git from '../assets/images/git.png'
import './styles/aboutMe.scss'
function aboutMe ({ me, certifications, extra, title, que }) {
  return (
    <article className='about' id='0'>
      <h2 className='about-title'>{`<${title}>`}</h2>
      <section className='about-me'>
        <Numbers number='40' description={me[0]} counter={5} />
        <Numbers number='48' description={me[1]} counter={4} />
        <Numbers number='2605' description='commits' counter={5} />
        <Numbers number='40' description={me[2]} counter={4} />
      </section>
      <section className='about-frameworks'>
        <h3 className='about-frameworks-title'>Frameworks</h3>
        <ul className='about-frameworks-list'>
          <li>Rect.js <IReact /></li>
          <li>Vue <IVue /></li>
          <li>javaScript <IJs /></li>
          <li>Python <IPython /></li>
          <li>Git Y GitHub<IGit /></li>
          <li>HTML <IHtml /></li>
          <li>CSS <ICss /></li>
          <li>MongoDB <Imongo /></li>
          <li>MySQL <Isql /></li>
          <li>PostgreSQL <IPostgre /></li>
          <li>Redis <Iredis /></li>
          <li>Serverless <IServerless /></li>
          <li>AWS <IAWS /></li>
          <li>Google Cloud <Igcloud /></li>
          <li>Tailwind <ITailwind /></li>
          <li>Node.js <Inode /></li>
          <li>Express.js <Iexpress /></li>
          <li>TypeScript <Itypescript /></li>
          <li>Docker <Idocker /></li>
          <li>Flask <Iflask /></li>
          <li>Firebase <Ifirebase /></li>
          <li>Bootstrap <Iboostrap /></li>
          <li>Next.js <INext /></li>
          <li>Webpack <Iwebpack /></li>
        </ul>
      </section>

      <section className='about-skills'>
        <h3 className='about-skills-title'>{que}</h3>
        <ul className='about-skills-list'>
          <li>User authentication (JWT, cookies)</li>
          <li>Serverless functions (lambda)</li>
          <li>Responsive design</li>
          <li>Progressive web apps</li>
          <li>Server side rendering</li>
          <li>Continues integration</li>
          <li>Docker compose images</li>
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
