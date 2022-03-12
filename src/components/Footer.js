import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <div className="footer-sitemap-container">
        <footer className="footer-sitemap">
          <div className="links">
            <div className="link-column ">
              <ul className="menu vertical">
                <li><a href="#"><strong>Support</strong></a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Safety information</a></li>
                <li><a href="#">Cancellation options</a></li>
                <li><a href="#">Our COVID-19 Response</a></li>
                <li><a href="#">Report a neighbourhood concern</a></li>
              </ul>
            </div>
            <div className="link-column">
              <ul className="menu vertical">
                <li><a href="#"><strong>About</strong></a></li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Letter from our founders</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      <div className='footer-contact-details-container'>
        <footer className='footer-contact-details'>
          <div className="footer-left">
            <div className="contact-details">
              <p> &copy; Copyright 2022 by Frank Xu</p>
            </div>
          </div>
          <div className="footer-right">
            <ul className="menu align-right">
              <li><a href="https://www.facebook.com/"><FacebookIcon /></a></li>
              <li><a href="https://twitter.com/home"><TwitterIcon /></a></li>
              <li><a href="https://www.instagram.com/"><InstagramIcon /></a></li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}
export default Footer