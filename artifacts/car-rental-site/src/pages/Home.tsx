import React, { useEffect } from 'react';
import { Link } from 'wouter';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, MessageCircle, Star } from 'lucide-react';
import { contactInfo, faqs, fleet, packages, testimonials } from '@/data';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
  >
    {children}
  </motion.div>
);

const Counter = ({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);

  React.useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-[#2F1E0E]/65 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F1E0E]/90 via-[#2F1E0E]/25 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=2000&auto=format&fit=crop" 
            alt="Luxury car on a mountain road" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary tracking-[0.2em] text-sm font-semibold uppercase mb-6 block">
              Premium Chauffeur Services
            </span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The Journey <br />
            <span className="italic text-white/90">Elevated.</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Private car hire and outstation tours from Pune. Verified drivers, transparent per-km pricing, and absolute reliability.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-primary text-primary-foreground font-medium w-full sm:w-auto hover:bg-primary/90 transition-colors tracking-wide flex items-center justify-center gap-2 group"
            >
              Reserve Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 font-medium w-full sm:w-auto hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-card border-y border-foreground/10 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 divide-x divide-foreground/10">
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                <Counter end={15} suffix=",000+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Completed Trips</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary mb-2 flex justify-center items-center gap-1">
                <Counter end={4} suffix=".9" duration={1} />
                <Star className="w-6 h-6 fill-primary text-primary" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Average Rating</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Dispatch Ready</div>
            </div>
            <div className="text-center px-4">
              <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
                <Counter end={120} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Verified Drivers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Impeccable Fleet</h2>
              <p className="text-lg text-muted-foreground font-light">
                Maintained to the highest standards. Disinfected before every trip. Driven by professionals.
              </p>
            </div>
            <Link href="/fleet" className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group whitespace-nowrap">
              View All Vehicles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.slice(0, 3).map((car, i) => (
            <FadeIn key={car.id} delay={i * 0.2}>
              <div className="bg-card group rounded-sm overflow-hidden border border-foreground/10 hover:border-primary/30 transition-colors h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10" />
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 text-xs tracking-wider text-primary font-medium z-20">
                    {car.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col relative z-20 -mt-10">
                  <h3 className="text-2xl font-serif mb-2">{car.name}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-6">
                    <span>{car.capacity}</span>
                    <span className="w-1 h-1 rounded-full bg-foreground/20 self-center" />
                    <span>{car.luggage}</span>
                  </div>
                  <div className="mt-auto pt-6 border-t border-foreground/10 flex justify-between items-center">
                    <div>
                      <span className="text-sm text-muted-foreground block mb-1">Starting from</span>
                      <span className="text-xl font-medium text-primary">{car.ratePerKm}</span>
                    </div>
                    <Link href={`/contact?vehicle=${car.id}`} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24 bg-card border-y border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-primary tracking-widest text-sm font-semibold uppercase mb-4 block">
                Popular Routes
              </span>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Frequent Journeys</h2>
              <p className="text-lg text-muted-foreground font-light">
                Fixed, transparent pricing for common intercity routes. No surge pricing, no hidden fees.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <FadeIn key={pkg.slug} delay={i * 0.1}>
                <Link href={`/packages/${pkg.slug}`}>
                  <div className="group flex items-center justify-between p-6 bg-background border border-foreground/10 hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <h4 className="text-xl font-serif mb-1 group-hover:text-primary transition-colors">{pkg.title}</h4>
                      <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                    </div>
                    <div className="text-right relative z-10">
                      <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">From</p>
                      <p className="text-lg font-medium">{pkg.startingPrice}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/packages" className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors uppercase tracking-widest text-sm">
              View All Tour Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-card/30 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-serif mb-8">The Dhruva Tour Standard</h2>
                <div className="space-y-8">
                  {[
                    { title: "No Surprise Pricing", desc: "Clear per-km rates or fixed package costs. GST invoices available for corporate billing." },
                    { title: "Strictly Verified Drivers", desc: "Commercial licenses, background checks, and minimum 5 years highway experience required." },
                    { title: "Immaculate Vehicles", desc: "Our fleet is serviced rigorously and detailed before every dispatch." },
                    { title: "24/7 Concierge Support", desc: "Change of plans? Flight delayed? We are always on call." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                        <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <div className="relative">
              <FadeIn delay={0.2}>
                <div className="aspect-[4/5] overflow-hidden relative border border-foreground/15">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&auto=format&fit=crop" 
                    alt="Chauffeur holding door" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-card border border-foreground/10 p-8 max-w-sm hidden md:block shadow-2xl">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-primary text-primary" />)}
                  </div>
                  <p className="text-muted-foreground italic mb-4">"The only service I trust for my family's outstation trips. Punctual, polite, and perfectly safe."</p>
                  <p className="font-serif font-medium">— Siddharth R.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-card border-y border-foreground/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif mb-6">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`border border-foreground/10 bg-background overflow-hidden transition-all duration-300 ${openFaq === i ? 'ring-1 ring-primary/30' : ''}`}
                >
                  <button 
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
                    aria-expanded={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-medium pr-8 text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`px-6 text-muted-foreground font-light leading-relaxed transition-all duration-300 ease-in-out ${
                      openFaq === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#2F1E0E]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=2000&auto=format&fit=crop" 
            alt="Road" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white">Ready for the road?</h2>
            <p className="text-xl text-white/80 mb-12 font-light">Book your next journey with us and experience the difference.</p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors"
            >
              Start Booking
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}