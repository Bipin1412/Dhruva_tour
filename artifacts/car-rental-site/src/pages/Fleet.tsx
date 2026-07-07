import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { fleet } from '@/data';
import { ArrowRight, Check } from 'lucide-react';

export default function Fleet() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 mt-10">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary tracking-widest text-sm font-semibold uppercase mb-4 block"
          >
            Our Vehicles
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            The Fleet
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-light leading-relaxed"
          >
            Every vehicle in our fleet is meticulously maintained, thoroughly sanitized before every trip, and driven by a verified professional. Select the perfect match for your journey.
          </motion.p>
        </div>

        <div className="space-y-16 lg:space-y-24 mb-24">
          {fleet.map((car, index) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[450px] overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/5 p-4 lg:p-0">
                <div className="inline-block px-3 py-1 border border-primary/30 text-primary text-xs uppercase tracking-wider mb-6">
                  {car.category}
                </div>
                <h2 className="text-3xl lg:text-4xl font-serif mb-4">{car.name}</h2>
                
                <div className="flex items-end gap-3 mb-8 pb-8 border-b border-white/10">
                  <span className="text-4xl font-medium text-primary">{car.ratePerKm}</span>
                  <span className="text-muted-foreground mb-1 uppercase tracking-wider text-sm">Rate</span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Capacity</span>
                    <span className="font-medium text-lg">{car.capacity}</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Luggage</span>
                    <span className="font-medium text-lg">{car.luggage}</span>
                  </div>
                  
                  <div className="col-span-2 mt-4 space-y-3">
                    {car.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/contact?vehicle=${car.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
                >
                  Book This Car
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Policy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-white/10 p-8 md:p-12"
        >
          <h3 className="text-2xl font-serif mb-8 text-center">Important Terms & Conditions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-primary font-medium mb-2">Minimum Billing</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Outstation trips are subject to a minimum charge of 300 km per calendar day. For Mumbai return trips, 350 km per day applies.
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-2">Driver Allowance</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A daily driver allowance of ₹500 applies. Night driving (10 PM to 6 AM) incurs an additional ₹500 night charge.
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-2">Extras</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tolls, state entry taxes, and parking charges are extra and to be borne by the customer on actuals.
              </p>
            </div>
            <div>
              <h4 className="text-primary font-medium mb-2">Taxes</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GST is applicable on the final bill amount. Corporate invoices available on request.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}