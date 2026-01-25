// src/components/Footer.tsx

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-6 py-16">

                {/* TOP PART */}
                <div className="grid gap-12 md:grid-cols-3">

                    {/* BRAND */}
                    <div>
                        <div className="text-xl font-semibold">
                            <span className="text-red-600">Ginger</span> Partner
                        </div>

                        <p className="mt-4 text-sm text-gray-600">
                            Partner Bolt i Uber w Rzeszowie.
                            Stworzony przez kierowców — dla kierowców.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-gray-900">
                            Nawigacja
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li><Link href="/drivers">Dla kierowców</Link></li>
                            <li><Link href="/cars">Flota</Link></li>
                            <li><Link href="/opinie">Opinie</Link></li>
                            <li><Link href="/apply">Zgłoś się</Link></li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-gray-900">
                            Kontakt
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>📍 Rzeszów</li>
                            <li>
                                📞{" "}
                                <a
                                    href="tel:+48723000500"
                                    className="hover:underline"
                                >
                                    +48 723 000 500
                                </a>
                            </li>
                            <li>
                                ✉️{" "}
                                <a
                                    href="mailto:kontakt@gingerpartner.pl"
                                    className="hover:underline"
                                >
                                    kontakt@gingerpartner.pl
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM PART */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs text-gray-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} Ginger Partner
          </span>

                    <div className="flex gap-4">
                        <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
                        <Link href="/cookies">Cookies</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
