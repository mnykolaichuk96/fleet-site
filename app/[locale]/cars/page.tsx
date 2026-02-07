import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

import { carOffers } from "@/data/car-offer";

// UI
import CarOfferCard from "@/components/car-offer/CarOfferCard";
import FixedBackground from "@/components/home/FixedBackground";

// i18n
import { getTranslations } from "next-intl/server";

import CarOfferIntro from "@/components/car-offer/CarOfferIntro";
import {buildCarOfferVM} from "@/lib/view-models/buildCarOfferVM";


// ============================
// SEO METADATA (SERVER)
// ============================

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("carOffer");

    return createMetadata(
        t("seoTitle"),
        t("seoDescription")
    );
}


// ============================
// PAGE
// ============================

export default async function CarsPage() {
    const t = await getTranslations("carOffer");

    const titleParts = [
        { text: t("fleetTitle.part1") },
        { text: t("fleetTitle.part2"), accent: true }, // ginger
        { text: t("fleetTitle.part3") },
    ];

    return (
        <>
            <FixedBackground />

            <section className="bg-white/75">
                {/* INTRO */}
                <div className="container mx-auto px-4 pt-12">
                    <CarOfferIntro titleParts={titleParts} rentalConditions={t("rentalConditions")}/>
                </div>

                {/* CAR OFFERS */}
                <div className="space-y-8 pb-16">
                    {carOffers.map((carOffer) => {
                        const vm = buildCarOfferVM(carOffer, t);

                        return (
                            <CarOfferCard
                                key={vm.slug}
                                vm={vm}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
}
