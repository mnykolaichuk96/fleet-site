"use client";
// ⬆️ Client Component, бо:
// - використовує useTranslations
// - рендерить інтерактивні дочірні компоненти (carousel)

import { CarInstance } from "@/types/car";
// ⬆️ Тип даних одного конкретного автомобіля

import CarImageCarousel from "@/components/cars/CarImageCarousel";
// ⬆️ Карусель з фото автомобіля

import { useTranslations } from "next-intl";
// ⬆️ Client-side i18n хук


type Props = {
    // Один конкретний автомобіль з автопарку
    car: CarInstance;
};

export default function CarInstanceCard({ car }: Props) {

    // Підключаємо переклади для namespace "car-instane"
    // (назва така ж, як ти вирішив раніше — тримаємо консистентність)
    const t = useTranslations("car-instane");

    return (
        <div className="rounded-xl border p-5 bg-white">

            {/* IMAGE / CAROUSEL
               Відображає фото автомобіля з можливістю гортання */}
            <CarImageCarousel images={car.images} />


            {/* INFO
               Базова інформація про автомобіль */}
            <div className="mt-4 space-y-1 text-sm text-gray-700">

                {/* Рік випуску */}
                <div>
                    {t("year")}: {car.year}
                </div>

                {/* Пробіг */}
                <div>
                    {t("mileage")}:{" "}
                    {car.mileage.toLocaleString()} km
                </div>

                {/* Статус доступності */}
                <div>
                    {t("status.label")}:{" "}
                    <span
                        className={
                            car.available
                                ? "text-green-600"
                                : "text-gray-400"
                        }
                    >
                        {car.available
                            ? t("status.available")
                            : t("status.unavailable")}
                    </span>
                </div>

            </div>

            {/* EQUIPMENT
               Список комплектації / обладнання автомобіля */}
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                {car.equipment.map((item) => (
                    // item — це вже готовий текст з backend / data layer
                    // тому ми його НЕ перекладаємо тут
                    <li key={item}>{item}</li>
                ))}
            </ul>

        </div>
    );
}
