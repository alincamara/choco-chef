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
      <form
        action="https://formsubmit.co/alincamara9403@gmail.com"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New email woooo!" />
        <input type="email" name="email" placeholder="Email Address" required />
        {/* <input type="hidden" name="_next" value="http://localhost:8081/about" /> */}
        <input
          type="text"
          name="message"
          placeholder="Write your message here"
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
