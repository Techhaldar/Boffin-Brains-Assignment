import React from 'react';
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
   return (
      <>
         {/* Top Bar */}
         <div className="bg-gray-900 text-white text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center py-2 px-4">
               <div className="flex items-center space-x-6">
                  <a href="#" className="text-lime-400 font-semibold">
                     Envato Market
                  </a>
               </div>
               <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded mt-2 md:mt-0">
                  Buy Now
               </button>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-2 bg-white shadow-md">
            {/* Logo Section */}
            <div className="sm:row-span-2 sm:col-span-2 bg-blue-700 flex justify-center items-center py-4 sm:py-0">
               <div className="text-white px-3 py-2">
                  <h1 className="text-lg font-bold text-center">
                     <span className="block">MedPulse</span>
                  </h1>
               </div>
            </div>

            {/* Contact Info and Social Icons */}
            <div className="sm:col-span-10">
               <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-6 text-gray-700 font-bold">
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
                     <div className="flex items-center space-x-1">
                        <IoCallOutline className="text-xl" />
                        <span>+91 7052 101 786</span>
                     </div>
                     <div className="flex items-center space-x-1">
                        <CgMail className="text-xl" />
                        <span>info@example.com</span>
                     </div>
                     <div className="flex items-center space-x-1">
                        <IoLocationOutline className="text-xl" />
                        <span>Cumilla Sadar 10299</span>
                     </div>
                  </div>
                  <div className="flex space-x-4 mt-4 sm:mt-0">
                     <a href="#" className="text-gray-700 hover:text-blue-600"><FaFacebookF /></a>
                     <a href="#" className="text-gray-700 hover:text-pink-500"><FaInstagram /></a>
                     <a href="#" className="text-gray-700 hover:text-blue-400"><FaTwitter /></a>
                     <a href="#" className="text-gray-700 hover:text-red-600"><FaYoutube /></a>
                  </div>
               </div>
            </div>

            {/* Navigation Bar */}
            <div className="sm:col-span-10">
               <nav className="bg-gray-100">
                  <div className="flex flex-col md:flex-row justify-between items-center py-3 px-6 space-y-4 md:space-y-0">
                     <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-700">
                        <li>
                           <a href="#" className="hover:text-blue-700">Home</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-blue-700">About Us</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-blue-700">Services</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-blue-700">Projects</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-blue-700">Blog</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-blue-700">Pages</a>
                        </li>
                        <li>
                           <a href="#" className="hover:text-blue-700">Contact Us</a>
                        </li>
                     </ul>
                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Get A Quote
                     </button>
                  </div>
               </nav>
            </div>
         </div>
      </>
   );
};

export default Header;
