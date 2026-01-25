import Link from 'next/link';
import { useTranslations } from 'next-intl';
import HeaderCTA from "@/components/HeaderCTA";

/**
 * HERO SECTION
 * - великий заголовок
 * - підзаголовок
 * - фоновий символ міста (через CSS)
 * - 2 CTA кнопки
 */
export default function Hero() {
    const t = useTranslations('home');

    return (
        <section className="relative overflow-hidden bg-white py-24">

            {/* Фон міста (напівпрозорий) */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center opacity-10"
                style={{ backgroundImage: "url('/rzeszow-symbol.svg')" }}
            />

            <div className="relative container mx-auto px-4 text-center max-w-4xl">

                {/* Badge */}
                <div className="inline-block mb-6 rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
                    Partner z polecenia
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Stworzony przez kierowców.<br />Dla kierowców.
                </h1>

                {/* Subheadline */}
                <p className="text-lg text-gray-600 mb-10">
                    Partner Bolt i Uber w Rzeszowie
                </p>

                {/* Icons row */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-10 text-gray-700">
                    <span>🚗 Nowoczesne samochody</span>
                    <span>🎧 Wsparcie 24/7</span>
                    <span>🤝 Jasne zasady</span>
                </div>

                {/* CTA buttons */}
                <div className="flex justify-center gap-4">
                    {/* CTA */}
                    <HeaderCTA variant="primary">
                        {t("apply")}
                    </HeaderCTA>

                    <Link
                        href="/cars"
                        className="rounded-xl border px-6 py-3 font-medium hover:bg-gray-50"
                    >
                        Zobacz dostępne auta
                    </Link>
                </div>
            </div>
        </section>
    );
}
