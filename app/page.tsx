import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
    const t = useTranslations('home');

    return (
        <main className="container mx-auto px-4 py-12">

            {/* HERO */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    {t('title')}
                </h1>

                <p className="text-lg text-gray-600 mb-6">
                    {t('subtitle')}
                </p>

                <div className="flex justify-center gap-4">
                    <Link
                        href="/drivers"
                        className="px-6 py-3 bg-black text-white rounded-xl"
                    >
                        {t('ctaDrivers')}
                    </Link>

                    <Link
                        href="/cars"
                        className="px-6 py-3 border rounded-xl"
                    >
                        {t('ctaCars')}
                    </Link>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="grid md:grid-cols-3 gap-6 mb-16">
                <div className="p-6 border rounded-xl">
                    {t('benefit1')}
                </div>
                <div className="p-6 border rounded-xl">
                    {t('benefit2')}
                </div>
                <div className="p-6 border rounded-xl">
                    {t('benefit3')}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center bg-gray-100 p-10 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4">
                    {t('ctaTitle')}
                </h2>

                <a
                    href="/apply"
                    className="inline-block px-6 py-3 bg-black text-white rounded-xl"
                >
                    {t('ctaButton')}
                </a>
            </section>

        </main>
    );
}
