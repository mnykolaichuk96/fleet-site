// components/home/FleetPreview.tsx

import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
// ⬆️ Server-side i18n API

/**
 * Sekcja: Podgląd floty
 *
 * Prezentuje przykładowe samochody dostępne do wynajmu
 * + CTA prowadzące do pełnej listy pojazdów.
 *
 * ❗ Server Component:
 * - brak "use client"
 * - brak stanu i logiki JS
 */
export default async function FleetPreview() {

    // Підключаємо переклади з namespace "home"
    const t = await getTranslations("home");

    return (
        <section
            id="cars-preview"
            className="relative py-24 pb-12 lg:pb-16"
        >
            <div className="absolute inset-0 bg-[#0B1C2D]/10 pointer-events-none" />
            <div className="relative z-10">
            {/* Kontener dla wyrównania treści */}
            <div className="container mx-auto px-4">

                {/* Tytuł sekcji */}
                <h2 className="text-center text-4xl font-semibold mb-6">
                    {t("fleetPreview.title")}
                </h2>

                {/* Podtytuł / opis */}
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                    {t("fleetPreview.subtitle")}
                </p>

                {/* Blok z przykładowymi samochodami */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">

                    {/* === AUTO 1 === */}
                    <div className="text-center">
                        <Image
                            src="/cars/prius-30.png"
                            alt={t("fleetPreview.car-instance.prius.alt")}
                            width={520}
                            height={300}
                            className="mx-auto"
                        />

                        <h3 className="mt-6 text-xl font-medium">
                            {t("fleetPreview.car-instance.prius.title")}
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔ {t("fleetPreview.car-instance.prius.features.0")}</li>
                            <li>✔ {t("fleetPreview.car-instance.prius.features.1")}</li>
                            <li>✔ {t("fleetPreview.car-instance.prius.features.2")}</li>
                        </ul>
                    </div>

                    {/* === AUTO 2 === */}
                    <div className="text-center">
                        <Image
                            src="/cars/corolla-combi.png"
                            alt={t("fleetPreview.car-instance.corolla.alt")}
                            width={520}
                            height={300}
                            className="mx-auto"
                        />

                        <h3 className="mt-6 text-xl font-medium">
                            {t("fleetPreview.car-instance.corolla.title")}
                        </h3>

                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li>✔ {t("fleetPreview.car-instance.corolla.features.0")}</li>
                            <li>✔ {t("fleetPreview.car-instance.corolla.features.1")}</li>
                            <li>✔ {t("fleetPreview.car-instance.corolla.features.2")}</li>
                        </ul>
                    </div>

                </div>

                {/* CTA: przejście do pełnej floty */}
                <div className="text-center mt-16">
                    <Link
                        href="/cars"
                        className="
                            inline-block
                            rounded-xl bg-red-600
                            px-8 py-4
                            text-white font-medium
                            hover:bg-red-700 transition
                        "
                    >
                        {t("fleetPreview.cta")}
                    </Link>
                </div>

                {/* Ikony zalet floty */}
                <div className="mt-20 flex flex-wrap justify-center gap-12 text-gray-600">

                    <div className="flex items-center gap-2">
                        🛠 {t("fleetPreview.benefits.service")}
                    </div>

                    <div className="flex items-center gap-2">
                        🛡 {t("fleetPreview.benefits.insurance")}
                    </div>

                    <div className="flex items-center gap-2">
                        🔑 {t("fleetPreview.benefits.deposit")}
                    </div>

                </div>

            </div>
            </div>
        </section>
    );
}
