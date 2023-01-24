import React from 'react'
import Logo from '../../assets/images/FJI.svg'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
          <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}
