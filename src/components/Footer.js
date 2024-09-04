import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footer'>
        <h3>Find me on social media</h3>
        <div className='socialIcons'>
          <a href='https://www.linkedin.com/in/suleyman-the-magnificent-b767b4322/' target='_blank'><LinkedInIcon className='socialIcon'/></a>
          <a href='https://www.instagram.com/ceiroin/' target='_blank'><InstagramIcon className='socialIcon'/></a>
          <a href='https://www.facebook.com/profile.php?id=61564496350751' target='_blank'><FacebookIcon className='socialIcon'/></a>
        </div>
        <h4>Powered by w3.css</h4>
      </div>
    </div>
  )
}

export default Footer;