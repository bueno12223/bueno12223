import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './styles/contactMe.scss'
function contactMe ({ data: contact, title }) {
  const [result, setResult] = useState({ message: '', type: '' })
  function sendEmail (e) {
    e.preventDefault()
    emailjs.sendForm('gmail', 'template_ijhe9ne', e.target, 'user_iBKkdZQMVC7JF9cCe0e5s')
      .then((result) => {
        console.log(result.text)
        setResult({ message: 'Email send successfully', type: 'span-done' })
        setTimeout(() => setResult({ message: '', type: '' }), 5000)
      }, (error) => {
        console.log(error.text)
        setResult({ message: 'a error has hapen, try later or contact him my social media', type: 'span-danger' })
        setTimeout(() => setResult({ message: '', type: '' }), 5000)
      })
  }
  return (
    <article className='contact' id='4'>
      <h2 className='contact-title'>{`<${title}>`}</h2>
      <section className='contact-section'>
        <div>
          <h3 className='contact-section__title'>{contact[0]}</h3>
          <p className='contact-section__text'>{contact[1]}</p>
          <a href={contact[3]} target='_blank' rel='noreferrer' type='button' className='contact-form__submit contact-section__button'>{contact[2]}</a>
          <div className='contact-section__decorative' />
        </div>
        <form onSubmit={sendEmail} className='contact-form'>
          <span className={`span ${result.type}`}>{result.message}</span>
          <input className='contact-form__input' type='text' name='name' id='name' placeholder='name' />
          <input className='contact-form__input' type='email' name='email' id='email' placeholder='email' />
          <input className='contact-form__input' type='message' name='message' id='message' placeholder='message' />
          <input className='contact-form__submit' type='submit' name='submit' id='submit' />
        </form>
      </section>
    </article>
  )
}

export default contactMe
