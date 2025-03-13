import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="text-black text-center p-4 mt-4 rounded" style={{ background: 'linear-gradient(to right, #d3d1d6, #ffffff)' }}>
        <div className="container">
          <p>&copy; 2025 Car Collection. All rights reserved.</p>
          <p>Explore our collection of premium cars. Follow us on social media for the latest updates.</p>
          <div className="social-icons mt-2">
            <a href="#" className="me-3 text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="me-3 text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="me-3 text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="me-3 text-white"><i className="fab fa-linkedin"></i></a>
          </div>
          <p className="mt-3">
            <a href="#" className="text-black">Privacy Policy</a> | 
            <a href="#" className="text-black"> Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
