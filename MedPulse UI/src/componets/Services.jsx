import React from "react";
import { FaVials, FaUserMd, FaHeartbeat, FaAmbulance, FaWalking } from 'react-icons/fa';
import { GiScalpel } from 'react-icons/gi';

const Services = () => {
   return (
      <div className="bg-gray-50 py-16 px-5 md:px-20 pt-20">
         {/* Title Section */}
         <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold uppercase tracking-wide">
               Our Latest Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
               Compassionate care always starts with us
            </h2>
         </div>

         {/* Services Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:w-[70vw] m-auto">

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
               <div className="text-gray-500 text-4xl mb-4 w-16 m-auto rounded-full bg-gray-200 py-3 pl-3"><FaVials /></div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Diagnostic Tests
               </h3>
               <p className="text-gray-600">
                  Health care is an essential category that encompasses a wide range
                  of services aimed at promoting and maintaining.
               </p>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6 text-center">
               <div className="text-gray-500 text-4xl mb-4 w-16 m-auto rounded-full bg-gray-200 py-3 pl-3"><FaUserMd /></div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Specialist Consultations
               </h3>
               <p className="text-gray-600">
                  Health care is an essential category that encompasses a wide range
                  of services aimed at promoting and maintaining.
               </p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
               <div className="text-gray-500 text-4xl mb-4 w-16 m-auto rounded-full bg-gray-200 py-3 pl-3"><FaHeartbeat /></div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Chronic Disease
               </h3>
               <p className="text-gray-600">
                  Health care is an essential category that encompasses a wide range
                  of services aimed at promoting and maintaining.
               </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
               <div className="text-gray-500 text-4xl mb-4 w-16 m-auto rounded-full bg-gray-200 py-3 pl-3"><GiScalpel /></div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Surgical Procedures
               </h3>
               <p className="text-gray-600">
                  Health care is an essential category that encompasses a wide range
                  of services aimed at promoting and maintaining.
               </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
               <div className="text-gray-500 text-4xl mb-4 w-16 m-auto rounded-full bg-gray-200 py-3 pl-3"><FaAmbulance /></div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Emergency Medical
               </h3>
               <p className="text-gray-600">
                  Health care is an essential category that encompasses a wide range
                  of services aimed at promoting and maintaining.
               </p>
            </div><div className="bg-white shadow-md rounded-lg p-6 text-center">
               <div className="text-gray-500 text-4xl mb-4 w-16 m-auto rounded-full bg-gray-200 py-3 pl-3"><FaWalking /></div>
               <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Physical Therapy
               </h3>
               <p className="text-gray-600">
                  Health care is an essential category that encompasses a wide range
                  of services aimed at promoting and maintaining.
               </p>
            </div>
         </div>
      </div>
   );
};
export default Services;
