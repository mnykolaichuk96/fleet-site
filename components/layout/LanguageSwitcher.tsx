"use client";
// ⬆️ Client Component, оскільки:
// - використовує router
// - реагує на кліки
// - змінює URL

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
        // Захист від непотрібного редіректу
        if (nextLocale === currentLocale) return;

        // Копіюємо сегменти URL
        const newSegments = [...segments];

        // Замінюємо locale
        newSegments[1] = nextLocale;

        // Склеюємо новий шлях
        const newPath = newSegments.join("/") || `/${nextLocale}`;

        // Переходимо на новий URL
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-2 text-sm">

            {locales.map((locale) => {
                const isActive = locale === currentLocale;

                return (
                    <button
                        key={locale}
                        onClick={() => switchLanguage(locale)}
                        className={
                            isActive
                                ? "font-semibold text-black"
                                : "text-gray-500 hover:text-black"
                        }
                        aria-current={isActive ? "true" : undefined}
                    >
                        {locale.toUpperCase()}
                    </button>
                );
            })}

        </div>
    );
}
