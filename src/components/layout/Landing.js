import React from 'react'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <section className="landing">
    <div className="dark-overlay">
      <div className="landing-inner">
        <h1 className="x-large">Moringaness</h1>
        <p className="lead">
          The beauty of Moringa brought to you in our all new website. Check out our products and find out more!
        </p>
        <br/>
        <br/>
        <div className="buttons">
          <Link to="/products" className="btn btn-primary">Prodcuts</Link>
        </div>
      </div>
    </div>
    </section>
  )
  }

  export default Landing

