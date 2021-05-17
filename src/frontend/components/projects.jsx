import React, { useState, useEffect } from 'react'
import HomeBB from '../assets/images/homeBB.jpeg'
import HomeTV from '../assets/images/homeTV.png'
import HomeCC from '../assets/images/homeCC.jpg'
import MainModal from './MainModal'
import './styles/projects.scss'
function projects () {
  const [display, setDisplay] = useState('')
  const [data, setData] = useState({ title: '', img: [], text: '' })
  useEffect(() => {
    switch (display) {
      case 'batata':
        return setData({
          title: 'BatataBit',
          img: [HomeBB, HomeBB],
          text: 'frifrjifrgnrjilgnrilgnerjig'
        })
      default:
        break
    }
  }, [display])
  return (
    <article className='projects' id='proyects'>
      <MainModal display={display} setDisplay={setDisplay}>
        <h3>{data.title}</h3>
        <section>
          <img src={data.img[0]} alt='' /><img src='' alt='' />
          <p>{data.text}</p>
          <img src={data.img[1]} alt='' /><img src='' alt='' />
        </section>
      </MainModal>
      <h2 className='projects-title'>{'<Projects>'}</h2>
      <div className='projects-card-container'>
        <section className='projects-card'>
          <a href=''>
            <img src={HomeBB} alt='' />
          </a>
        </section>
        <section className='projects-card'>
          <a href=''>
            <img src={HomeTV} alt='' />
          </a>
        </section>
        <section className='projects-card'>
          <a href=''>
            <img src={HomeCC} alt='' />
          </a>
        </section>
      </div>
    </article>
  )
}

export default projects
