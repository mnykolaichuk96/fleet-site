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
import RentCarSection from "@/components/home/RentCarSection";
import FleetCarSection from "@/components/home/FleetCarSection";
import DriverCar from "@/components/home/DriverCar";
import FixedBackground from "@/components/home/FixedBackground";
import OverlayFixed from "@/components/home/OverlayFixed";


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
            <FixedBackground/>
            <main className="relative z-0">

            {/* HERO
               Перша секція сторінки:
               головний меседж і перший контакт з користувачем */}
            <Hero />
            <OverlayFixed />   {/* ⬅️ тут */}

            <RentCarSection />
            <FleetCarSection />
            <DriverCar />

            {/* COOPERATION MODES
               Блок з варіантами співпраці */}


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
            </main>
        </>
    );
}
