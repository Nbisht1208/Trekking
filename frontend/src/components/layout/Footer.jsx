import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-[#0a1628] text-lg">
                M
              </div>
              <div className="leading-tight">
                <p className="font-bold text-sm text-white">Matrika Tours</p>
                <p className="text-xs text-yellow-400">& Travels</p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering women to explore the world fearlessly. Every journey thoughtfully crafted for safety, comfort, and unforgettable memories.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF size={12} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram size={12} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter size={12} />
              </a>
              <a href="#" className="w-8 h-8 bg-[#0d1f3c] hover:bg-yellow-500 hover:text-[#0a1628] text-gray-400 rounded-full flex items-center justify-center transition-colors">
                <FaYoutube size={12} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Packages', path: '/packages' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Popular Treks
            </h3>
            <ul className="space-y-2">
              {[
                'Valley of Flowers Trek',
                'Spiti Valley Adventure',
                'Kerala Backwater Bliss',
                'Rajasthan Heritage Trail',
                'Andaman Island Escape',
              ].map((trek) => (
                <li key={trek}>
                  <Link
                    to="/packages"
                    className="text-sm text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {trek}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-yellow-400 mt-1 shrink-0" />
                <span className="text-sm text-gray-400">
                  123 Trek Street, Dehradun, Uttarakhand, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-yellow-400 shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-yellow-400 shrink-0" />
                <a href="mailto:info@matrikatours.com" className="text-sm text-gray-400 hover:text-yellow-400 transition-colors">
                  info@matrikatours.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a2f4a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Matrika Tours & Travels. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/admin/login" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;