
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/cf3a435b-4c2f-4f74-87d5-268b62dcd5bd.png" 
                alt="Ms Dee's Event Center" 
                className="h-16 mb-4 logo-white" // Changed to logo-white for white color
              />
            </Link>
            <p className="text-cream-200">
              The ultimate destination for unforgettable events! Our state-of-the-art venue is designed to accommodate a wide range of gatherings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-200 hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/venues" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Venues
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/bookings" className="text-cream-200 hover:text-gold-400 transition-colors">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-cream-200">3928 Lansing Ct, Dumfries, VA 22026</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gold-400 flex-shrink-0" />
                <span className="text-cream-200">571-660-8569 | 571-331-8837</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gold-400 flex-shrink-0" />
              <a href="mailto:info@msdeeseventcenter.com" className="text-cream-200 hover:text-gold-400 transition-colors">
                info@msdeeseventcenter.com
              </a>
            </li>
            <li className="mt-4 flex items-center space-x-4">
              <p className="text-gold-400 font-semibold mb-0">Connect With Us</p>
              <a href="#" aria-label="Facebook" className="text-cream-200 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-cream-200 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-cream-200 hover:text-gold-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-gold-400">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between text-cream-200">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between text-cream-200">
                <span>Saturday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-cream-200">
                <span>Sunday</span>
                <span>11:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-200 text-sm">
              &copy; {new Date().getFullYear()} thenovus.solutuons. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
