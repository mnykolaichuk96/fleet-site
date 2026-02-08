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
import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";


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

    const navLinkClass =
        "text-sm font-medium text-[#0A1A2F]/80 hover:text-[#0A1A2F] transition-colors";

    const { navigate } = useHeaderNavigation();

    return (
        <header className="sticky top-0 z-50 bg-[#0B1C2D]/10 backdrop-blur border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <HeaderLogo />

                {/* NAVIGATION
                   Widoczna od md+ */}
                <nav className="hidden md:flex gap-8 text-sm ">

                    <Link
                        href="/cars"
                        className={navLinkClass}
                    >
                        {t("cars")}
                    </Link>

                    <div className="relative group">

                        {/* TRIGGER */}
                        <button
                            className="
            relative
            text-sm font-medium text-[#0A1A2F]/80
            hover:text-[#0A1A2F]
            transition-colors
            leading-none
        "
                        >
        <span className="inline-flex items-center gap-1">
            {t("drivers")}

            <span
                className="
                    inline-block
                    w-3
                    text-center
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                "
            >
                ▾
            </span>
        </span>
                        </button>

                        {/* HOVER BUFFER */}
                        <div className="absolute left-0 right-0 top-full h-3"></div>

                        {/* DROPDOWN */}
                        <div
                            className="
            absolute left-1/2 top-full
            mt-3 w-56 -translate-x-1/2
            rounded-xl bg-white
            shadow-lg ring-1 ring-black/5
            opacity-0 invisible
            translate-y-2
            transition-all duration-200
            group-hover:opacity-100
            group-hover:visible
            group-hover:translate-y-0
            z-50
        "
                        >
                            <ul className="py-2 text-sm text-[#0A1A2F]">
                                <li>
                                    <button
                                        onClick={() => navigate("rent-car")}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                    >
                                        Wynajem samochodu
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => navigate("company-car")}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                    >
                                        Na firmowym samochodzie
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => navigate("own-car")}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                    >
                                        Na własnym samochodzie
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>



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
