"use client";
// ⬆️ Client Component, бо:
// - використовує useState
// - реагує на кліки користувача

import { useState } from "react";
import { useTranslations } from "next-intl";
// ⬆️ Client-side i18n хук

type Props = {
    // Масив URL-ів зображень автомобіля
    images: string[];
};

export default function CarImageCarousel({ images }: Props) {

    // Підключаємо переклади з namespace "car-instane"
    // (використовуємо твою назву slug)
    const t = useTranslations("car-instane");

    // index — індекс поточного зображення
    // setIndex — setter для зміни стану
    const [index, setIndex] = useState(0);

    // Якщо зображень немає — не рендеримо компонент
    if (images.length === 0) return null;

    // Перехід до попереднього зображення (циклічно)
    const prev = () =>
        setIndex((i) =>
            i === 0 ? images.length - 1 : i - 1
        );

    // Перехід до наступного зображення (циклічно)
    const next = () =>
        setIndex((i) =>
            i === images.length - 1 ? 0 : i + 1
        );

    return (
        // relative — база для абсолютного позиціонування стрілок
        <div className="relative">

            {/* ОСНОВНЕ ЗОБРАЖЕННЯ */}
            <img
                src={images[index]}
                // alt локалізований + з номером фото
                alt={t("carousel.imageAlt", { index: index + 1 })}
                className="h-64 w-full object-cover rounded-lg"
            />

            {/* СТРІЛКИ НАВІГАЦІЇ */}
            {/* Показуємо тільки якщо є більше одного зображення */}
            {images.length > 1 && (
                <>
                    {/* Попереднє фото */}
                    <button
                        onClick={prev}
                        aria-label={t("carousel.prev")}
                        className="
                            absolute left-2 top-1/2
                            -translate-y-1/2
                            bg-white/80
                            rounded-full
                            px-2 py-1
                            text-lg
                        "
                    >
                        ‹
                    </button>

                    {/* Наступне фото */}
                    <button
                        onClick={next}
                        aria-label={t("carousel.next")}
                        className="
                            absolute right-2 top-1/2
                            -translate-y-1/2
                            bg-white/80
                            rounded-full
                            px-2 py-1
                            text-lg
                        "
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
}
