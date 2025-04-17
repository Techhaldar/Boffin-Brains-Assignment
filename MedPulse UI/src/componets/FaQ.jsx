import React from 'react';
import { Mail, Phone, ArrowUp, BriefcaseMedical } from 'lucide-react';
import FaqList from './FaqList';


const FaqSection = () => {
  return (
    <section className="bg-gray-100 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left side content */}
        <div>
          <p className="text-sm text-blue-500 font-semibold flex items-center gap-2 mb-3">
            <span className="text-base"><BriefcaseMedical /></span> ASK ANYTHING
          </p>
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Caring for you every step <br /> of the way <span className="text-black">Caring</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum'
          </p>

          {/* Contact Box */}
          <div className="bg-white shadow-md rounded-md p-6 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-600" />
              <div>
                <p>Main Email : contact@website</p>
                <p>ComInquiries : info@mail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-blue-600" />
              <div>
                <p>Telephone : 0029129102320</p>
                <p>Mobile : 000 2324 39493</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - FAQ */}
        <div className="space-y-4">
          {/* Active item */}
          <div className="bg-white rounded border p-4">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">1. How does this service work?</h4>
              <ArrowUp className="text-blue-600" />
            </div>
            <p className="text-gray-500 mt-2 text-sm">
              Dictum ultrices porttitor amet nec sollicitudin mi molestie adipiscing. Lorem at ac ut morbi
              ullamcorper molestie lacus. Euismod nulla viverra the most important thing is that condimentum.
            </p>
          </div>

          {/* Inactive items */}
          <FaqList />

        </div>
      </div>
    </section>
  );
}

export default FaqSection;
