import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cars } from '@/data';

export default function Fleet() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 mt-10 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 block text-sm font-semibold uppercase tracking-[0.24em] text-primary"
          >
            Our Vehicles
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-serif md:text-6xl"
          >
            The Fleet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg font-light leading-relaxed text-muted-foreground"
          >
            Browse the cars available for booking. Each vehicle shows its
            category, price per day, features, and booking details so the user
            can move directly into the new React booking flow.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car, index) => (
            <motion.article
              key={car.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08 }}
              className="group overflow-hidden border border-foreground/10 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                  {car.category}
                </div>
              </div>

              <div className="flex h-full flex-col p-6">
                <h2 className="text-2xl font-serif">{car.name}</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span>{car.transmission}</span>
                  <span className="self-center h-1 w-1 rounded-full bg-foreground/20" />
                  <span>{car.fuelType}</span>
                  <span className="self-center h-1 w-1 rounded-full bg-foreground/20" />
                  <span>{car.seats} seats</span>
                </div>

                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {car.features.slice(0, 4).map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-foreground/10 pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        Price / day
                      </div>
                      <div className="text-2xl font-serif text-primary">
                        Rs {car.pricePerDay.toLocaleString()}
                      </div>
                    </div>
                    <Link
                      href={`/cars/${car.id}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
