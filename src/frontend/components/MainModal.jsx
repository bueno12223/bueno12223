import React, { useState, useEffect } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import './styles/mainModal.scss'

function MainModal (props) {
  const { display, children, setDisplay } = props
  const [activate, setActivate] = useState(display)

  useEffect(() => {
    setActivate(display)
  }, [display])
  return (
    <section className='config-container' style={{ display: activate ? 'inline' : 'none' }}>
      <article className='config-header'>
        {children[0]}
        <button type='button' className='userModal-close' onClick={() => setDisplay('')}>
          <AiFillCloseCircle />
        </button>
      </article>
      <article className='config-body'>
        {children[1]}
      </article>
    </section>
  )
}
export default MainModal
