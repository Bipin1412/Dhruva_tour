import React from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Fuel,
  SlidersHorizontal,
  Users,
} from 'lucide-react';
import { cars } from '@/data';
import { CarSearchForm } from '@/components/booking/CarSearchForm';

type Filters = {
  category: string;
  transmission: string;
  fuelType: string;
};

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

function rentalDays({
  pickupDate,
  returnDate,
  tripType,
}: {
  pickupDate: string;
  returnDate: string;
  tripType: 'one-way' | 'round-trip';
}) {
  if (!pickupDate) return tripType === 'round-trip' ? 2 : 1;

  const start = new Date(pickupDate);
  const end = returnDate ? new Date(returnDate) : start;
  const diff = Math.max(0, end.getTime() - start.getTime());
  const days = Math.max(1, Math.ceil(diff / 86400000) + 1);
  return tripType === 'round-trip' ? Math.max(days, 2) : days;
}

function money(value: number) {
  return `Rs ${value.toLocaleString()}`;
}

export default function Cars() {
  const [location] = useLocation();
  const query = parseQuery(window.location.search);
  const searchParams = new URLSearchParams(window.location.search);
  const queryString = searchParams.toString();
  const [filters, setFilters] = React.useState<Filters>({
    category: 'All',
    transmission: 'All',
    fuelType: 'All',
  });

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const categories = ['All', ...new Set(cars.map((car) => car.category))];
  const transmissions = ['All', ...new Set(cars.map((car) => car.transmission))];
  const fuelTypes = ['All', ...new Set(cars.map((car) => car.fuelType))];

  const filteredCars = cars.filter((car) => {
    return (
      (filters.category === 'All' || car.category === filters.category) &&
      (filters.transmission === 'All' ||
        car.transmission === filters.transmission) &&
      (filters.fuelType === 'All' || car.fuelType === filters.fuelType)
    );
  });

  const days = rentalDays({
    pickupDate: query.pickupDate,
    returnDate: query.returnDate,
    tripType: query.tripType,
  });

  return (
    <main className="min-h-screen pb-20 pt-24">
      <section className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            Search Cars
          </span>
          <h1 className="text-5xl font-serif md:text-6xl">Browse available cars</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Search by route and dates, then filter the inventory by body type,
            transmission, and fuel type.
          </p>
        </div>

        <CarSearchForm initialValues={query} compact />
      </section>

      <section className="mx-auto mt-16 max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="h-fit rounded-3xl border border-foreground/10 bg-card p-6 lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-serif">Filters</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFilters((current) => ({ ...current, category: item }))
                      }
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${
                        filters.category === item
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-foreground/10 bg-background text-foreground hover:border-primary/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Transmission
                </h3>
                <div className="flex flex-wrap gap-2">
                  {transmissions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFilters((current) => ({ ...current, transmission: item }))
                      }
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${
                        filters.transmission === item
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-foreground/10 bg-background text-foreground hover:border-primary/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Fuel
                </h3>
                <div className="flex flex-wrap gap-2">
                  {fuelTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setFilters((current) => ({ ...current, fuelType: item }))
                      }
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${
                        filters.fuelType === item
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-foreground/10 bg-background text-foreground hover:border-primary/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-4">
              <div className="mb-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                Current search
              </div>
              <div className="text-sm text-foreground">
                {query.pickup} to {query.dropoff}
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4" />
                <span>
                  {days} day{days > 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </aside>

          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif">Available Cars</h2>
                <p className="text-sm text-muted-foreground">
                  {filteredCars.length} cars match your filters
                </p>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-foreground/10 bg-card px-4 py-2 text-sm text-muted-foreground md:flex">
                <Users className="h-4 w-4" />
                {query.tripType === 'round-trip' ? 'Round-trip' : 'One-way'}
                <Fuel className="ml-2 h-4 w-4" />
                {query.pickupDate || 'Select dates'}
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-2">
              {filteredCars.map((car, index) => {
                const total = car.pricePerDay * days;
                return (
                  <motion.article
                    key={car.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: index * 0.08 }}
                    className="group overflow-hidden border border-foreground/10 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden lg:aspect-[16/9]">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                          {car.category}
                        </div>
                      </div>

                    <div className="flex flex-col gap-6 p-6 lg:p-7">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-xl">
                          <h3 className="text-2xl font-serif md:text-3xl">{car.name}</h3>
                          <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                            <span>{car.transmission}</span>
                            <span className="self-center h-1 w-1 rounded-full bg-foreground/20" />
                            <span>{car.fuelType}</span>
                            <span className="self-center h-1 w-1 rounded-full bg-foreground/20" />
                            <span>{car.seats} seats</span>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-foreground/10 bg-background px-4 py-3 text-right">
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Price/day
                          </div>
                          <div>
                            <div className="text-2xl font-serif text-primary">
                              {money(car.pricePerDay)}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 md:space-y-0">
                        {car.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-col gap-4 border-t border-foreground/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Estimate
                          </div>
                          <div className="text-xl font-medium">{money(total)}</div>
                          <div className="text-xs text-muted-foreground">
                            For {days} day{days > 1 ? 's' : ''}
                          </div>
                        </div>
                        <Link
                          href={`/cars/${car.id}${queryString ? `?${queryString}` : ''}`}
                          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Details
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
