import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Nav from './Nav'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)

  function toggleNav() {
    setNavOpen(!navOpen)
  }


  return (
    <>
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <p>SubWoofer</p>
          </div>
          <button type='button' className='btn nav-btn' onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
      <nav className={`overlay${navOpen ? ' overlay--open' : ''}`} onClick={toggleNav}>
          <Nav />
      </nav>
    </>
  )
}
