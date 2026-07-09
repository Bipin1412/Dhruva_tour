import React from 'react';
import { Link, useRoute } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, CheckCircle2, Fuel, Gauge, ShieldCheck } from 'lucide-react';
import NotFound from '@/pages/NotFound';
import { cars } from '@/data';
import { CarSearchForm } from '@/components/booking/CarSearchForm';

function parseQuery(search: string) {
  const params = new URLSearchParams(search);
  return {
    pickup: params.get('pickup') ?? 'Pune',
    dropoff: params.get('dropoff') ?? 'Mumbai',
    pickupDate: params.get('pickupDate') ?? '',
    pickupTime: params.get('pickupTime') ?? '',
    returnDate: params.get('returnDate') ?? '',
    returnTime: params.get('returnTime') ?? '',
    tripType: (params.get('tripType') as 'one-way' | 'round-trip') ?? 'one-way',
  };
}

function money(value: number) {
  return `₹${value.toLocaleString()}`;
}

export default function CarDetail() {
  const [, params] = useRoute('/cars/:id');
  const car = cars.find((item) => item.id === params?.id);
  const query = parseQuery(window.location.search);

  if (!car) return <NotFound />;

  const days =
    query.tripType === 'round-trip' && query.returnDate ? 2 : 1;
  const estimate = car.pricePerDay * days;

  return (
    <main className="min-h-screen pb-20 pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/cars"
            className="text-sm font-semibold uppercase tracking-[0.22em] text-primary transition-colors hover:text-primary/80"
          >
            &larr; Back to Cars
          </Link>
          <div className="rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm text-muted-foreground">
            {query.pickup} to {query.dropoff}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="overflow-hidden border border-foreground/10 bg-card"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                  {car.category}
                </div>
              </div>
              <div className="grid gap-3 border-t border-foreground/10 p-4 sm:grid-cols-3">
                {car.gallery.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt={`${car.name} gallery ${index + 1}`}
                    className="h-32 w-full object-cover"
                  />
                ))}
              </div>
            </motion.div>

            <section className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-foreground/10 bg-card p-7"
              >
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Camera className="h-5 w-5" />
                  <h2 className="text-xl font-serif">Features & photos</h2>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  {car.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-foreground/10 bg-card p-7"
              >
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                  <h2 className="text-xl font-serif">Rental terms</h2>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-primary" />
                    <span>{car.policy.mileageLimit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span>{car.policy.fuelPolicy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span>{car.policy.securityDeposit}</span>
                  </div>
                </div>
              </motion.div>
            </section>

            <CarSearchForm initialValues={query} compact />
          </div>

          <aside className="lg:sticky lg:top-28 h-fit rounded-3xl border border-primary/20 bg-card p-8 shadow-2xl">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Car Details
            </div>
            <h1 className="text-4xl font-serif">{car.name}</h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <span>{car.transmission}</span>
              <span className="h-1 w-1 rounded-full bg-foreground/20 self-center" />
              <span>{car.fuelType}</span>
              <span className="h-1 w-1 rounded-full bg-foreground/20 self-center" />
              <span>{car.seats} seats</span>
            </div>

            <div className="mt-8 rounded-2xl border border-foreground/10 bg-background p-5">
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Price/day
              </div>
              <div className="mt-2 text-4xl font-serif text-primary">
                {money(car.pricePerDay)}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                Estimated total for current trip
              </div>
              <div className="mt-2 text-2xl font-medium">{money(estimate)}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Based on {days} day{days > 1 ? 's' : ''} from the current search
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>{car.policy.cancellationPolicy}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>Driver and car availability are confirmed after search.</span>
              </div>
            </div>

            <Link
              href={`/contact?vehicle=${car.id}`}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Reserve this car
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
