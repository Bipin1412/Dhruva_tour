import React from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Briefcase, Heart, Compass, Route } from 'lucide-react';
import { Link } from 'wouter';

const servicesList = [
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Punctual, stress-free transfers to and from Pune and Mumbai international airports. We track your flight to ensure we are there when you land.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop"
  },
  {
    icon: Route,
    title: "One-Way Drops",
    desc: "Pay only for the distance you travel. Dedicated one-way cabs between Pune, Mumbai, Nashik, and other major cities with transparent pricing.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop"
  },
  {
    icon: MapPin,
    title: "Outstation Trips",
    desc: "Multi-day travel across states with an experienced chauffeur at your disposal. Flexible itineraries and comfortable premium vehicles.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop"
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    desc: "Executive transportation for business professionals. Monthly billing, GST invoices, and priority booking for corporate accounts.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop"
  },
  {
    icon: Heart,
    title: "Wedding Rentals",
    desc: "Luxury cars for the groom, bridal party, and guest transportation. Spotless vehicles driven by uniformed chauffeurs.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&auto=format&fit=crop"
  },
  {
    icon: Compass,
    title: "Custom Tours",
    desc: "Tailor-made itineraries for sightseeing. Whether it's the temples of Shirdi or the vineyards of Nashik, we build the perfect route.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-widest text-sm font-semibold uppercase mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Premium Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed"
          >
            From executive airport runs to multi-day outstation tours, we deliver a consistent standard of excellence across all our transportation services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-card border border-white/5 hover:border-primary/30 transition-all flex flex-col h-full overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-primary w-12 h-12 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light mb-8 flex-1">
                    {service.desc}
                  </p>
                  
                  <Link 
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-primary uppercase tracking-widest text-sm font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2 w-max"
                  >
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </main>
  );
}