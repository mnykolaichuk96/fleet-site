// ============================
// ІМПОРТИ
// ============================

// Тип для SEO metadata (title, description, og і т.д.)
import type { Metadata } from "next";

// Наша утиліта, яка формує стандартний набір SEO-метаданих
// (title, description, OpenGraph, Twitter і т.д.)
import { createMetadata } from "@/lib/seo";

// Server-side API next-intl для отримання перекладів
// Використовується тільки в Server Components
import { getTranslations } from "next-intl/server";

// Link — клієнтська навігація Next.js без повного reload
import Link from "next/link";


// ============================
// SEO METADATA (SERVER SIDE)
// ============================

// Next.js викликає generateMetadata ДО рендеру сторінки
// Це важливо для SEO, бо пошукові боти бачать готові meta-теги
export async function generateMetadata(): Promise<Metadata> {

    // Отримуємо переклади для namespace "drivers"
    // Це дозволяє локалізувати title і description
    const t = await getTranslations("drivers");

    // Формуємо SEO-метадані без хардкоду
    return createMetadata(
        t("seo.title"),        // <title>
        t("seo.description")   // <meta name="description">
    );
}


// ============================
// ОСНОВНА СТОРІНКА
// ============================

// Server Component — рендериться на сервері
// Може бути async, бо тут немає client-side хуків
export default async function DriversPage() {

    // Підключаємо переклади для всіх текстів сторінки
    const t = await getTranslations("drivers");

    return (
        <main className="container mx-auto px-4 py-12">

            {/* HERO SECTION
               Основний меседж сторінки:
               хто ми, що пропонуємо і для кого */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold mb-4">
                    {t("title")}
                </h1>

                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {t("subtitle")}
                </p>
            </section>

            {/* BENEFITS
               3 ключові переваги співпраці,
               розбиті на окремі логічні блоки */}
            <section className="grid md:grid-cols-3 gap-6 mb-16">

                <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">
                        {t("benefits.flexible.title")}
                    </h3>
                    <p className="text-gray-600">
                        {t("benefits.flexible.text")}
                    </p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">
                        {t("benefits.legal.title")}
                    </h3>
                    <p className="text-gray-600">
                        {t("benefits.legal.text")}
                    </p>
                </div>

                <div className="p-6 border rounded-xl">
                    <h3 className="font-semibold mb-2">
                        {t("benefits.support.title")}
                    </h3>
                    <p className="text-gray-600">
                        {t("benefits.support.text")}
                    </p>
                </div>

            </section>

            {/* REQUIREMENTS
               Формальні вимоги до кандидата.
               Винесені окремо, щоб уникнути "сюрпризів" */}
            <section className="mb-16">

                <h2 className="text-2xl font-semibold mb-6">
                    {t("requirements.title")}
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>{t("requirements.items.license")}</li>
                    <li>{t("requirements.items.age")}</li>
                    <li>{t("requirements.items.documents")}</li>
                    <li>{t("requirements.items.availability")}</li>
                </ul>

            </section>

            {/* EARNINGS
               Блок про фінансові умови —
               без конкретних цифр, але з чітким меседжем */}
            <section className="bg-gray-100 p-8 rounded-xl mb-16">

                <h2 className="text-2xl font-semibold mb-4">
                    {t("earnings.title")}
                </h2>

                <p className="text-gray-700 max-w-2xl">
                    {t("earnings.text")}
                </p>

            </section>

            {/* CTA
               Заклик до дії — фінальна точка сторінки */}
            <section className="text-center">

                <h2 className="text-2xl font-semibold mb-4">
                    {t("cta.title")}
                </h2>

                <Link
                    href="/apply"
                    className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition"
                >
                    {t("cta.button")}
                </Link>

            </section>

        </main>
    );
}
