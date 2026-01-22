import { useTranslations } from 'next-intl';
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = createMetadata(
    "Praca kierowca Bolt i Uber Rzeszów",
    "Legalna praca jako kierowca Bolt i Uber w Rzeszowie. Wynajem samochodów, wsparcie i rozliczenia."
);


export default function DriversPage() {
    const t = useTranslations('drivers');

    return (
        <main className="container mx-auto px-4 py-12">

            {/* HERO */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    {t('title')}
                </h1>
                <p className="text-lg text-gray-600">
                    {t('subtitle')}
                </p>
            </section>

            {/* BENEFITS */}
            <section className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">{t('benefit1.title')}</h3>
                    <p className="text-gray-600">{t('benefit1.text')}</p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">{t('benefit2.title')}</h3>
                    <p className="text-gray-600">{t('benefit2.text')}</p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">{t('benefit3.title')}</h3>
                    <p className="text-gray-600">{t('benefit3.text')}</p>
                </div>
            </section>

            {/* REQUIREMENTS */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-6">
                    {t('requirements.title')}
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>{t('requirements.r1')}</li>
                    <li>{t('requirements.r2')}</li>
                    <li>{t('requirements.r3')}</li>
                    <li>{t('requirements.r4')}</li>
                </ul>
            </section>

            {/* EARNINGS */}
            <section className="bg-gray-100 p-8 rounded-xl mb-16">
                <h2 className="text-2xl font-semibold mb-4">
                    {t('earnings.title')}
                </h2>
                <p className="text-gray-700">
                    {t('earnings.text')}
                </p>
            </section>

            {/* CTA */}
            <section className="text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    {t('cta.title')}
                </h2>

                <Link
                    href="apply"
                    className="inline-block px-6 py-3 bg-black text-white rounded-xl"
                >
                    {t('cta.button')}
                </Link>

            </section>

        </main>
    );
}
