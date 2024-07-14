import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#"><Link to="/" className='text-secondary text-decoration-none fs-5'>Home</Link></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#"><Link to="/read" className='text-secondary text-decoration-none fs-5'>User details</Link></a>
    </li>

  </ul>
  )
}

export default Header