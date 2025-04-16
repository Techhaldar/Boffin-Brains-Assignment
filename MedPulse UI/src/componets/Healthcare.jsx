import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa";

const Healthcare = () => {
   return (
      <>
         <section className="bg-[#004aad] text-white py-20 px-5 mt-16">
            <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
               {/* Left */}
               <div className="flex-1 md:mr-5 relative bottom-12">
                  <p className="text-sm uppercase text-[#84d2f5] mb-2"><FaBriefcaseMedical className="inline " /> OUR LATEST SERVICE</p>
                  <h1 className="text-4xl font-bold mb-5">A Journey Health Together</h1>
                  <p className="text-base mb-5">
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit.
                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit.
                  </p>
                  <button className="bg-white text-[#004aad] px-5 py-2 rounded font-medium flex items-center">
                     Read More <span className="ml-2">+</span>
                  </button>
               </div>

               {/* Center */}
               <div className="flex-1 text-center relative bottom-10">
                  <img 
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmIaL00JJ8arNHmQ59m-5JMwBs6i0TmfUxrOKg2cOuWDMo5jm"
                     alt="Medical Illustration"
                     className="w-full h-auto rounded-lg "
                  />
               </div>

               {/* Right */}
               <div className="flex-1 md:ml-5 relative bottom-12" >
                  <div className="p-5 rounded mb-5">
                     <h3 className="text-lg font-semibold mb-2">MedNest Wellness</h3>
                     <p className="text-sm text-[#cce6f7]">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit.
                     </p>
                  </div>
                  <div className="p-5 rounded mb-5">
                     <h3 className="text-lg font-semibold mb-2">Pulse Care Solutions</h3>
                     <p className="text-sm text-[#cce6f7]">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit.
                     </p>
                  </div>
                  <div className="p-5 rounded">
                     <h3 className="text-lg font-semibold mb-2">Wellness Wave</h3>
                     <p className="text-sm text-[#cce6f7]">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur odit aut fugit.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Appointment Section */}
         <section className="bg-[#f7f7f7] py-8 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto bg-gray-300 p-10 rounded relative bottom-32">
               <input
                  type="text"
                  placeholder="First Name"
                  className="p-2 text-base border border-gray-300 rounded"
               />
               <select className="p-2 text-base border border-gray-300 rounded">
                  <option>Specialist</option>
               </select>
               <input
                  type="time"
                  className="p-2 text-base border border-gray-300 rounded"
               />
               <input
                  type="text"
                  placeholder="Location"
                  className="p-2 text-base border border-gray-300 rounded"
               />
               <input
                  type="date"
                  className="p-2 text-base border border-gray-300 rounded"
               />
               <button className="bg-[#004aad] text-white px-4 py-2 text-base font-medium rounded cursor-pointer">
                  Appointment Now <span className="ml-2">+</span>
               </button>
            </div>
         </section>
      </>
   );
}

export default Healthcare;