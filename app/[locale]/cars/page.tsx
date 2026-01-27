// Дані авто (тимчасово як заміна БД)
import cars from '@/data/cars.json';

// Тип для SEO metadata
import type { Metadata } from 'next';

// Утиліта для створення SEO metadata
import { createMetadata } from "@/lib/seo";

// Link — клієнтська навігація без перезавантаження сторінки
import Link from "next/link";

// Дані оферів (марка + модель)
import { carOffers } from "@/data/cars";

// Компонент картки оферу авто
import CarOfferCard from "@/components/cars/CarOfferCard";

// Server-side API next-intl для перекладів
import { getTranslations } from "next-intl/server";


// ============================
// SEO METADATA (SERVER)
// ============================

// Metadata формується на сервері з урахуванням мови
export async function generateMetadata(): Promise<Metadata> {
    // Підключаємо переклади з namespace "cars"
    const t = await getTranslations("cars");

    // Створюємо SEO metadata без хардкоду
    return createMetadata(
        t("seoTitle"),
        t("seoDescription")
    );
}


// ============================
// СТОРІНКА СПИСКУ АВТО
// ============================

export default async function CarsPage() {

    // Підключаємо переклади для сторінки
    const t = await getTranslations("cars");

    return (
        <section className="container mx-auto px-4 py-12">

            {/* Посилання назад на home */}
            <Link
                href="/"
                className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-6"
            >
                {t("backToHome")}
            </Link>

            {/* Заголовок сторінки */}
            <h1 className="text-3xl font-bold mb-8">
                {t("fleetTitle")}
            </h1>

            {/* Список оферів авто */}
            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                <section className="container mx-auto px-4 py-12 flex justify-center">
                    <div className="flex flex-col gap-8 max-w-3xl w-full">

                        {/* Рендеримо картку для кожного оферу */}
                        {carOffers.map((offer) => (
                            <CarOfferCard
                                key={offer.slug}
                                offer={offer}
                            />
                        ))}

                    </div>
                </section>
            </div>
        </section>
    );
}
