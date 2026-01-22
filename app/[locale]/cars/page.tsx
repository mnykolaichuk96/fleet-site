import cars from '@/data/cars.json';
import type { Metadata } from 'next';
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
    "Wynajem samochodów taxi Rzeszów",
    "Nowoczesne samochody do pracy w Bolt i Uber w Rzeszowie."
);

export default function Cars() {
    return (
        <div>
            {cars.map(car => (
                <div key={car.slug}>

                    {/* Назва авто */}
                    <h2>{car.title}</h2>

                    {/* Посилання на сторінку конкретного авто */}
                    <Link href={`/cars/${car.slug}`}>
                        Zobacz szczegóły
                    </Link>

                </div>
            ))}
        </div>
    );
}
