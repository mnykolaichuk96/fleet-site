"use client";
// ⬆️ Client Component, бо:
// - використовує useTranslations
// - є інтерактивним (Link + hover)

import Link from "next/link";
// ⬆️ Клієнтська навігація Next.js

import { useTranslations } from "next-intl";
// ⬆️ Client-side i18n хук

import { CarOffer } from "@/types/car";
// ⬆️ Тип даних оферу (марка + модель + параметри)

type Props = {
    // Один офер автомобіля (модель)
    offer: CarOffer;
};

export default function CarOfferCard({ offer }: Props) {

    // Підключаємо переклади для namespace "cars"
    // (це картка моделі авто, не конкретного екземпляра)
    const t = useTranslations("cars");

    return (
        <Link
            // Переходимо на сторінку конкретної моделі авто
            href={`/cars/${offer.slug}`}
            className="
                rounded-2xl border p-6 bg-white
                hover:shadow-lg transition
            "
        >

            {/* ICON / IMAGE
               Поки що статична іконка моделі.
               Пізніше легко замінюється на offer.image */}
            <div className="h-40 flex items-center justify-center mb-6 bg-gray-50 rounded-xl">
                <img
                    src="/cars/corolla-combi.png"
                    alt={t("offer.imageAlt", {
                        brand: offer.brand,
                        model: offer.model
                    })}
                    className="h-28"
                />
            </div>

            {/* TITLE
               Марка + модель */}
            <h3 className="text-2xl font-semibold mb-2">
                {offer.brand} {offer.model}
            </h3>

            {/* PARAMS
               Ключові характеристики автомобіля */}
            <ul className="space-y-1 text-sm text-gray-600">

                {/* Тип коробки передач */}
                <li>
                    ⚙️ {t("offer.gearbox")}
                </li>

                {/* Тип пального */}
                <li>
                    ⛽ {t("offer.fuel", { fuel: offer.fuel })}
                </li>

                {/* Витрата пального */}
                <li>
                    📉 {t("offer.consumption", {
                    consumption: offer.consumption
                })}
                </li>

            </ul>

            {/* PRICE
               Ціна за тиждень */}
            <div className="mt-5 text-2xl font-bold text-red-600">
                {offer.pricePerWeek} zł
                <span className="text-sm text-gray-500 font-normal">
                    {" "}
                    {t("offer.perWeek")}
                </span>
            </div>

            {/* CTA
               Заклик перейти до списку доступних авто */}
            <div className="mt-4 text-red-600 font-medium">
                {t("offer.cta")} →
            </div>

        </Link>
    );
}
