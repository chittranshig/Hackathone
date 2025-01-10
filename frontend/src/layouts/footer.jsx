import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className="footer">
      <div className="container1">
        <div className="row">
          <div className="footer-col">
            <h4 className='outer'>Home</h4>
            <ul> 
              <li><a href="/about">About us</a></li>
              <li><a href="/our-services">Our Services</a></li>
             <li><a href="/how-it-works">How it works</a></li>
              <li><a href="/repayment-options">Repayment Options</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4  className=''>Get help</h4>
            <ul >
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/Customersupport">Customer Support</a></li>
              <li><a href="/loan-form">Apply for loan</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/paymentMethod">Payment options </a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className='outer'>Legal</h4>
            <ul >
              <li><a href="/privacy">Privacy policy</a></li>
              <li><a href="/terms-of-service">Terms of service</a></li>
              <li><a href="/regulatoryDisclosures">Regulatory Disclosures</a></li>
              <li><a href="/cookiePolicy">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className='outer'>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
    <p>&copy; 2025 All Rights Reserved, Lendify®️</p>
    </div>
    </div>
  )
}

export default Footer