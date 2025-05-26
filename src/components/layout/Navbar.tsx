import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Venues', path: '/venues' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/cf3a435b-4c2f-4f74-87d5-268b62dcd5bd.png" 
            alt="Ms Dee's Event Center" 
            className="h-12 md:h-16" 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="px-3 py-2 text-gold-700 hover:text-gold-500 transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="text-gold-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="py-2 text-gold-700 hover:text-gold-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
