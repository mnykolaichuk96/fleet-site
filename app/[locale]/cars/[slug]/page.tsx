// ============================
// ІМПОРТИ
// ============================

// Дані авто з JSON (поки що заміна БД)
import cars from '@/data/cars.json';

// Тип для SEO metadata
import type { Metadata } from 'next';

// Утиліта для створення SEO metadata
import { createMetadata } from "@/lib/seo";

// Функція Next.js для повернення 404
import { notFound } from "next/navigation";

// Дані оферів та конкретних авто
import { carOffers, carInstances } from "@/data/cars";

// Компонент для рендеру конкретного авто
import CarInstanceCard from "@/components/cars/CarInstanceCard";

// Link — клієнтська навігація без reload
import Link from "next/link";

// Хук next-intl для роботи з перекладами (SERVER version)
import { getTranslations } from "next-intl/server";


// ============================
// ТИПИ
// ============================

// Тип props, які Next.js передає сторінці
// params — Promise, бо App Router асинхронний
type PageProps = {
    params: Promise<{
        slug: string; // частина URL: /cars/[slug]
    }>;
};


// ============================
// SEO METADATA (SERVER)
// ============================

// Ця функція викликається Next.js ДО рендеру сторінки
export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {

    // Отримуємо slug з URL
    const { slug } = await params;

    // Підтягуємо переклади з namespace "cars"
    const t = await getTranslations("carInstance");

    // Шукаємо авто в JSON
    const car = cars.find(c => c.slug === slug);

    // Якщо авто не знайдене — SEO для 404
    if (!car) {
        return createMetadata(
            t("notFoundTitle"),
            t("notFoundDescription")
        );
    }

    // SEO для знайденого авто
    return createMetadata(
        t("seoTitle", { title: car.title }),
        t("seoDescription", { title: car.title })
    );
}


// ============================
// ОСНОВНА СТОРІНКА АВТО
// ============================

export default async function CarModelPage({ params }: PageProps) {

    // Отримуємо slug з URL
    const { slug } = await params;

    // Підключаємо переклади
    const t = await getTranslations("carInstance");

    // Шукаємо офер (марка + модель)
    const offer = carOffers.find((o) => o.slug === slug);

    // Якщо офер не знайдений — 404
    if (!offer) {
        notFound();
    }

    // Фільтруємо конкретні авто по offerSlug
    const instances = carInstances.filter(
        (car) => car.offerSlug === offer.slug
    );

    // JSX — декларативний опис DOM
    return (
        <section className="container mx-auto px-4 py-12">

            {/* HEADER сторінки */}
            <header className="mb-10">

                {/* Кнопка повернення до флоту */}
                <Link
                    href="/cars"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-6"
                >
                    {t("backToFleet")}
                </Link>

                {/* Назва авто */}
                <h1 className="text-3xl font-bold">
                    {offer.brand} {offer.model}
                </h1>

                {/* Опис авто (з параметрами) */}
                <p className="mt-2 text-gray-600 max-w-xl">
                    {t("description", {
                        consumption: offer.consumption
                    })}
                </p>

                {/* Ціна */}
                <div className="mt-4 text-xl font-semibold text-red-600">
                    {t("pricePerWeek", {
                        price: offer.pricePerWeek
                    })}
                </div>
            </header>

            {/* Список конкретних автомобілів */}
            <div className="flex flex-col gap-8 max-w-3xl mx-auto">

                {/* Рендеримо картки авто */}
                {instances.map((car) => (
                    <CarInstanceCard
                        key={car.id}
                        car={car}
                    />
                ))}

            </div>
        </section>
    );
}
