import React from 'react';
import { useLocation } from 'wouter';

type SearchValues = {
  pickup: string;
  dropoff: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  tripType: 'one-way' | 'round-trip';
};

type CarSearchFormProps = {
  initialValues?: Partial<SearchValues>;
  onSearch?: (values: SearchValues) => void;
  compact?: boolean;
};

const defaultValues: SearchValues = {
  pickup: 'Pune',
  dropoff: 'Mumbai',
  pickupDate: '',
  pickupTime: '',
  returnDate: '',
  returnTime: '',
  tripType: 'one-way',
};

function toSearchParams(values: SearchValues) {
  const params = new URLSearchParams();
  Object.entries(values).forEach(([key, value]) => {
    if (value) params.set(key, String(value));
  });
  return params.toString();
}

export function CarSearchForm({
  initialValues,
  onSearch,
  compact = false,
}: CarSearchFormProps) {
  const [, setLocation] = useLocation();
  const [values, setValues] = React.useState<SearchValues>({
    ...defaultValues,
    ...initialValues,
  });

  React.useEffect(() => {
    setValues((current) => ({ ...current, ...initialValues }));
  }, [initialValues]);

  const update = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(values);
      return;
    }

    setLocation(`/cars?${toSearchParams(values)}`);
  };

  return (
    <form
      onSubmit={submit}
      className={`rounded-3xl border border-white/15 bg-[#1b120b]/75 p-5 shadow-2xl backdrop-blur-xl ${
        compact ? 'w-full' : 'w-full'
      }`}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Pickup location
          </span>
          <input
            name="pickup"
            value={values.pickup}
            onChange={update}
            placeholder="Pune"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary/60"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Drop location
          </span>
          <input
            name="dropoff"
            value={values.dropoff}
            onChange={update}
            placeholder="Mumbai"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/30 focus:border-primary/60"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Trip type
          </span>
          <select
            name="tripType"
            value={values.tripType}
            onChange={update}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary/60"
          >
            <option value="one-way">One-way</option>
            <option value="round-trip">Round-trip</option>
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Pickup date
          </span>
          <input
            name="pickupDate"
            type="date"
            value={values.pickupDate}
            onChange={update}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary/60 [color-scheme:dark]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Pickup time
          </span>
          <input
            name="pickupTime"
            type="time"
            value={values.pickupTime}
            onChange={update}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary/60 [color-scheme:dark]"
          />
        </label>
        <label className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">
            Return date/time
          </span>
          <div className="grid grid-cols-2 gap-3">
            <input
              name="returnDate"
              type="date"
              value={values.returnDate}
              onChange={update}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary/60 [color-scheme:dark]"
            />
            <input
              name="returnTime"
              type="time"
              value={values.returnTime}
              onChange={update}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-primary/60 [color-scheme:dark]"
            />
          </div>
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-white/10 pt-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/55">
          Search availability across our fleet with live filtering and price estimates.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Search Cars
        </button>
      </div>
    </form>
  );
}
