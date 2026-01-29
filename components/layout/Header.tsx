"use client";
// ⬆️ Client Component, bo:
// - używa useTranslations
// - zawiera komponenty z obsługą kliknięć (HeaderScrollLink)

import Link from "next/link";
import { useTranslations } from "next-intl";
import HeaderScrollLink from "@/components/layout/HeaderScrollLink";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Logo from "@/components/icons/Logo";
import HeaderLogo from "@/components/layout/HeaderLogo";


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
        <header className="sticky top-0 z-50 bg-[#0B1C2D]/10 backdrop-blur border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <HeaderLogo />

                {/* NAVIGATION
                   Widoczna od md+ */}
                <nav className="hidden md:flex gap-8 text-sm ">

                    {/* Przejście / scroll do sekcji floty */}
                    <HeaderScrollLink target="cars">
                        {t("cars")}
                    </HeaderScrollLink>

                    {/* Przejście / scroll do form współpracy */}
                    <HeaderScrollLink target="cooperation-modes">
                        {t("drivers")}
                    </HeaderScrollLink>

                    {/* Przejście / scroll do formularza kontaktowego */}
                    <HeaderScrollLink target="contact">
                        {t("contact")}
                    </HeaderScrollLink>
                </nav>

                {/* ===== RIGHT: LANG + CTA ===== */}
                <div className="flex items-center gap-6">

                    {/* Перемикач мови */}
                    <LanguageSwitcher />

                    {/* Головне CTA — завжди веде до контакту */}
                    <HeaderScrollLink target="contact" variant="primary">
                        {t("apply")}
                    </HeaderScrollLink>

                </div>

            </div>
        </header>
    );
}
