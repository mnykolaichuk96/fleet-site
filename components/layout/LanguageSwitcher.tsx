"use client";
// ⬆️ Client Component, оскільки:
// - використовує router
// - реагує на кліки
// - змінює URL

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/lib/i18n";

/**
 * LanguageSwitcher
 *
 * Компонент для перемикання мови сайту.
 *
 * Працює з routing схемою:
 * /[locale]/...
 *
 * Приклад:
 * /pl/car-instance  → /ua/car-instance
 * /en       → /pl
 */
export default function LanguageSwitcher() {
    // Router Next.js для клієнтської навігації
    const router = useRouter();

    // Поточний шлях, наприклад:
    // /pl
    // /pl/car-instance
    // /ua/drivers
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    /**
     * Розбиваємо pathname на частини.
     *
     * Приклад:
     * "/pl/car-instance" → ["", "pl", "car-instance"]
     */
    const segments = pathname.split("/");

    /**
     * Поточна мова береться з URL.
     * За домовленістю вона завжди знаходиться
     * на позиції segments[1].
     */
    const currentLocale = segments[1];

    /**
     * Функція перемикання мови.
     *
     * Алгоритм:
     * 1. Беремо поточний pathname
     * 2. Замінюємо locale в URL
     * 3. Робимо client-side redirect
     */
    const switchLanguage = (nextLocale: string) => {
        if (nextLocale === currentLocale) {
            setOpen(false);
            return;
        }

        const newSegments = [...segments];
        newSegments[1] = nextLocale;

        const newPath = newSegments.join("/") || `/${nextLocale}`;
        router.push(newPath);
        setOpen(false);
    };

    return (
        <div className="relative">
            {/* MOBILE */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-sm font-medium text-[#0A1A2F]"
                aria-expanded={open}
                aria-haspopup="true"
            >
                {currentLocale?.toUpperCase()} ▾
            </button>

            <div
                className={`
                    absolute right-0 top-full mt-2 w-24 rounded-lg bg-white shadow-lg ring-1 ring-black/5 md:hidden
                    transition-all duration-200
                    ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"}
                `}
            >
                <ul className="py-1 text-sm text-[#0A1A2F]">
                    {locales.map((locale) => {
                        const isActive = locale === currentLocale;

                        return (
                            <li key={locale}>
                                <button
                                    onClick={() => switchLanguage(locale)}
                                    className={`block w-full px-3 py-2 text-left hover:bg-gray-50 ${
                                        isActive ? "font-semibold" : ""
                                    }`}
                                    aria-current={isActive ? "true" : undefined}
                                >
                                    {locale.toUpperCase()}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center gap-2 text-sm">
                {locales.map((locale) => {
                    const isActive = locale === currentLocale;

                    return (
                        <button
                            key={locale}
                            onClick={() => switchLanguage(locale)}
                            className={
                                isActive
                                    ? "font-semibold text-[#0A1A2F]"
                                    : "text-[#0A1A2F]/60 hover:text-[#0A1A2F] transition-colors"
                            }
                            aria-current={isActive ? "true" : undefined}
                        >
                            {locale.toUpperCase()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}