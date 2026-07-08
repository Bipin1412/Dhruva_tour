import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { contactInfo } from '@/data';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const darkText = scrolled || location !== '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Services', href: '/services' },
    { name: 'Packages', href: '/packages' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md border-b border-foreground/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Dhruva Tour home">
            <img
              src="/dhruva_logo-kSTvWFFw.jpeg"
              alt="Dhruva Tours & Travels"
              className="h-14 w-auto max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-16"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  darkText
                    ? 'text-black hover:text-black/80'
                    : 'text-white/90 hover:text-white'
                } ${
                  location === link.href
                    ? darkText
                      ? 'text-black'
                      : 'text-white'
                    : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-none font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div id="mobile-nav" className="md:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-3 text-base font-medium border-b border-foreground/10 ${
                  darkText
                    ? 'text-black'
                    : location === link.href
                      ? 'text-white'
                      : 'text-white/90'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <a 
                href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                className="flex justify-center items-center gap-2 bg-primary text-primary-foreground w-full px-5 py-3 font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
