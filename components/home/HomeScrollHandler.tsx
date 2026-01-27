"use client";
// ⬆️ Client Component, бо:
// - використовує useEffect
// - читає URL (search params)
// - взаємодіє з DOM (scroll)

import { useEffect } from "react";
// ⬆️ React-хук для виконання побічних ефектів
// Аналог:
// - Java: код у @PostConstruct / listener
// - Python: код, що виконується після ініціалізації

import { useSearchParams, useRouter } from "next/navigation";
// ⬆️ Хук Next.js для читання query-параметрів з URL
// Наприклад: /?scroll=contact

import { scrollToElement } from "@/lib/scrollToElement";
// ⬆️ Наша утиліта для плавного скролу до DOM-елемента за id


/**
 * HomeScrollHandler
 *
 * Компонент НЕ рендерить UI.
 * Його єдина задача:
 * - зчитати параметр `scroll` з URL
 * - проскролити сторінку до відповідного елемента
 *
 * Приклад:
 *   /pl?scroll=contact
 *   /pl?scroll=cars
 */
export default function HomeScrollHandler() {

    // Отримуємо обʼєкт з query-параметрами URL
    const searchParams = useSearchParams();

    // Router Next.js (client-side)
    const router = useRouter();

    // useEffect виконується:
    // - після першого рендеру компонента
    // - кожного разу, коли змінюються searchParams
    useEffect(() => {

        // Читаємо значення параметра "scroll"
        // Якщо URL = ?scroll=contact → target = "contact"
        const target = searchParams.get("scroll");

        // Якщо параметр існує — виконуємо скрол
        if (target) {
            // 1️⃣ Wykonujemy scroll do elementu
            scrollToElement(target);

            // 2️⃣ Usuwamy parametr ?scroll z URL
            // replace():
            // - NIE dodaje nowego wpisu do historii
            // - NIE powoduje ponownego renderu strony
            router.replace("/", { scroll: false });
        }

    }, [searchParams, router]);
    // ⬆️ Efekt uruchamia się:
    // - po pierwszym renderze
    // - gdy zmienią się parametry URL

    // Компонент нічого не рендерить у DOM
    return null;
}
