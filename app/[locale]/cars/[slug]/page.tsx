import cars from '@/data/cars.json';
import type { Metadata } from 'next';
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

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
export default async function CarPage({ params }: PageProps) {
    const { slug } = await params;

    const car = cars.find(c => c.slug === slug);

    if (!car) {
        notFound();
    }

    return (
        <div>
            <h1>{car.title}</h1>
            <p>{car.year}</p>
            <p>{car.price}</p>
        </div>
    );
}
