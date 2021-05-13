import React from 'react'
const moment = require('moment')
moment("20201210", "YYYYMMDD").fromNow()
import { SiJavascript, DiReact, AiFillGithub, SiHtml5, SiCss3, SiSass, AiFillApi, SiWebpack, GrNode, HiServer, SiMongodb, GiSecurityGate, DiJavascript1, SiNpm, SiRedux } from 'react-icons/all'
import './styles/aboutMe.scss'
function aboutMe() {
    return (
        <article className='about'>
            <h2 className='about-title'>{'<About me>'}</h2>
            <section className='about-me'>
                <h4><b>+600</b><br/> hours experience</h4>
                <h4><b>{moment("20201210", "YYYYMMDD").fromNow()}</b> <br/> i started</h4>
                <h4><b>137</b><br/>commits</h4>
                <h4><b>41</b> <br/> programming courses pass</h4>
            </section>
            <section className='about-frameworks'>
                <h3 className='about-frameworks-title'>My frameworks</h3>
                <ul className='about-frameworks-list'>
                <li>Rect.js <DiReact /></li>
                <li>javaScript <SiJavascript /></li>
                <li>Git<AiFillGithub /></li>
                <li>HTML <SiHtml5 /></li>
                <li>CSS <SiCss3 /></li>
                <li>Sass<SiSass /></li>
                <li>API REST <AiFillApi /></li>
                <li>Webpack <SiWebpack /></li>
                <li>Node.js <GrNode /></li>
                <li>Express.js <HiServer /></li>
                <li>MongoDB <SiMongodb /></li>
                <li>Oauth <GiSecurityGate /></li>
                <li>Vanilla JS <DiJavascript1 /></li>
                <li>NPM <SiNpm /></li> 
                <li>redux <SiRedux /></li>          
            </ul>
            </section>

            <section>
            <h3>What can i do?</h3>
            <ul className='about-skills'>
                <li>Responsive design</li>
                <li>Progressive web apps</li>
                <li>Server side rendering</li>
                <li>Web accessibility</li>
                <li>Single page app</li>
                <li>API integration</li>
                <li>SEO</li>
                <li></li>
            </ul>

            </section>

        </article>
    )
}

export default aboutMe
