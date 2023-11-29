import React from 'react'
import Logo from '../assets/logo.png'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <h1>Integer Counter</h1>
        <img className='logo' src={Logo} alt="logo" />
    </div>
  )
}
