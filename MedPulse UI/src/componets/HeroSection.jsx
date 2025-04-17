import React from 'react';
import { FaPlay } from "react-icons/fa";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
   return (
      <div id='Home' className="bg-gray-200 py-10 px-5 md:px-20 sm:h-[78vh]">
         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16">
            {/* Left Content */}
            <div className="space-y-4 text-center sm:text-left sm:pl-44">
               <span className=" flex gap-4 justify-center sm:justify-start text-blue-600 font-semibold uppercase tracking-wide">
                  Ideas Thrive <ArrowRight />
               </span>
               <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
                  Medical Is a Field <br />
                  That Encompasses <br />
                  The Study Life
               </h1>
               <p className="text-gray-600">
                  As an AI language model, I don't have personal opinion
               </p>
               <div className="flex justify-center sm:justify-start items-center space-x-4 text-center">
                  <button className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700">
                     <span>Read More</span>
                     <span className="text-lg font-bold">+</span>
                  </button>
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                     <div className="bg-blue-100 p-2 rounded-full">
                        <FaPlay />
                     </div>
                     <span>See How It Works</span>
                  </button>
               </div>
            </div>

            {/* Right Content */}
            <div >
               <div >
                  <div className="rounded-full object-cover bg-white shadow-md   mx-auto w-64 h-64 md:w-80 md:h-80">
                     <img
                        src="https://primisconnect2wisdom.com/wp-content/uploads/2024/05/man_header.png"
                        alt="Doctors"
                        className="w-full h-full"
                     />
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroSection;