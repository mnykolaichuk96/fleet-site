import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";

import { eBikeOffers } from "@/data/e-bike";

// UI
import FixedBackground from "@/components/home/FixedBackground";
import EBikeIntro from "@/components/e-bike/EBikeIntro";

// i18n
import { getTranslations } from "next-intl/server";

import { buildEBikeVM } from "@/lib/view-models/buildEBikeVM";
import FaqAccordion from "@/components/e-bike/FaqAccordion";
import EBikesClientSection from "@/components/e-bike/EBikeClientSection";

type Props = {
    params: Promise<{ locale: string }>;
};

// ============================
// METADATA
// ============================

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "e-bike"
    });

    return createMetadata({
        title: t("seoTitle"),
        description: t("seoDescription"),
        pathname: "/e-bike",
        locale
    });
}

// ============================
// PAGE
// ============================

export default async function EBikePage({ params }: Props) {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "e-bike"
    });

    const titleParts = [
        { text: t("title.part1") },
        { text: t("title.part2"), accent: true },
        { text: t("title.part3") }
    ];

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "E-bike rental",
        itemListElement: eBikeOffers.map((bike, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://gingerpartner.pl/${locale}/e-bike/${bike.slug}`,
            item: {
                "@type": "Product",
                name: `${bike.brand} ${bike.model}`,
                brand: {
                    "@type": "Brand",
                    name: bike.brand
                },
                offers: {
                    "@type": "Offer",
                    priceCurrency: "PLN",
                    price: bike.pricePerWeek1,
                    availability: "https://schema.org/InStock"
                }
            }
        }))
    };

    const bikeVMs = eBikeOffers.map((bikeOffer) =>
        buildEBikeVM(bikeOffer, t)
    );

    return (
        <>
            <FixedBackground />

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(itemListSchema)
                }}
            />

            <section className="bg-white/75">

                <div className="container mx-auto px-4 pt-12">
                    <EBikeIntro
                        titleParts={titleParts}
                        subtitle={t("subtitle")}
                    />
                </div>


                <EBikesClientSection
                    bikeVMs={bikeVMs}
                />
                <FaqAccordion />

            </section>
        </>
    );
}
