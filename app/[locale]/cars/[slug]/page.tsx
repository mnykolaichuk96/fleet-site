import cars from '@/data/cars.json';
import type { Metadata } from 'next';
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { carOffers, carInstances } from "@/data/cars";
import CarInstanceCard from "@/components/cars/CarInstanceCard";
import Link from "next/link";
import CarOfferCard from "@/components/cars/CarOfferCard";


// Тип для params
type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

// ← Next.js передає params зі slug з URL
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    const car = cars.find(c => c.slug === slug);

    if (!car) {
        return createMetadata(
            "Samochód nie znaleziony",
            "Nie znaleziono samochodu w naszej flocie."
        );
    }

    return createMetadata(
        `${car.title} – wynajem taxi Rzeszów`,
        `Wynajem ${car.title} do pracy w Bolt i Uber w Rzeszowie.`
    );
}

// ← Це сторінка ОДНОГО авто
export default async function CarModelPage({ params }: PageProps) {
    const { slug } = await params;

    const offer = carOffers.find((o) => o.slug === slug);

    if (!offer) {
        notFound();
    }

    const instances = carInstances.filter(
        (car) => car.offerSlug === offer.slug
    );

    return (
        <section className="container mx-auto px-4 py-12">
            <header className="mb-10">
                <Link
                    href="/cars"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-6"
                >
                    ← Назад do floty
                </Link>
                <h1 className="text-3xl font-bold">
                    {offer.brand} {offer.model}
                </h1>

                <p className="mt-2 text-gray-600 max-w-xl">
                    Automatyczna skrzynia biegów, niskie spalanie (
                    {offer.consumption}), idealne do pracy w aplikacjach.
                </p>

                <div className="mt-4 text-xl font-semibold text-red-600">
                    {offer.pricePerWeek} zł / tydzień
                </div>
            </header>

            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                <section className="container mx-auto px-4 py-12 flex justify-center">
                    <div className="flex flex-col gap-8 max-w-3xl w-full">
                        {instances.map((car) => (
                            <CarInstanceCard key={car.id} car={car} />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
