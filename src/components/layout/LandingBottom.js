import React from 'react'
import { Link } from 'react-router-dom'

const LandingBottom = () => {
  return (
    <div>
      <section className="landingBottom">
      <div className="landing-inner">
        <p className="lead">
         All products are locally grown and help the local community. Inspired to create a better future, today!
        </p>
        <div className="buttons">
          <Link to="/contact-us" className="btn btn-dark">Get in touch with us</Link>
        </div>
      </div>
        </section>
    </div>
  )
}

export default LandingBottom
