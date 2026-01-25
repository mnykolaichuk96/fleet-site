import cars from '@/data/cars.json';
import type { Metadata } from 'next';
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { carOffers } from "@/data/cars";
import CarOfferCard from "@/components/cars/CarOfferCard";

export const metadata: Metadata = createMetadata(
    "Wynajem samochodów taxi Rzeszów",
    "Nowoczesne samochody do pracy w Bolt i Uber w Rzeszowie."
);

export default function CarsPage() {
    return (
        <section className="container mx-auto px-4 py-12">
            <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-6"
            >
                ← Назад do home
            </Link>
            <h1 className="text-3xl font-bold mb-8">
                Dostępna flota
            </h1>

            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                <section className="container mx-auto px-4 py-12 flex justify-center">
                    <div className="flex flex-col gap-8 max-w-3xl w-full">
                        {carOffers.map((offer) => (
                            <CarOfferCard key={offer.slug} offer={offer} />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
