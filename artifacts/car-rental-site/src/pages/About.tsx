import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Clock, Map } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif mb-8"
            >
              Built on absolute reliability.
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed"
            >
              <p>
                Journeymate began with a simple observation: the Indian private transport sector was plagued by unpredictability. Cabs cancelled at the last minute, hidden charges appeared at the end of the trip, and vehicle quality was always a gamble.
              </p>
              <p>
                We decided to build an alternative for those who value their time and peace of mind. We don't aggregate random drivers. We operate a tightly controlled network of verified professionals and well-maintained premium vehicles.
              </p>
              <p className="text-primary font-medium">
                When you book with us, the car arrives. The price is exactly what was quoted. The journey is seamless.
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-square lg:aspect-[4/5] border border-white/5 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1518081461904-9d8f136351c2?w=1200&auto=format&fit=crop" 
              alt="Driver holding door" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* The Process */}
      <section className="bg-card border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-6">Our Core Commitments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Vetted Chauffeurs",
                desc: "Every driver must pass a 5-point background check and demonstrate a minimum of 5 years of safe highway driving experience."
              },
              {
                icon: Target,
                title: "Zero Surge Pricing",
                desc: "Our rates are fixed. Rain, traffic, or holidays — the price you are quoted is the price you pay. Always."
              },
              {
                icon: Clock,
                title: "Punctuality Guarantee",
                desc: "Drivers are dispatched to arrive 15 minutes before your scheduled pickup time. We never keep you waiting."
              },
              {
                icon: Map,
                title: "Wide Coverage",
                desc: "Serving Pune, Mumbai, Nashik, Shirdi, and destinations across Maharashtra with local expertise."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-background border border-white/10 flex items-center justify-center mb-6 text-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

    </main>
  );
}