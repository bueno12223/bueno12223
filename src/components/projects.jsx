import React from 'react'
import HomeBB from '../assets/images/homeBB.png'
import HomeTV from '../assets/images/homeTV.png'
import HomeCC from '../assets/images/homeCC.jpg'
import loginRT from '../assets/images/loginRT.png'
import lanBB from '../assets/images/land.jpeg'
import homePG from '../assets/images/homePG.png'
import homeLV from '../assets/images/homeLV.png'
import './styles/projects.scss'
function projects ({ title, lan }) {
  return (
    <article className='projects' id='2'>
      <h2 className='projects-title'>{`<${title}>`}</h2>
      <div className='projects-card-container'>
        <section className='projects-card batata'>
          <img src={HomeBB} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>BatataBit</p>
            <a href='https://batatabit.herokuapp.com/'>{lan ? 'Página': 'Page'}</a>
            <a href='https://github.com/bueno12223/batatabit' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeTV} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Total-video</p>
            <a href='https://total-video-jesus.herokuapp.com/' target='_blank' rel='noopener noreferrer'>{lan ? 'Página': 'Page'}</a>
            <a href='https://github.com/bueno12223/Total-video ' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeCC} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Cripto conf</p>
            <a href='https://cript-conf.herokuapp.com/' target='_blank' rel='noopener noreferrer'>{lan ? 'Página': 'Page'}</a>
            <a href='https://github.com/bueno12223/cripto-conf' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={loginRT} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>RNT</p>
            <a href='https://running-pips.herokuapp.com/' target='_blank' rel='noopener noreferrer'>{lan ? 'Página': 'Page'}</a>
            <a href='https://github.com/bueno12223/Runninn-Pips' target='_blank' rel='noopener noreferrer'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={lanBB} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Batatabit</p>
            <a target='_blank' rel='noopener noreferrer' href='https://batatabit.herokuapp.com/'>{lan ? 'Página': 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/bueno12223/batatabit'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={homePG} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Petgram</p>
            <a target='_blank' rel='noopener noreferrer' href='https://petgram-avanzado-react.vercel.app/'>{lan ? 'Página': 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://petgram-avanzado-react.vercel.app/'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={homeLV} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Laslel VPN</p>
            <a target='_blank' rel='noopener noreferrer' href='https://laslesvpn-landing.netlify.app/'>{lan ? 'Página': 'Page'}</a>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/bueno12223/Runninn-Pips'>{lan ? 'Repositirio': 'Repository'}</a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default projects
