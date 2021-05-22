import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Projects from '../components/projects'
import AboutMe from '../components/aboutMe'
import ContactMe from '../components/contactMe'
import Foooter from '../components/footer'
function main () {
  const [lenguajes, setLenguajes] = useState(false)
  const dataEs = {
    header: ['Inicio', 'Acerca de mí', 'Proyectos', 'Contacto'],
    hobby: ['Practicar artes marciales', 'Emprendimiento', 'Leer libros de desarrollo personal', 'Debate competitivo', 'Aprender nuevas cosas', 'Ir al gimnnasio', 'Viajar y visitar nuevos lugares nuevos'],
    hero: ['Hola', 'soy Jesús', 'Soy un estudiante autodidacta de Panamá, un pequeño y hermoso país en Centro América, Tengo 18 años y empecé a programar solamente en HTML desde que tengo 16 como un hobby,terminé la secundaria el año pasado y decidí intentar ser un programador autodidacta, creo que esta es la edad para tomar mas riesgos nuestras desiciones y esto es lo que he hecho.'],
    about: {
      me: ['horas de experiencia', 'dias desde que empecé', 'cursos completados'],
      certifications: 'Mis certificaciones',
      que: '¿Qué puedo hacer?',
      extra: 'Mira mis +40 certificaciones'
    },
    contact: [
      'Contrátame para tu siguiente proyecto',
      'Lo se, si estas aquí, estas muy interesado en trabajar conmigo, to también!!, ¿Porqué no me mandas un email? o si quieres saber mas acerca de mi descarga mi curriculum aquí abajo :)',
      'Descargar CV',
      'https://drive.google.com/file/d/1hJwRdcJL0BC3Q2IH6HlU4o2uhmNFNHZ-/view?usp=sharing'
    ],
    footer: 'Contáctame aquí'
  }
  const dataEn = {
    header: ['Home', 'About me', 'Projects', 'Contact me'],
    hobby: ['Practice marcials arts', 'Entrepreneurship', 'Read selft development books', 'Competitive debate', 'Learn new things', 'Go to the gym', 'Parkure', 'Travel and visit new places'],
    hero: ['Hello', 'I am Jesus', 'I am an autodidact student from Panama, a little and beautiful country in Central America, I have 18 years old and I started programming whit only HTML since y have 16 but more like a hobby, I end high school in 2020 I decided to try to be an autodidact programmer, I think that this is the age to take more risk in our desitions so decided try, and this is what I do.'],
    about: {
      me: ['hours experience', 'days since i start', 'programming courses pass'],
      que: 'What can I do?',
      certifications: 'My certifications',
      extra: 'See  my +40 certificates'
    },
    contact: [
      'Hire me for the next proyects',
      'I know, if you are here, you are interested in work whit me, me too, why you send me an email in the next form? or if you want to know more about me click below to download the Yisus developer curriculum vitae :)',
      'Download CV',
      'https://drive.google.com/file/d/1UjxhvQJHVw0r0xXwIyzbW2X3ys7bdfZd/view?usp=sharing'
    ],
    footer: 'Contact me here'
  }
  const [data, setData] = useState(dataEn)
  useEffect(() => setData(lenguajes ? dataEs : dataEn), [lenguajes])
  return (
    <>
      <Header setLenguje={setLenguajes} lenguaje={lenguajes} data={data.header} />
      <Hero data={data.hero} hobby={data.hobby} />
      <AboutMe {...data.about} title={data.header[1]} />
      <Projects title={data.header[2]} />
      <ContactMe data={data.contact} title={data.header[3]} />
      <Foooter data={data.footer} />
    </>
  )
}

export default main
