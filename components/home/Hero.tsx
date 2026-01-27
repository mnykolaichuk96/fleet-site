"use client";
// ⬆️ Client Component, bo:
// - używa useTranslations
// - zawiera interakcje (CTA, scroll)

import Link from "next/link";
import { useTranslations } from "next-intl";
import HeaderCTA from "@/components/HeaderCTA";

/**
 * HERO SECTION
 *
 * Zawiera:
 * - główny nagłówek (H1)
 * - podtytuł (SEO + kontekst)
 * - wizualne wyróżniki (ikony)
 * - dwa CTA (kontakt + flota)
 */
export default function Hero() {

    // Podłączamy tłumaczenia z namespace "home"
    const t = useTranslations("home");

    return (
        <section className="relative overflow-hidden bg-white py-24">

            {/* Tło symboliczne miasta (dekoracyjne, bez wpływu na SEO) */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center opacity-10"
                style={{ backgroundImage: "url('/rzeszow-symbol.svg')" }}
            />

            <div className="relative container mx-auto px-4 text-center max-w-4xl">

                {/* Badge / mała etykieta nad nagłówkiem */}
                <div className="inline-block mb-6 rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
                    {t("hero.badge")}
                </div>

                {/* H1 — najważniejszy nagłówek strony */}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    {t("hero.title")}
                </h1>

                {/* Podtytuł — doprecyzowanie kontekstu */}
                <p className="text-lg text-gray-600 mb-10">
                    {t("hero.subtitle")}
                </p>

                {/* Ikony / krótkie USP */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-gray-700">
                    <span>🚗 {t("hero.features.cars")}</span>
                    <span>🎧 {t("hero.features.support")}</span>
                    <span>🤝 {t("hero.features.rules")}</span>
                </div>

                {/* CTA BUTTONS */}
                <div className="flex justify-center gap-4">

                    {/* Główne CTA — scroll do formularza */}
                    <HeaderCTA target="contact" variant="primary">
                        {t("hero.primaryCta")}
                    </HeaderCTA>

                    {/* Drugorzędne CTA — przejście do floty */}
                    <Link
                        href="/cars"
                        className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
                    >
                        {t("hero.secondaryCta")}
                    </Link>

                </div>
            </div>
        </section>
    );
}
