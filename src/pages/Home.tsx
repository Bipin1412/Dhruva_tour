import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';
import { contactInfo, cars, faqs } from '@/data';
import { CarSearchForm } from '@/components/booking/CarSearchForm';

const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2200&auto=format&fit=crop"
            alt="Premium car on the road"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a120c]/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a120c]/40 via-[#1a120c]/60 to-[#120d09]" />
        </div>

        <div className="relative mx-auto grid min-h-[100dvh] max-w-7xl items-center gap-10 px-4 py-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 backdrop-blur"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Premium car rentals and chauffeur service
            </motion.div>

            <motion.h1
              className="max-w-3xl text-5xl font-serif leading-[1.05] text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Search the right car for every trip.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/78 sm:text-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Search cars by pickup and return details, compare daily prices,
              and book the vehicle that fits your route, budget, and comfort.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Link
                href="/cars"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Browse Available Cars
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-3 font-medium text-white transition-colors hover:bg-white/15"
              >
                WhatsApp Us
              </a>
            </motion.div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { value: '24/7', label: 'Dispatch' },
                { value: '5+', label: 'Car Types' },
                { value: 'No', label: 'Hidden Fees' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur"
                >
                  <div className="text-2xl font-serif text-white">
                    {item.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <CarSearchForm />
          </div>

          <motion.div
            className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/55"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { value: '15,000+', label: 'Trips Completed' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '120+', label: 'Verified Drivers' },
            { value: '24/7', label: 'Customer Support' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-serif text-primary">
                {item.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.24em] text-primary">
                Browse Available Cars
              </span>
              <h2 className="text-4xl font-serif md:text-5xl">
                Compare cars by seats, fuel type, and price per day.
              </h2>
            </div>
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
            >
              View all cars
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cars.slice(0, 3).map((car, index) => (
            <FadeIn key={car.id} delay={index * 0.12}>
              <div className="group flex h-full flex-col overflow-hidden border border-foreground/10 bg-card transition-colors hover:border-primary/30">
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
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-serif">{car.name}</h3>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <span>{car.transmission}</span>
                    <span className="h-1 w-1 rounded-full bg-foreground/20" />
                    <span>{car.fuelType}</span>
                    <span className="h-1 w-1 rounded-full bg-foreground/20" />
                    <span>{car.seats} seats</span>
                  </div>

                  <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                    {car.features.slice(0, 3).map((feature) => (
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
                          ₹{car.pricePerDay.toLocaleString()}
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
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-y border-foreground/10 bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            {
              icon: Clock,
              title: 'Fast search',
              desc: 'Enter pickup and return details, then instantly filter the cars that fit your trip.',
            },
            {
              icon: ShieldCheck,
              title: 'Transparent rules',
              desc: 'Mileage limits, fuel policy, deposit, and cancellation terms are shown before booking.',
            },
            {
              icon: CheckCircle2,
              title: 'Book confidently',
              desc: 'Review the car details page and move straight to reservation with fewer steps.',
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-foreground/10 bg-background text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-serif">{item.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-serif">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`overflow-hidden border border-foreground/10 bg-background transition-all duration-300 ${
                  openFaq === index ? 'ring-1 ring-primary/30' : ''
                }`}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="pr-6 text-lg font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 text-muted-foreground transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2200&auto=format&fit=crop"
            alt="Road trip background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1a120c]/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl font-serif text-white md:text-6xl">
              Ready to compare cars?
            </h2>
            <p className="mt-6 text-xl font-light text-white/78">
              Search the inventory, inspect the rules, and book the right car in
              a few clicks.
            </p>
            <Link
              href="/cars"
              className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Searching
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
