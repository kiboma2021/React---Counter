import React from 'react'
import Logo from '../assets/logo.png'
import './header.css'

export default function Header(props) {
  return (
    <div className='header'>
        <h1>{props.title}</h1>
        <img className='logo' src={Logo} alt="logo" />
    </div>
  )
}
