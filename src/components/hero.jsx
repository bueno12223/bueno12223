import React from 'react'
import './styles/hero.scss'
function hero ({ data, hobby }) {
  return (
    <>
      <section className='hero' >
        <h1><span>{'<br>'}</span>{data[0]}<span>{'<br/>'}</span>
          <br />
          <span>{data[1]}</span>, a front-end / back-end developer
        </h1>
        <p>{data[2]}</p>
      </section>
    </>
  )
}

export default hero
