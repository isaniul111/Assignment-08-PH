import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 border-b border-gray-700 pb-8">
        <div className="col-span-2">
          <h2 className="text-xl font-bold text-white">HERO.IO</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Hero-Apps is a modern and dynamic web application that allows users to explore, install, and uninstall
            various hero-themed apps.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Sales
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Download Apps
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebook /> BCS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter /> @CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin /> CS — Ticket System
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-6">© 2025 Hero.Io. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
