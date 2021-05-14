import React from "react";
import "./styles/contactMe.scss";
function contactMe() {
    return (
        <article className='contact' id='contact'>
            <h2 className='contact-title' >{"<Contact me>"}</h2>
            <section className='contact-section' >
                <div>
                    <h3 className='contact-section__title'>Hire me for the next proyects</h3>
                    <p className='contact-section__text' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maxime explicabo qui ea culpa officia non labore quam ad voluptas veritatis, iure provident omnis, fugiat dolorum reprehenderit? Animi, consequatur accusantium.</p>
                    <div className='contact-section__decorative'></div>
                </div>
                <form action="" className='contact-form'>
                    <input className='contact-form__input' type="text" name="name" id="name" placeholder='name' />
                    <input className='contact-form__input' type="email" name="email" id="email" placeholder='email' />
                    <input className='contact-form__input' type="message" name="message" id="message" placeholder='message' />
                    <input className='contact-form__submit' type="submit" name="submit" id="submit" />
                </form>
            </section>
        </article>
    );
}

export default contactMe;
