"use client";
// ⬆️ Позначаємо компонент як Client Component,
// бо тут використовуються хуки, router і DOM-скрол.

import { useRouter, usePathname } from "next/navigation";
// ⬆️ useRouter — для програмної навігації (router.push)
// ⬆️ usePathname — щоб дізнатись, на якій сторінці ми зараз

import { useLocale } from "next-intl";
// ⬆️ Хук з next-intl — повертає поточну мову сайту (pl, en, ua і т.д.)

import { scrollToElement } from "@/lib/scrollToElement";
// ⬆️ Наша утиліта для плавного скролу до елемента по id
// (з offset і retry, якщо DOM ще не готовий)


// Тип пропсів для кнопки
type Props = {
    // target визначає, КУДИ має скролити кнопка
    // "cars" → секція вибору авто
    // "contact" → форма заявки
    // "cooperation-modes" → секція "Jak możesz z nami pracować?"
    target: "cars" | "contact" | "cooperation-modes";

    // children — текст або іконка кнопки
    children: React.ReactNode;
};

export default function HeaderNavButton({ target, children }: Props) {
    // router — для редіректу між сторінками
    const router = useRouter();

    // pathname — поточний URL (/pl, /pl/cars, /pl/cars/slug і т.д.)
    const pathname = usePathname();

    // locale — поточна мова, наприклад "pl"
    const locale = useLocale();

    // Перевіряємо, чи ми зараз на home page
    // Для сайту з /[locale] home може бути:
    // /pl або /pl/
    const isHome =
        pathname === `/${locale}` || pathname === `/${locale}/`;

    // Обробник кліку по кнопці
    const handleClick = () => {
        if (isHome) {
            // Якщо ми вже на головній сторінці —
            // просто робимо плавний скрол до потрібної секції

            scrollToElement(
                target === "cars"
                    ? "cars-preview"            // секція з превʼю авто
                    : target === "contact"
                        ? "contact-form"            // форма заявки
                        : "cooperation-modes"       // секція моделей співпраці
            );
        } else {
            // Якщо ми НЕ на home —
            // переходимо на головну сторінку
            // і передаємо в URL, куди треба скролити
            // (HomeScrollHandler зчитає це і зробить scroll)

            router.push(`/${locale}?scroll=${target}`);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="text-sm text-gray-700 hover:text-black"
        >
            {children}
        </button>
    );
}
