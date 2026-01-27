"use client";
// ⬆️ Client Component, бо:
// - використовує useTranslations
// - містить клікабельні Link-и

import Link from "next/link";
// ⬆️ Клієнтська навігація Next.js

import { useTranslations } from "next-intl";
// ⬆️ Client-side i18n хук


/**
 * Sekcja: Formy współpracy
 *
 * Prezentuje 3 modele współpracy z kierowcami:
 * 1. Praca własnym samochodem
 * 2. Wynajem samochodu
 * 3. Samochód flotowy Ginger Partner
 *
 * Brak logiki biznesowej — czysta prezentacja UI
 */
export default function CooperationModes() {

    // Підключаємо переклади для home page
    const t = useTranslations("home");

    return (
        <section
            id="cooperation-modes"
            className="py-24 bg-gray-50"
        >
            <div className="container mx-auto px-4">

                {/* Tytuł sekcji */}
                <h2 className="text-3xl font-semibold text-center mb-14">
                    {t("cooperationModes.title")}
                </h2>

                {/* Grid z trzema kartami */}
                <div className="grid gap-8 md:grid-cols-3">

                    {/* === KARTA 1: WŁASNE AUTO === */}
                    <div className="bg-white rounded-2xl p-8 border">

                        {/* Ikona wizualna (placeholder emoji) */}
                        <div className="mb-6 text-4xl">🚗</div>

                        <h3 className="text-xl font-semibold mb-3">
                            {t("cooperationModes.items.ownCar.title")}
                        </h3>

                        <p className="text-gray-600 mb-6">
                            {t("cooperationModes.items.ownCar.text")}
                        </p>

                        {/* Lista korzyści */}
                        <ul className="space-y-3 text-sm">
                            <li>✔ {t("cooperationModes.items.ownCar.benefits.0")}</li>
                            <li>✔ {t("cooperationModes.items.ownCar.benefits.1")}</li>
                            <li>✔ {t("cooperationModes.items.ownCar.benefits.2")}</li>
                        </ul>

                        {/* Link pomocniczy */}
                        <Link
                            href="/drivers"
                            className="inline-block mt-6 text-sm text-gray-500 hover:text-black"
                        >
                            {t("cooperationModes.more")} →
                        </Link>
                    </div>

                    {/* === KARTA 2: WYNAJEM SAMOCHODU === */}
                    <div className="bg-white rounded-2xl p-8 border ring-1 ring-red-100">

                        <div className="mb-6 text-4xl">🔑</div>

                        <h3 className="text-xl font-semibold mb-3">
                            {t("cooperationModes.items.rent.title")}
                        </h3>

                        <p className="text-gray-600 mb-6">
                            {t("cooperationModes.items.rent.text")}
                        </p>

                        <ul className="space-y-3 text-sm">
                            <li>✔ {t("cooperationModes.items.rent.benefits.0")}</li>
                            <li>✔ {t("cooperationModes.items.rent.benefits.1")}</li>
                            <li>✔ {t("cooperationModes.items.rent.benefits.2")}</li>
                        </ul>

                        {/* GŁÓWNY CTA */}
                        <Link
                            href="/cars"
                            className="
                                inline-block mt-8
                                rounded-xl bg-red-600
                                px-5 py-3
                                text-white text-sm font-medium
                                hover:bg-red-700
                            "
                        >
                            {t("cooperationModes.items.rent.cta")}
                        </Link>
                    </div>

                    {/* === KARTA 3: AUTO FLOTOWE === */}
                    <div className="bg-white rounded-2xl p-8 border">

                        <div className="mb-6 text-4xl">🚕</div>

                        <h3 className="text-xl font-semibold mb-3">
                            {t("cooperationModes.items.partnerCar.title")}
                        </h3>

                        <p className="text-gray-600 mb-6">
                            {t("cooperationModes.items.partnerCar.text")}
                        </p>

                        <ul className="space-y-3 text-sm">
                            <li>✔ {t("cooperationModes.items.partnerCar.benefits.0")}</li>
                            <li>✔ {t("cooperationModes.items.partnerCar.benefits.1")}</li>
                            <li>✔ {t("cooperationModes.items.partnerCar.benefits.2")}</li>
                        </ul>

                        <Link
                            href="/apply"
                            className="
                                inline-block mt-8
                                rounded-xl border
                                px-5 py-3
                                text-sm font-medium
                                hover:bg-gray-50
                            "
                        >
                            {t("cooperationModes.items.partnerCar.cta")}
                        </Link>
                    </div>

                </div>

                {/* Tekst pomocniczy pod kartami */}
                <p className="mt-12 text-center text-sm text-gray-500">
                    {t("cooperationModes.footer")}
                </p>

            </div>
        </section>
    );
}
