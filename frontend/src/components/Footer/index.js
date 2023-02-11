import './index.css'
import React from 'react';


const Footer = () => {
    return (
      <div className="footer">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Duong Vo | All rights reserved

        </p>
      </div>
    );
  };
  
  export default Footer;