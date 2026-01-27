// src/components/Footer.tsx

import Link from "next/link";
import { getTranslations } from "next-intl/server";

/**
 * FOOTER
 *
 * - wspólny dla całego serwisu
 * - renderowany w layout.tsx
 * - Server Component (brak interakcji)
 * - pełna obsługa i18n
 */
export default async function Footer() {

    // Server-side tłumaczenia
    const t = await getTranslations("footer");

    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16">

                {/* ===== TOP PART ===== */}
                <div className="grid gap-12 md:grid-cols-3">

                    {/* BRAND / OPIS */}
                    <div>
                        <div className="text-xl font-semibold">
                            <span className="text-red-600">Ginger</span> Partner
                        </div>

                        <p className="mt-4 text-sm text-gray-600">
                            {t("brand.description")}
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-gray-900">
                            {t("navigation.title")}
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/drivers">
                                    {t("navigation.drivers")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/cars">
                                    {t("navigation.cars")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/opinie">
                                    {t("navigation.reviews")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/apply">
                                    {t("navigation.apply")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-gray-900">
                            {t("contact.title")}
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>
                                📍 {t("contact.city")}
                            </li>
                            <li>
                                📞{" "}
                                <a
                                    href="tel:+48723000500"
                                    className="hover:underline"
                                >
                                    {t("contact.phone")}
                                </a>
                            </li>
                            <li>
                                ✉️{" "}
                                <a
                                    href="mailto:kontakt@gingerpartner.pl"
                                    className="hover:underline"
                                >
                                    {t("contact.email")}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ===== BOTTOM PART ===== */}
                <div className="
                    mt-16 flex flex-col
                    items-center justify-between
                    gap-4 border-t pt-6
                    text-xs text-gray-500
                    md:flex-row
                ">
                    <span>
                        © {new Date().getFullYear()} Ginger Partner
                    </span>

                    <div className="flex gap-4">
                        <Link href="/polityka-prywatnosci">
                            {t("legal.privacy")}
                        </Link>
                        <Link href="/cookies">
                            {t("legal.cookies")}
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
