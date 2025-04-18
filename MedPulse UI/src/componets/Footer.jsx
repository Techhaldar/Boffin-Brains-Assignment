import { Mail, MapPin, Phone, ChevronRight, ArrowUp, Facebook, Instagram, Twitter, CalendarDays } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='Contact' className="bg-black text-white mt-20 sm:mt-40  relative">
      {/* Newsletter Section */}
      <div id='About' className="bg-blue-700 text-left sm:rounded-lg max-w-6xl mx-auto -mt-12 p-8 py-12 flex flex-col md:flex-row justify-between items-center gap-4 relative sm:bottom-24">
        <h2 className="text-3xl font-bold text-white">
          Subscribe Our <br /> newsletter For Any <br /> Update
        </h2>
        <div className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Email Address..."
            className="px-4 py-2 rounded w-full md:w-72"
          />
          <button className="bg-white  text-black sm:px-8 sm:py-4 rounded font-semibold">
            Subscribe Now +
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Brand */}
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2 mb-4">
            <span className="text-white">✚ MedPulse</span>
          </h1>
          <p>Lorem Ipsum is simply is dummy text</p>
          <div className="flex gap-4 mt-4">
            <Facebook className="bg-gray-800 p-1 rounded w-7 h-7" />
            <Instagram className="bg-gray-800 p-1 rounded w-7 h-7" />
            <Twitter className="bg-gray-800 p-1 rounded w-7 h-7" />
          </div>
        </div>

        {/* Services */}
        <div id='Pages'>
          <h2 className="font-bold mb-4">Services</h2>
          {["CarePlus", "HealthLink", "VitalityCare", "WellBeing Services", "MediAssist"].map((item, i) => (
            <p key={i} className="flex items-center gap-2 mb-2 text-sm">
              <ChevronRight size={16} /> {item}
            </p>
          ))}
        </div>

        {/* Latest Post */}
        <div>
          <h2 className="font-bold mb-4">Latest Post</h2>
          {[1, 2].map((_, i) => (
            <div key={i} className="mb-4 text-sm">
              <p className="font-semibold">The standard chunk of Lorem Ipsum</p>
              <p className="flex items-center text-gray-400 text-sm gap-1 mt-1">
                <CalendarDays size={14} /> 7 March, 2023
              </p>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-bold mb-4">Contact Us</h2>
          <p className="flex items-center gap-2 mb-2 text-sm">
            <Mail size={16} /> debra.holt@example.com
          </p>
          <p className="flex items-center gap-2 mb-2 text-sm">
            <MapPin size={16} /> 3891 Ranchview Dr. Richardson, California 62639
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone size={16} /> (+888) 123 456 765
          </p>
        </div>
      </div>
      {/* Bottom Bar */}
      <hr />
      <div className=" py-4 px-6 flex max-w-6xl justify-between items-center mx-auto text-xs text-gray-400 relative">
        <p>Copyright © MedPulse {new Date().getFullYear()}. All rights reserved.</p>
        <div className="flex items-center sm:gap-4">
          <p>Privacy Policy</p>
          <p>Terms Of Service</p>
          <p>Legal</p>
          <p className='sm:bg-blue-700 sm:p-4 rounded-full relative sm:bottom-1  sm:left-48 lg:left-24 '><a href="#logo"><ArrowUp /></a></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
