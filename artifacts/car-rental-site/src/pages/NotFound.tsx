import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-8xl font-serif text-primary mb-6">404</h1>
          <h2 className="text-3xl font-serif mb-6">Destination Not Found</h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10">
            The page you are looking for has been moved or no longer exists. Let's get you back on the right route.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors tracking-wide"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </main>
  );
}