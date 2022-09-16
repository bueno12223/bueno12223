import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import Projects from '../components/projects'
import AboutMe from '../components/aboutMe'
import Goals from '../components/goals'
import Recomendations from '../components/recomendations'
import ContactMe from '../components/contactMe'
import Foooter from '../components/footer'
function main () {
  const [lenguajes, setLenguajes] = useState(() => {
    navigator.language || navigator.userLanguage === 'en'
  })
  const dataEs = {
    header: ['Acerca de mí', 'Logros', 'Proyectos', 'Referencias', 'Contacto'],
    hobby: ['Practicar artes marciales', 'Emprendimiento', 'Desarrollo personal', 'Debate competitivo', 'Aprender nuevas cosas', 'Ir al gimnnasio', 'traveler Filmaking'],
    hero: ['Hola', 'soy Jesús', 'Soy un desarrollador front-end y back-end profesional motivado con una fuerte ética de trabajo y excelentes habilidades interpersonales. 💻😊 Me encanta trabajar en nuevos proyectos y ser desafiado; También me encanta trabajar con nuevos equipos. Soy muy receptivo a cualquier solicitud de cambio o mensaje. Puedes enviarme un mensaje o un email en cualquier momento 😁'],
    about: {
      me: ['Meses de experiencia', 'Meses de estudio', 'cursos completados'],
      certifications: 'Mis certificaciones',
      que: '¿Qué puedo hacer?',
      extra: 'Mira mis +40 certificaciones'
    },
    goals: [
      { title: 'Participante de las Olimpiadas de Informática', text: 'En el 2019 participé de las primeras olimpiadas de informática en Panamá organizado por la Universidad del Istmo.' },
      { title: 'Ganador de la copa de debate en Panamá', text: 'En el 2019 fui ganador de la copa regional de debate en Panamá a nivel nacional organizada por ASPADE.' },
      { title: 'Participante del Torneo Uniandino de Debate', text: 'En el 2018 participé en el Torneo Uniandino de debate en Bogotá, Colombia destacando entre el top 10 mejores oradores a nivel internacinal.' }
    ],
    recomendations: [
      {
        text: `Fui su profesor de debate en el año 2018, y durante el tiempo que estuve impartiendo 
            clases en su colegio el Instituto Dr. Alfredo Cantón en San Miguelito, pude reconocer las 
            habilidades de aprendizaje que posee, personalmente vi un crecimiento intelectual en los 
            logros de Jesús, es un joven con pensamiento crítico y reconozco su deseo de seguir creciendo. `,
        chargue: 'Diputado de la Asamblea nacional de Panamá'
      },
      {
        text: `El joven Jesús Berrio, a pesar de su corta edad, ha demostrado su compromiso y pasión
            por la educación y el empoderamiento de jóvenes de su comunidad, aportando
            constructivamente a la labor que realiza nuestra organización.`,
        chargue: 'Pesidente actual de La Asociación de Jovenes Emprendedores AJOEM'
      },
      {
        text: `En el tiempo que lleva con nosotros, Jesús ha participado activamente de diferentes actividades
        que ASPADE organiza, como talleres educativos, competencias de debate, y foros de carácter
        intercolegial, siempre distinguiéndose por su proactividad, responsabilidad, y compromiso. `,
        chargue: 'Vicepresidente actual de ASPADE.'
      }
    ],
    contact: [
      'Contrátame para tu siguiente proyecto',
      'Lo se, si estas aquí, estas muy interesado en trabajar conmigo, to también!!, ¿Porqué no me mandas un email? o si quieres saber mas acerca de mi descarga mi curriculum aquí abajo :)',
      'Descargar CV',
      'https://docs.google.com/document/d/16-tIQQc_7WSYvEMW92JOrksvbpPXAS6EmUvBMuA8yIE/edit?usp=sharing'
    ],
    footer: 'Contáctame aquí'
  }
  const dataEn = {
    header: ['About me', 'Achivements', 'Proyects', 'References', 'Contact'],
    hobby: ['Practice marcials arts', 'Entrepreneurship', 'Read selft development books', 'Competitive debate', 'Learn new things', 'Go to the gym', 'traveler Filmaking'],
    hero: ['Hello', 'I am Jesus', 'I am a self-motivated professional Front-End and Back-End Developer with a strong work ethic and excellent interpersonal skills.💻😊 I love working on new projects and being challenged; I also love working with new teams. You can send me a message or an email at every moment 😁'],
    about: {
      me: ['Months of experience', 'Months studing', 'Courses completed'],
      que: 'What can I do?',
      certifications: 'My certifications',
      extra: 'See  my +40 certificates'
    },
    goals: [
      { title: 'Participant of the Computer Science Olympics', text: 'In 2019 I participated in the first computer science Olympics in Panama organized by the Universidad del Istmo.' },
      { title: 'Winner of the Regional Debate Cup in Panama', text: 'In 2019 I was the winner of the regional debate cup in Panama at the national level organized by ASPADE.' },
      { title: 'Participant of the Uniandino Debate Tournament', text: 'In 2018 I participated in the Uniandino Debate Tournament in Bogotá, Colombia, remaining among the best speakers.' }
    ],
    recomendations: [
      {
        text: `I was his debate teacher in 2018, and during the time I was teaching
            classes at his school, Instituto Dr. Alfredo Cantón in San Miguelito, I was able to recognize the
            learning skills he possesses, I personally saw intellectual growth in the
            achievements of Jesus, he is a young man with critical thinking and I recognize his desire to continue growing.`,
        chargue: 'Burgess of the National Assembly of Panama.'
      },
      {
        text: `The young Jesús Berrio, despite his young age, has shown his commitment and passion
            for the education and empowerment of young people in their community, contributing
            constructively to the work carried out by our organization.`,
        chargue: 'Current President of the Association of Young Entrepreneurs AJOEM'
      },
      {
        text: `In the time that he has been with us, Jesus has actively participated in different activities
        that ASPADE organizes, such as educational workshops, debate competitions, and character forums
        intercollegiate, always distinguishing itself by its proactivity, responsibility, and commitment.`,
        chargue: 'Current Vice President of the Panamanian Debate Association ASPADE'
      }
    ],
    contact: [
      'Hire me for the next proyects',
      'I know, if you are here, you are interested in work whit me, me too, why you send me an email in the next form? or if you want to know more about me click below to download the Yisus developer curriculum vitae :)',
      'Download CV',
      'https://docs.google.com/document/d/1fx9AZYQ7YV7Dm_Cs9etAkdqFPiDt5ZJVhHToGCYX50Q/edit?usp=sharing'
    ],
    footer: 'Contact me here'
  }
  const [data, setData] = useState(() => lenguajes ? dataEn : dataEs)
  useEffect(() => setData(lenguajes ? dataEs : dataEn), [lenguajes])
  return (
    <>
      <Header setLenguje={setLenguajes} lenguaje={lenguajes} data={data.header} />
      <Hero data={data.hero} hobby={data.hobby} />
      <AboutMe {...data.about} title={data.header[0]} />
      <Goals itle={data.header[1]} data={data.goals} />
      <Projects title={data.header[2]} lan={lenguajes} />
      <Recomendations data={data.recomendations} title={data.header[3]} />
      <ContactMe data={data.contact} title={data.header[4]} />
      <Foooter data={data.footer} />
    </>
  )
}

export default main
