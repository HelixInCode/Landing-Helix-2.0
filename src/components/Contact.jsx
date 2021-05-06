import React from 'react';
import Title from '../widgets/Title';
import ContactInput from './ContactInput';
import IdCard from './icons/IdCard';
import Envelope from './icons/Envelope';
import Email from './icons/Email';
import Phone from './icons/Phone';
import Button from '../widgets/Button';

const Contact = () => {
  return (
    <section id="contacto" className="Contact">
      <Title 
        inner="Contacto"
        className="Contact__title"
      />
      <form id="form" className="Contact__form">
          <ContactInput 
            type="text" 
            autoComplete="name" 
            name="name" 
            Icon={IdCard}
            placeholder="Nombre"
            required
          />
        
          <ContactInput 
            type="tel" 
            autoComplete="tel" 
            name="phone" 
            Icon={Phone}
            placeholder="Teléfono"
            required
          />
        
          <ContactInput 
            type="email" 
            autoComplete="email" 
            name="email" 
            Icon={Email}
            placeholder="E-mail"
            required
          />
        
          <ContactInput 
            type="text" 
            name="asunto" 
            Icon={Envelope}
            placeholder="Asunto"
            required
          />
        
          <textarea 
            name="message"
            placeholder="Escribe tu mensaje aquí 😁"
            required
            className="Contact__form--message" 
          ></textarea>
        
        {/* <ContactInput type="hidden" name="recaptcha_response" id="recaptchaResponse"/> */}
        
        <Button type="submit" color="dark">Enviar</Button>
      </form>
    </section>
  )
}

export default Contact;
