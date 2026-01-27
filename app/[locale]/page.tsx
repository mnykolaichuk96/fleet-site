// ============================
// ІМПОРТИ
// ============================

// Тип для SEO metadata
import type { Metadata } from "next";

// Утиліта для створення стандартних SEO-метаданих
import { createMetadata } from "@/lib/seo";

// Server-side API next-intl для перекладів
import { getTranslations } from "next-intl/server";

// Компоненти головної сторінки
import Hero from '@/components/home/Hero';
import CooperationModes from '@/components/home/CooperationModes';
import WhyUs from "@/components/home/WhyUs";
import FleetPreview from "@/components/home/FleetPreview";
import CTA from "@/components/home/CTA";
import HomeScrollHandler from "@/components/home/HomeScrollHandler";


// ============================
// SEO METADATA (SERVER SIDE)
// ============================

// Metadata формується на сервері,
// щоб пошукові боти одразу бачили правильні meta-теги
export async function generateMetadata(): Promise<Metadata> {

    // Підключаємо переклади для home page
    const t = await getTranslations("home");

    return createMetadata(
        t("seo.title"),
        t("seo.description")
    );
}


// ============================
// HOME PAGE
// ============================

// Головна сторінка сайту
// Server Component — рендериться на сервері
export default async function HomePage() {

    // Підключаємо переклади для контенту сторінки
    // (Server Component → getTranslations)
    const t = await getTranslations("home");

    return (
        <>
            {/* HERO
               Перша секція сторінки:
               головний меседж і перший контакт з користувачем */}
            <Hero />

            {/* COOPERATION MODES
               Блок з варіантами співпраці */}
            <CooperationModes />

            {/* WHY US
               Пояснення, чому варто обрати саме нас */}
            <WhyUs />

            {/* FLEET PREVIEW
               Превʼю автопарку з можливістю переходу */}
            <FleetPreview />

            {/* CTA
               Заклик до дії (форма / кнопка) */}
            <CTA />

            {/* HOME SCROLL HANDLER
               Обробляє scroll після редіректу з інших сторінок
               (/?scroll=cars, /?scroll=contact і т.д.) */}
            <HomeScrollHandler />
        </>
    );
}
