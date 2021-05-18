import React from 'react'
import HomeBB from '../assets/images/homeBB.jpeg'
import HomeTV from '../assets/images/homeTV.png'
import HomeCC from '../assets/images/homeCC.jpg'
import HomeRT from '../assets/images/homeRT.jpg'
import lanBB from '../assets/images/land.jpeg'
import './styles/projects.scss'
function projects () {
  return (
    <article className='projects' id='proyects'>
      <h2 className='projects-title'>{'<Projects>'}</h2>
      <div className='projects-card-container'>
        <section className='projects-card batata'>
          <img src={HomeBB} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>BatataBit</p>
            <a href='/'>Page</a>
            <a href='/'>Repository</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeTV} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Total-video</p>
            <a href='/'>Page</a>
            <a href='/'>Repository</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeCC} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Cripto conf</p>
            <a href='/'>Page</a>
            <a href='/'>Repository</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={HomeRT} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p style={{ color: ' #1d1b24' }}>RNT</p>
            <a href='/'>Page</a>
            <a href='/'>Repository</a>
          </div>
        </section>
        <section className='projects-card'>
          <img src={lanBB} alt='' />
          <div className='projects-card-desc' style={{ top: '100%' }}>
            <p>Batatabit</p>
            <a href='/'>Page</a>
            <a href='/'>Repository</a>
          </div>
        </section>
      </div>
    </article>
  )
}

export default projects
