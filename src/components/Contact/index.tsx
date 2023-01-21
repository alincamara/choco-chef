import React, { ReactElement } from 'react'

import './index.css'

export const Contact = (): ReactElement => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form
          action="https://formsubmit.co/alincamara9403@gmail.com"
          method="POST"
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                required
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                required
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              required
              className="contact__form-input"
              placeholder="Insert your subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              className="contact__form-input"
              placeholder="Write your message"
              name=""
              id=""
              required
              cols={30}
              rows={10}
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
