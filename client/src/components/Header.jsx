import React from 'react'

import { Link } from 'react-router-dom'

const Header = () =>{
  return(
    <header>
    <div className='header'>
      Header Component
    <div>
    <nav>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/movies'>Movies</Link></li>
    </nav>
    </header>
    )
}


export default Header
