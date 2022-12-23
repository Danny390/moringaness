import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const Links = (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Our Products</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      );

  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/">
      <i className="fa-solid fa-leaf"></i>    Moringaness
      </Link>
    </h1>
    <Fragment>{Links}</Fragment>
  </nav>
);
}

export default Navbar
