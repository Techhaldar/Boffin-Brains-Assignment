import React from "react";
import { BriefcaseMedical } from "lucide-react";


const workItems = [
   {
      title: "Pro Health Hub",
      desc: "Health care is an essential category that encompasses a wide range of services aimed at promoting and maintaining",
      icon: "https://static-web.hipra.com/2022-10/icones-patologies-web-04.png", // replace with actual icon path
   },
   {
      title: "Medi Health",
      desc: "Health care is an essential category that encompasses a wide range of services aimed at promoting and maintaining",
      icon: "https://hopemedicine.org/wp-content/uploads/2022/10/Muscular-skeletal-PNG.png",
   },
   {
      title: "Well Being Services",
      desc: "Health care is an essential category that encompasses a wide range of services aimed at promoting and maintaining",
      icon: "https://cdn-bknle.nitrocdn.com/mNUVQUpkFOEbUxdxdvTiAdCONxWDbJEH/assets/images/source/rev-045cad3/www.dentistryjust4kids.com/wp-content/uploads/2020/08/Be-Innovative-and-Open-Minded.svg",
   },
];

const WorkProcess = () => {
   return (
      <section id="Projects" className="py-16 text-center bg-white">
         <div className="mb-4 flex items-center justify-center gap-2 text-sm text-blue-600 font-medium">
            <BriefcaseMedical className="w-4 h-4" />
            <span>WORK PROCESS</span>
         </div>

         <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Compassionate care always <br className="hidden md:block" />
            starts with us
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {workItems.map((item, index) => (
               <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition relative pt-16"
               >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-700 rounded-md p-4">
                     <img src={item.icon} alt="Icon" className="w-12 h-12 rounded-full" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
               </div>
            ))}
         </div>
      </section>
   );
}

export default WorkProcess;
