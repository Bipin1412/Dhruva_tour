import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo, fleet, packages } from '@/data';
import { MapPin, Phone, Mail, CheckCircle2, Clock } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Contact() {
  const [location] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const prefilledVehicle = searchParams.get('vehicle');
  const prefilledRoute = searchParams.get('route');

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
    date: '',
    vehicle: prefilledVehicle || '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pure frontend app, just show success state
    setIsSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif mb-6"
          >
            Request a Vehicle
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-light"
          >
            Our dispatch team is available 24/7. Fill out the details below and we will confirm your booking within 15 minutes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-primary/30 p-12 text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-serif mb-4">Request Received</h2>
                <p className="text-muted-foreground font-light text-lg mb-8">
                  Thank you, {formData.name || 'guest'}. Our dispatch team will contact you shortly at {formData.phone} to confirm your booking and share driver details.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:text-primary/80 uppercase tracking-widest text-sm font-medium"
                >
                  Make another request
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                    <input 
                      required
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-muted-foreground">Pickup Location / City *</label>
                    <input 
                      required
                      type="text" 
                      name="pickup"
                      value={formData.pickup}
                      onChange={handleChange}
                      placeholder={prefilledRoute ? 'Pune' : ''}
                      className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-muted-foreground">Dropoff Location / City *</label>
                    <input 
                      required
                      type="text" 
                      name="dropoff"
                      value={formData.dropoff}
                      onChange={handleChange}
                      placeholder={prefilledRoute ? packages.find(p=>p.slug === prefilledRoute)?.title.split(' to ')[1] : ''}
                      className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-muted-foreground">Travel Date *</label>
                    <input 
                      required
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground [color-scheme:light]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm uppercase tracking-wider text-muted-foreground">Vehicle Preference</label>
                    <select 
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground appearance-none rounded-none"
                    >
                      <option value="">Select a vehicle (optional)</option>
                      {fleet.map(car => (
                        <option key={car.id} value={car.id}>{car.name} ({car.capacity})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm uppercase tracking-wider text-muted-foreground">Additional Details (Optional)</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Flight numbers, special requests, corporate billing details..."
                    className="w-full bg-background border border-foreground/15 px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-medium py-4 text-lg hover:bg-primary/90 transition-colors"
                >
                  Submit Request
                </button>
              </motion.form>
            )}
          </div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-2xl font-serif mb-6">Direct Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">Phone / WhatsApp</span>
                    <a href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="text-lg hover:text-primary transition-colors block">
                      {contactInfo.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-lg hover:text-primary transition-colors block">
                      {contactInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">Headquarters</span>
                    <span className="text-lg block leading-snug">
                      {contactInfo.address}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">Operations</span>
                    <span className="text-lg block">
                      {contactInfo.workingHours}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card border border-foreground/10 mt-12">
              <h4 className="font-serif text-xl mb-4">Corporate Inquiries</h4>
              <p className="text-muted-foreground font-light mb-6">
                Looking for a reliable transportation partner for your team? We offer monthly billing, dedicated account managers, and GST compliance.
              </p>
              <a href={`mailto:${contactInfo.email}?subject=Corporate Booking Inquiry`} className="text-primary font-medium hover:text-primary/80 transition-colors uppercase tracking-widest text-sm inline-flex items-center gap-2">
                Email Sales Team &rarr;
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}