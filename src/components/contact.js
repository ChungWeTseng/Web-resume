import React, { useState } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import FadeInSection from './fadein-section'

const Info = () => {
  const contact = {
    address: '2-5-3 Higashi-Ikebukuro ARDEN 106',
    location: 'Toshima-ku Tokyo 170-0013 Japan',
    phone: 'Tel: 080-7809-1945',
    email: 'chungwe1994@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chung-we-tseng-fang/',
    github: 'https://github.com/ChungWeTseng'
  }

  const link = {
    margin: '0 10px'
  }

  return (
    <div className='has-text-centered'>
      <p className='is-marginless'> {contact.address} </p>
      <p> {contact.location} </p>
      <p className='is-marginless'> {contact.email} </p>
      <p> {contact.phone} </p>

      <a href={contact.linkedin} style={link} className='has-text-dark'>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>

      <a href={contact.github} style={link} className='has-text-dark'>
        <FontAwesomeIcon icon={faGithub} size="2x"/>
      </a>

      <a className='button is-dark' href='https://github.com/ChungWeTseng/CurriculumVitae/raw/master/cv.pdf'  style={link}> Download CV </a>
    </div>
  );
}

const Form = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const closeNotification = () => {
    setServerState({
      submitting: false,
      status: null
    });
  }

  const notification = {
    bottom: '2rem',
    left: '2rem',
    marginRight: '2rem',
    minWidth: '15rem',
    position: 'fixed',
    zIndex: '10'
  }

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: 'post',
      url: 'https://getform.io/f/a1bddac4-eef4-485b-a1b7-8f712ca440af',
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, 'Thanks for contacting!', form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className='field-body'>
        <div className='field'>
          <p className='control is-expanded has-icons-left'>
            <input className='input' type='text'  name='name' placeholder='Enter name' required/>
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faUser} />
            </span>
          </p>
        </div>

        <div className='field'>
          <p className='control is-expanded has-icons-left'>
            <input className='input' type='email' name='email' placeholder='Enter email' required/>
            <span className='icon is-small is-left'>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </p>
        </div>
      </div>

      <div className='field'>
        <p className='control is-expanded has-icons-left'>
          <input className='input' type='text' name='subject' placeholder='Enter Subject' required/>
          <span className='icon is-small is-left'>
            <FontAwesomeIcon icon={faAlignJustify} />
          </span>
        </p>
      </div>

      <div className='field'>
        <div className='control'>
          <textarea className='textarea' name='message' placeholder='Enter Message' required />
        </div>
      </div>

      <div className='control'>
        <button type='submit' className='button is-primary is-fullwidth' disabled={serverState.submitting}> Send </button>
      </div>

      {serverState.status && (
        <div className={`notification ${serverState.status.ok ? 'is-info' : 'is-danger'}`} style={notification}>
          <button class="delete" onClick={closeNotification}></button>
          {serverState.status.msg}
        </div>
      )}
    </form>
  );
}

const Contact = () => {
  return (
    <section className='section' id='contact'>
      <FadeInSection className='container'>
        <h1 className='title is-1 is-size-2-mobile'> Contact me</h1>
        <div className='columns is-vcentered'>
          <div className='column'>
            <Form />
          </div>
          <div className='column'>
            <Info />
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

export default Contact
