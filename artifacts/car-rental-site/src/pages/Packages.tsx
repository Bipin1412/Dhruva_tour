import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { packages } from '@/data';
import { Clock, ArrowRight } from 'lucide-react';

export default function Packages() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-widest text-sm font-semibold uppercase mb-4 block"
          >
            Curated Routes
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Tour Packages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed"
          >
            Fixed-rate itineraries for our most popular destinations. Predictable pricing, optimized routing, and complete peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-white/5 hover:border-white/20 transition-all group flex flex-col"
            >
              <Link href={`/packages/${pkg.slug}`} className="block flex-1 flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <h3 className="text-2xl font-serif text-white">{pkg.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  
                  <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-1 line-clamp-3">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Starting From</span>
                      <span className="text-xl font-medium">{pkg.startingPrice}</span>
                    </div>
                    <div className="text-primary flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}