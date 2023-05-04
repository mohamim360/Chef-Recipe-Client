import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-dark text-light '>
      <div className="container p-5 ">
        <div className="row">
          <div className="col-md-4">
            <h4>Site Map</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Follow us on <a href="#">Twitter</a> and <a href="#">Facebook</a></p>
          </div>
          <div className="col-md-4">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-use">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2023 Example, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
