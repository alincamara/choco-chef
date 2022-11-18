import React, { ReactElement } from 'react'
import join from 'classnames'
import './index.css'
import { goToAbout } from '../../../actions/locations'

interface Props {
  className?: string
}

export const Contact = (props: Props): ReactElement => {
  const { className } = props

  const handleSubmit = () => {
    goToAbout()
    console.log('test...')
  }

  return (
    <div className={join('contactPage', className)}>
      <div className="contactMessage">{'Contact Us'}</div>
      <form
        action="https://formsubmit.co/alincamara9403@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New email woooo!" />
        <input type="email" name="email" placeholder="Email Address" required />
        {/* <input type="hidden" name="_next" value="http://localhost:8081/about" /> */}
        {/* <input
          className="messageInput"
          type="text"
          name="message"
          placeholder="Write your message here"
          required
        /> */}
        <textarea
          className="messageInput"
          name="message"
          placeholder="Write your message here"
          required
        ></textarea>
        <button className="sendBtn" type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
