import React, { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { packages } from '@/data';
import NotFound from '@/pages/NotFound';
import { motion } from 'framer-motion';
import { Clock, Check, X, ArrowRight, Map } from 'lucide-react';

export default function PackageDetail() {
  const [, params] = useRoute('/packages/:slug');
  const pkg = packages.find(p => p.slug === params?.slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.slug]);

  if (!pkg) return <NotFound />;

  return (
    <main className="min-h-screen pb-24">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-end">
        <div className="absolute inset-0">
          <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Link href="/packages" className="text-primary hover:text-primary/80 uppercase tracking-widest text-xs font-semibold mb-6 inline-block transition-colors">
            &larr; Back to Packages
          </Link>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">{pkg.title}</h1>
          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-lg">{pkg.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Map className="w-5 h-5 text-primary" />
              <span className="text-lg">Direct Route</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            <section>
              <h2 className="text-3xl font-serif mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                {pkg.description}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif mb-8">Itinerary</h2>
              <div className="space-y-8">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {/* Line connection */}
                    {index !== pkg.itinerary.length - 1 && (
                      <div className="absolute left-[11px] top-8 bottom-[-32px] w-[1px] bg-white/10" />
                    )}
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1 relative z-10">
                      <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-2">{item.day}</h4>
                      <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card border border-white/5 p-8">
              <div>
                <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                  <Check className="text-green-500 w-5 h-5" /> Inclusions
                </h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-2 shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                  <X className="text-red-400 w-5 h-5" /> Exclusions
                </h3>
                <ul className="space-y-3">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="text-muted-foreground font-light flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2 shrink-0" />
                      {exc}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-card border border-primary/20 p-8 shadow-2xl">
              <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-2">Starting Rate</span>
              <div className="text-5xl font-serif text-primary mb-8">{pkg.startingPrice}</div>
              
              <div className="space-y-4 mb-8 text-sm text-muted-foreground font-light">
                <p>• Final price depends on selected vehicle.</p>
                <p>• Outstation minimum billing terms apply.</p>
                <p>• Free cancellation up to 24 hours prior.</p>
              </div>

              <Link 
                href={`/contact?route=${pkg.slug}`}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
              >
                Inquire About Route
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}