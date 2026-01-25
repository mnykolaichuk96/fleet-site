import Link from "next/link";
import { CarOffer } from "@/types/car";

type Props = {
    offer: CarOffer;
};

export default function CarOfferCard({ offer }: Props) {
    return (
        <Link
            href={`/cars/${offer.slug}`}
            className="rounded-2xl border p-6 bg-white hover:shadow-lg transition"
        >
            {/* ICON */}
            <div className="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-xl">
                <img src="/cars/corolla-combi.png" className="h-28" />
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold mb-2">
                {offer.brand} {offer.model}
            </h3>

            {/* PARAMS */}
            <ul className="space-y-1 text-sm text-gray-600">
                <li>⚙️ Automatyczna skrzynia</li>
                <li>⛽ {offer.fuel}</li>
                <li>📉 {offer.consumption}</li>
            </ul>

            {/* PRICE */}
            <div className="mt-5 text-2xl font-bold text-red-600">
                {offer.pricePerWeek} zł
                <span className="text-sm text-gray-500 font-normal"> / tydzień</span>
            </div>

            {/* CTA */}
            <div className="mt-4 text-red-600 font-medium">
                Zobacz dostępne auta →
            </div>
        </Link>
    );
}
