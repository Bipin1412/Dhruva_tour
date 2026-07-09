import React from 'react';
import { Link } from 'wouter';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { contactInfo } from '@/data';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-foreground/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold tracking-wide text-foreground">
                DHRUVA TOUR
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Premium private car hire and outstation tours. No surprises, just impeccable service and absolute reliability.
            </p>
            <div className="flex space-x-4">
              <a href={contactInfo.socials.instagram} aria-label="Follow us on Instagram" className="text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={contactInfo.socials.facebook} aria-label="Follow us on Facebook" className="text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={contactInfo.socials.twitter} aria-label="Follow us on Twitter" className="text-foreground/60 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/cars" className="text-muted-foreground hover:text-primary transition-colors">Browse Cars</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/packages" className="text-muted-foreground hover:text-primary transition-colors">Tour Packages</Link></li>
              <li><Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Popular Routes</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/packages/pune-mumbai" className="text-muted-foreground hover:text-primary transition-colors">Pune to Mumbai</Link></li>
              <li><Link href="/packages/pune-shirdi" className="text-muted-foreground hover:text-primary transition-colors">Pune to Shirdi</Link></li>
              <li><Link href="/packages/pune-nashik" className="text-muted-foreground hover:text-primary transition-colors">Pune to Nashik</Link></li>
              <li><Link href="/packages/pune-mahabaleshwar" className="text-muted-foreground hover:text-primary transition-colors">Pune to Mahabaleshwar</Link></li>
              <li><Link href="/packages/mumbai-nashik" className="text-muted-foreground hover:text-primary transition-colors">Mumbai to Nashik</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Dhruva Tour. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
