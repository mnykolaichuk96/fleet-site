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
import {WhyUsInline} from "@/components/home/WhyUsInline";
import RentCarSection from "@/components/home/RentCarSection";
import FleetCarSection from "@/components/home/FleetCarSection";
import DriverCarSection from "@/components/home/DriverCarSection";
import CTA from "@/components/home/CTA";

import HomeScrollHandler from "@/components/home/HomeScrollHandler";
import FixedBackground from "@/components/home/FixedBackground";
import FixedOverlay from "@/components/home/FixedOverlay";
import {RequestsInline} from "@/components/home/RequestsInline";
import {ContactFormSection} from "@/components/home/ContactFormSection";


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

            <Hero />
                <WhyUsInline/>
            <div className="relative">
                <FixedOverlay />

            <RentCarSection />
            <FleetCarSection />
            <DriverCarSection />

            <RequestsInline/>
            <ContactFormSection/>

            {/*<CTA />*/}

            {/* HOME SCROLL HANDLER
               Обробляє scroll після редіректу з інших сторінок
               (/?scroll=cars, /?scroll=contact і т.д.) */}
            <HomeScrollHandler />
            </div>
            </main>
        </>
    );
}
