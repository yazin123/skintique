import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Information */}
          <div className="mb-6 md:mb-0">
          <Link href="/" >
           {/* <Image src='/logo1.png' className=" w-48 h-auto bg-cover" width={300} height={200}/> */}
           Skintique
          </Link>
            <p className="mb-2">Your beauty and aesthetics partner.</p>
            <p>123 Beauty St, Kerala, India</p>
            <p>Email: contact@skintique.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>

          {/* Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Subscription Form */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 py-2 px-4 rounded-l-lg focus:outline-none"
            />
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-r-lg hover:bg-yellow-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className="text-sm">© 2024 The Skintique. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
