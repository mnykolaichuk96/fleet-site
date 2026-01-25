// components/home/FleetPreview.tsx

import Image from "next/image";
import Link from "next/link";

/**
 * Секція з автомобілями для оренди.
 * ❗ Server Component (немає "use client")
 * ❗ Без стану, без JS-логіки
 */
export default function FleetPreview() {
    return (
        <section className="relative py-24">
            {/* Контейнер для вирівнювання */}
            <div className="container mx-auto px-4">

                {/* Заголовок */}
                <h2 className="text-center text-4xl font-semibold mb-6">
                    Samochody dostępne do wynajmu
                </h2>

                {/* Підзаголовок */}
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    Gotowe do pracy w profesjonalnym ruchu miejskim.
                    Hybrydowe, oszczędne, automatyczne, bez wkładu własnego.
                    Bezpieczne i gotowe do jazdy w taxi Bolt i Uber.
                </p>

                {/* Блок з авто */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

                    {/* === Prius 30 === */}
                    <div className="text-center">
                        <Image
                            src="/cars/prius-30.png"
                            alt="Toyota Prius 30"
                            width={520}
                            height={300}
                            className="mx-auto"
                        />

                        <h3 className="mt-6 text-xl font-medium">
                            Toyota Prius 30
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔ Hybrid</li>
                            <li>✔ Automat</li>
                            <li>✔ Ekonomiczna</li>
                        </ul>
                    </div>

                    {/* === Corolla Kombi === */}
                    <div className="text-center">
                        <Image
                            src="/cars/corolla-combi.png"
                            alt="Toyota Corolla Hybrid Kombi"
                            width={520}
                            height={300}
                            className="mx-auto"
                        />

                        <h3 className="mt-6 text-xl font-medium">
                            Toyota Corolla Hybrid Kombi
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔ Hybryda</li>
                            <li>✔ Automat</li>
                            <li>✔ Oszczędna</li>
                        </ul>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <Link
                        href="/cars"
                        className="inline-block rounded-xl bg-red-600 px-8 py-4 text-white font-medium hover:bg-red-700 transition"
                    >
                        Zobacz całą flotę
                    </Link>
                </div>

                {/* Іконки переваг */}
                <div className="mt-20 flex flex-wrap justify-center gap-12 text-gray-600">
                    <div className="flex items-center gap-2">
                        🛠 Serwis 24/7
                    </div>
                    <div className="flex items-center gap-2">
                        🛡 Pełne ubezpieczenie
                    </div>
                    <div className="flex items-center gap-2">
                        🔑 Bez wkładu własnego
                    </div>
                </div>
            </div>
        </section>
    );
}
