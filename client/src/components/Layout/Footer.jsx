import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* CONNECT WITH US */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="h5 font-weight-bold mb-3">CONNECT WITH US</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-3"
            />
            <div>
              {/* Social media icons */}
              <div className="d-flex">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <AiFillYoutube className="h3" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaFacebookF className="h3" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaInstagramSquare className="h3" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white mx-2"
                >
                  <FaTwitter className="h3" />
                </a>
              </div>
              <p className="mt-3 small">
                © Copyright 2023 Croma. All rights reserved.
              </p>
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="h5 font-weight-bold mb-3">USEFUL LINKS</h3>
            <div className="row">
              <ul className="list-unstyled col-6">
                <li className="mb-2">
                  <Link to="/about" className="text-white text-decoration-none">About JUMIA</Link>
                </li>
                <li className="mb-2">
                  <Link to="/return-policy" className="text-white text-decoration-none">Return Policy</Link>
                </li>
                <li className="mb-2">
                  <Link to="/b2b-orders" className="text-white text-decoration-none">B2B Orders</Link>
                </li>
                <li className="mb-2">
                  <Link to="/store-locator" className="text-white text-decoration-none">Store Locator</Link>
                </li>
                <li className="mb-2">
                  <Link to="/e-waste" className="text-white text-decoration-none">E-Waste</Link>
                </li>
                <li className="mb-2">
                  <Link to="/help" className="text-white text-decoration-none">Help And Support</Link>
                </li>
              </ul>
              <ul className="list-unstyled col-6">
                <li className="mb-2">
                  <Link to="/franchise" className="text-white text-decoration-none">Franchise</Link>
                </li>
                <li className="mb-2">
                  <Link to="/site-map" className="text-white text-decoration-none">Site Map</Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms-of-use" className="text-white text-decoration-none">Terms Of Use</Link>
                </li>
                <li className="mb-2">
                  <Link to="/disclaimer" className="text-white text-decoration-none">Disclaimer</Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link>
                </li>
                <li className="mb-2">
                  <Link to="/unboxed" className="text-white text-decoration-none">Unboxed</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h3 className="h5 font-weight-bold mb-3">PRODUCTS</h3>
            <div className="row">
              <ul className="list-unstyled col-6">
                <li className="mb-2">
                  <Link to="/home-appliances" className="text-white text-decoration-none">Home Appliances</Link>
                </li>
                <li className="mb-2">
                  <Link to="/phones-wearables" className="text-white text-decoration-none">Phones & Wearables</Link>
                </li>
                <li className="mb-2">
                  <Link to="/computers-tablets" className="text-white text-decoration-none">Computers & Tablets</Link>
                </li>
                <li className="mb-2">
                  <Link to="/kitchen-appliances" className="text-white text-decoration-none">Kitchen Appliances</Link>
                </li>
                <li className="mb-2">
                  <Link to="/audio-video" className="text-white text-decoration-none">Audio & Video</Link>
                </li>
              </ul>
              <ul className="list-unstyled col-6">
                <li className="mb-2">
                  <Link to="/health-fitness" className="text-white text-decoration-none">Health & Fitness</Link>
                </li>
                <li className="mb-2">
                  <Link to="/grooming-personal" className="text-white text-decoration-none">Grooming & Personal</Link>
                </li>
                <li className="mb-2">
                  <Link to="/cameras-accessories" className="text-white text-decoration-none">Cameras & Accessories</Link>
                </li>
                <li className="mb-2">
                  <Link to="/gaming" className="text-white text-decoration-none">Gaming</Link>
                </li>
                <li className="mb-2">
                  <Link to="/accessories" className="text-white text-decoration-none">Accessories</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
