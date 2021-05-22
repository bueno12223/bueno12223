import React from 'react'
import './styles/hero.scss'
function hero ({ data, hobby }) {
  return (
    <>
      <section className='hero' id='0'>
        <h1><span>{'<br>'}</span>{data[0]}<span>{'<br/>'}</span>
          <br />
          <span>{data[1]}</span>, a front-end / back-end developer
        </h1>
        <p>{data[2]}</p>
      </section>
      <section className='about-skills'>
        <h3 className='about-skills-title'>Hobbies</h3>
        <ul className='about-skills-list'>
          {hobby.map(hobby => <li key={hobby}>{hobby}</li>)}
          <li />
        </ul>
      </section>
    </>
  )
}

export default hero
