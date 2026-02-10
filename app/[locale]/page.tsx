// ============================
// ІМПОРТИ
// ============================

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";

// Компоненти
import Hero from '@/components/home/Hero';
import { WhyUsInline } from "@/components/home/WhyUsInline";
import RentCarSection from "@/components/home/RentCarSection";
import FleetCarSection from "@/components/home/FleetCarSection";
import DriverCarSection from "@/components/home/DriverCarSection";
import HomeScrollHandler from "@/components/home/HomeScrollHandler";
import FixedBackground from "@/components/home/FixedBackground";
import FixedOverlay from "@/components/home/FixedOverlay";
import { RequestsInline } from "@/components/home/RequestsInline";
import { ContactFormSection } from "@/components/home/ContactFormSection";



// ============================
// SEO METADATA
// ============================
type Props = {
    params: Promise<{ locale: string }>
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "home"
    });

    return createMetadata({
        title: t("seo.title"),
        description: t("seo.description"),
        pathname: "/",
        locale
    });
}


// ============================
// HOME PAGE
// ============================

export default async function HomePage() {

    return (
        <>
            <FixedBackground />

            <main className="relative z-0">

                <Hero />
                <WhyUsInline />

                <div className="relative">
                    <FixedOverlay />

                    <RentCarSection />
                    <FleetCarSection />
                    <DriverCarSection />

                    <RequestsInline />
                    <ContactFormSection />

                    <HomeScrollHandler />
                </div>

            </main>
        </>
    );
}
