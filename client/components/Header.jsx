import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <div className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="nav-logo">
            <p>SubWoofer</p>
          </div>
          <button type='button' className='btn nav-btn'>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  )
}
