import React from 'react'
import HomeBB from '../assets/images/homeBB.png'
import HomeTV from '../assets/images/homeTV.png'
import HomeCC from '../assets/images/flaskHome.png'
import loginRT from '../assets/images/loginRT.png'
import lanBB from '../assets/images/land.jpeg'
import homePG from '../assets/images/homePG.png'
import homeLV from '../assets/images/homeLV.png'
import Foro4 from '../assets/images/foro4.webp'
import './styles/projects.scss'
function projects ({ title, lan }) {
  return (
    <article className='projects' id='2'>
      <h2 className='projects-title'>{`<${title}>`}</h2>
      <div className='projects-card-container'>
        <section className='projects-card batata'>
          <img src={HomeBB} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>BatataBit App</p>
            <a target='_blank' rel='noopener noreferrer' href='https://batatabit.herokuapp.com/demo'>{lan ? 'Página' : 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/bueno12223/batatabit'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeTV} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Total-video</p>
            <a href='https://total-video-jesus.herokuapp.com/' target='_blank' rel='noopener noreferrer'>{lan ? 'Página' : 'Page'}</a>
            <a href='https://github.com/bueno12223/Total-video ' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeCC} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Todo Flask</p>
            <a href='https://todo-fask.ue.r.appspot.com/auth/singup' target='_blank' rel='noopener noreferrer'>{lan ? 'Página' : 'Page'}</a>
            <a href='https://github.com/bueno12223/flask' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={loginRT} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>RNT</p>
            <a href='http://runningtrader.com' target='_blank' rel='noopener noreferrer'>{lan ? 'Página' : 'Page'}</a>
            <a href='https://github.com/bueno12223/Runninn-Pips' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={lanBB} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Batatabit</p>
            <a target='_blank' rel='noopener noreferrer' href='https://batatabit.herokuapp.com/'>{lan ? 'Página' : 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/bueno12223/batatabit'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={homePG} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Petgram</p>
            <a target='_blank' rel='noopener noreferrer' href='https://petgram-avanzado-react.vercel.app/'>{lan ? 'Página' : 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/bueno12223/petgramm'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={homeLV} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>Laslel VPN</p>
            <a target='_blank' rel='noopener noreferrer' href='https://laslesvpn-landing.netlify.app/'>{lan ? 'Página' : 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/bueno12223/Runninn-Pips'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={Foro4} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>foro4</p>
            <a target='_blank' rel='noopener noreferrer' href='https://app.foody.com.co/programar'>{lan ? 'Página' : 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/foodylatam'>{lan ? 'Repositirio' : 'Repository'}</a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default projects
