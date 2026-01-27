"use client";
// ⬆️ Client Component, bo:
// - używa useTranslations
// - zawiera komponenty z obsługą kliknięć (HeaderCTA)

import Link from "next/link";
import { useTranslations } from "next-intl";
import HeaderCTA from "@/components/HeaderCTA";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * Header
 *
 * - wspólny dla całego serwisu
 * - obsługuje routing z /[locale]
 * - zapewnia nawigację + CTA
 * - integruje się z logiką scrollowania na home page
 */
export default function Header() {

    // Tłumaczenia dla nawigacji
    const t = useTranslations("header");

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO
                   Kliknięcie zawsze prowadzi do home */}
                <Link href="/" className="font-bold text-lg">
                    <span className="text-red-600">Ginger</span> Partner
                </Link>

                {/* NAVIGATION
                   Widoczna od md+ */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-700">

                    {/* Przejście / scroll do sekcji floty */}
                    <HeaderCTA target="cars">
                        {t("cars")}
                    </HeaderCTA>

                    {/* Przejście / scroll do form współpracy */}
                    <HeaderCTA target="cooperation-modes">
                        {t("drivers")}
                    </HeaderCTA>

                    {/* Przejście / scroll do formularza kontaktowego */}
                    <HeaderCTA target="contact">
                        {t("contact")}
                    </HeaderCTA>
                </nav>

                {/* ===== RIGHT: LANG + CTA ===== */}
                <div className="flex items-center gap-6">

                    {/* Перемикач мови */}
                    <LanguageSwitcher />

                    {/* Головне CTA — завжди веде до контакту */}
                    <HeaderCTA target="contact" variant="primary">
                        {t("apply")}
                    </HeaderCTA>

                </div>

            </div>
        </header>
    );
}
