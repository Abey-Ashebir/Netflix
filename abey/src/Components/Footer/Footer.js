import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <div className="footer-container">
      <div className="social-icons">
        <FacebookIcon className="icon" />
        <InstagramIcon className="icon" />
        <TwitterIcon className="icon" />
        <YouTubeIcon className="icon" />
        <LinkedInIcon className="icon" />
      </div>
      <ul className="footer-links">
        <li><a href="#">Audio and Subtitles</a></li>
        <li><a href="#">Media Center</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Audio Description</a></li>
        <li><a href="#">Investor Relations</a></li>
        <li><a href="#">Legal Notices</a></li>
        <li><a href="#">LinkedInIcon</a></li>
      </ul>
      <div className="footer-bottom">
        <button className="service-code-btn">Service Code</button>
        <p>&copy; 2024 Netflix, Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
