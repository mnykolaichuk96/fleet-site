import {getTranslations} from "next-intl/server";
import {carOffers} from "@/data/car-offer";
import {carInstances} from "@/data/car-instance";
import {buildCarOfferVM} from "@/lib/view-models/buildCarOfferVM";
import {buildCarInstanceVM} from "@/lib/view-models/buildCarInstanceVM";
import FixedBackground from "@/components/home/FixedBackground";
import CarOfferIntro from "@/components/car-offer/CarOfferIntro";
import { notFound } from "next/navigation";
import CarInstanceIntro from "@/components/car-instance/CarInstanceIntro";
import CarInstanceCard from "@/components/car-instance/CarInstanceCard";

export const dynamic = "force-dynamic";

type PageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CarOfferDetailPage({ params }: PageProps) {
    const { slug } = await params;

    const tOffer = await getTranslations("carOffer");
    const tInstance = await getTranslations("carInstance");

    // 1. DATA
    const offer = carOffers.find(
        (o) => o.slug === slug
    );
    if (!offer) {
        notFound();
    }

    const instances = carInstances.filter(
        (i) => i.offerSlug === slug
    );

    // 2. VM
    const offerVM = buildCarOfferVM(offer, tOffer);

    const subtitle = [
        offerVM.specs.gearbox,
        offerVM.specs.fuel,
        offerVM.specs.consumption,
    ].join(" • ");

    const instanceVMs = instances.map((instance) =>
        buildCarInstanceVM(instance, tInstance)
    );

    return (
        <>
            <FixedBackground />

            <section className="bg-white/75">
                {/* HERO / INTRO */}
                <div className="container mx-auto px-4 pt-12">
                    <CarInstanceIntro
                        brand={offerVM.brand}
                        model={offerVM.model}
                        subtitle={subtitle}
                        backLabel={tInstance("intro.backToOffers")}
                        rentalConditionsLabel={tInstance("intro.rentalConditions")}
                    />
                </div>

                {/* INSTANCES */}
                <div className="space-y-8 pb-16">
                    {instanceVMs.map((vm) => (
                        <CarInstanceCard
                            key={vm.id}
                            vm={vm}
                        />
                    ))}
                </div>

            </section>
        </>
    );
}























// // ============================
// // ІМПОРТИ
// // ============================
//
// // Дані авто з JSON (поки що заміна БД)
// import cars from '@/data/cars.json';
//
// // Тип для SEO metadata
// import type { Metadata } from 'next';
//
// // Утиліта для створення SEO metadata
// import { createMetadata } from "@/lib/seo";
//
// // Функція Next.js для повернення 404
// import { notFound } from "next/navigation";
//
// // Дані оферів та конкретних авто
// import { carInstances } from "@/data/car-instance";
//
// // Компонент для рендеру конкретного авто
// import CarInstanceCard from "@/components/car-instance/CarInstanceCard";
//
// // Link — клієнтська навігація без reload
// import Link from "next/link";
//
// // Хук next-intl для роботи з перекладами (SERVER version)
// import { getTranslations } from "next-intl/server";
// import {carOffers} from "@/data/car-offer";
//
//
// // ============================
// // ТИПИ
// // ============================
//
// // Тип props, які Next.js передає сторінці
// // params — Promise, бо App Router асинхронний
// type PageProps = {
//     params: Promise<{
//         slug: string; // частина URL: /car-instance/[slug]
//     }>;
// };
//
//
// // ============================
// // SEO METADATA (SERVER)
// // ============================
//
// // Ця функція викликається Next.js ДО рендеру сторінки
// export async function generateMetadata(
//     { params }: PageProps
// ): Promise<Metadata> {
//
//     // Отримуємо slug з URL
//     const { slug } = await params;
//
//     // Підтягуємо переклади з namespace "car-instance"
//     const t = await getTranslations("carInstance");
//
//     // Шукаємо авто в JSON
//     const car = cars.find(c => c.slug === slug);
//
//     // Якщо авто не знайдене — SEO для 404
//     if (!car) {
//         return createMetadata(
//             t("notFoundTitle"),
//             t("notFoundDescription")
//         );
//     }
//
//     // SEO для знайденого авто
//     return createMetadata(
//         t("seoTitle", { title: car.title }),
//         t("seoDescription", { title: car.title })
//     );
// }
//
//
// // ============================
// // ОСНОВНА СТОРІНКА АВТО
// // ============================
//
// export default async function CarModelPage({ params }: PageProps) {
//
//     // Отримуємо slug з URL
//     const { slug } = await params;
//
//     // Підключаємо переклади
//     const t = await getTranslations("carInstance");
//
//     // Шукаємо офер (марка + модель)
//     const offer = carOffers.find((o) => o.slug === slug);
//
//     // Якщо офер не знайдений — 404
//     if (!offer) {
//         notFound();
//     }
//
//     // Фільтруємо конкретні авто по offerSlug
//     const instances = carInstances.filter(
//         (car) => car.offerSlug === offer.slug
//     );
//
//     // JSX — декларативний опис DOM
//     return (
//         <section className="container mx-auto px-4 py-12">
//
//             {/* HEADER сторінки */}
//             <header className="mb-10">
//
//                 {/* Кнопка повернення до флоту */}
//                 <Link
//                     href="/cars"
//                     className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-6"
//                 >
//                     {t("backToFleet")}
//                 </Link>
//
//                 {/* Назва авто */}
//                 <h1 className="text-3xl font-bold">
//                     {offer.brand} {offer.model}
//                 </h1>
//
//                 {/* Опис авто (з параметрами) */}
//                 <p className="mt-2 text-gray-600 max-w-xl">
//                     {t("description", {
//                         consumption: offer.consumption
//                     })}
//                 </p>
//
//                 {/* Ціна */}
//                 <div className="mt-4 text-xl font-semibold text-red-600">
//                     {t("pricePerWeek", {
//                         price: offer.pricePerWeek
//                     })}
//                 </div>
//             </header>
//
//             {/* Список конкретних автомобілів */}
//             <div className="flex flex-col gap-8 max-w-3xl mx-auto">
//
//                 {/* Рендеримо картки авто */}
//                 {instances.map((car) => (
//                     <CarInstanceCard
//                         key={car.id}
//                         car={car}
//                     />
//                 ))}
//
//             </div>
//         </section>
//     );
// }
