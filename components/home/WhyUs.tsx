"use client";
// ⬆️ Client Component, bo:
// - używa useTranslations
// - zawiera CTA z akcją (scroll / klik)

import { useTranslations } from "next-intl";
import HeaderCTA from "@/components/HeaderCTA";

/**
 * WHY US SECTION
 *
 * Sekcja budująca zaufanie:
 * - 3 kluczowe argumenty biznesowe
 * - wyraźne ikony (szybka identyfikacja)
 * - CTA prowadzące do kontaktu
 */
export default function WhyUs() {

    // Tłumaczenia z namespace "home"
    const t = useTranslations("home");

    return (
        <section className="container mx-auto px-4 py-20">

            {/* HEADER */}
            <h2 className="text-3xl font-bold text-center mb-12">
                {t("whyUs.title")}
            </h2>

            {/* CARDS */}
            <div className="grid gap-8 md:grid-cols-3">

                {/* === CARD 1 === */}
                <div className="
                    rounded-2xl border bg-white p-8
                    transition hover:shadow-lg hover:border-gray-300
                ">
                    {/* Ikona wizualna */}
                    <div className="text-5xl mb-6">🚗</div>

                    <h3 className="text-xl font-semibold mb-4">
                        {t("whyUs.items.flexible.title")}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        {t("whyUs.items.flexible.text")}
                    </p>
                </div>

                {/* === CARD 2 (WYRÓŻNIONA) === */}
                <div className="
                    rounded-2xl border-2 border-red-200
                    bg-red-50 p-8 shadow-md
                    transition hover:shadow-xl
                ">
                    <div className="text-5xl mb-6">🔑</div>

                    <h3 className="text-xl font-semibold mb-4">
                        {t("whyUs.items.vat.title")}
                    </h3>

                    <p className="text-gray-700 leading-relaxed">
                        {t("whyUs.items.vat.text")}
                    </p>
                </div>

                {/* === CARD 3 === */}
                <div className="
                    rounded-2xl border bg-white p-8
                    transition hover:shadow-lg hover:border-gray-300
                ">
                    <div className="text-5xl mb-6">🚕</div>

                    <h3 className="text-xl font-semibold mb-4">
                        {t("whyUs.items.costs.title")}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        {t("whyUs.items.costs.text")}
                    </p>
                </div>
            </div>

            {/* CTA */}
            <div className="mt-14 text-center">
                <p className="text-gray-600 mb-6">
                    {t("whyUs.cta.text")}
                </p>

                {/* Scroll do formularza kontaktowego */}
                <HeaderCTA target="contact" variant="primary">
                    {t("whyUs.cta.button")}
                </HeaderCTA>
            </div>
        </section>
    );
}
