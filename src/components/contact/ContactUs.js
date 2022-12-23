import React, {useEffect} from 'react'
import ContactUsTop from './ContactUsTop'
import ContactusBottom from './ContactusBottom'

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <ContactUsTop/>
    <ContactusBottom/>
    </>
 
  )
}

export default ContactUs