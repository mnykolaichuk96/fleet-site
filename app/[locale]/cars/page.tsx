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
// TYPES
// ============================

type Props = {
    params: Promise<{ locale: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { locale } = await params

    const t = await getTranslations({
        locale,
        namespace: "carOffer"
    })

    return createMetadata({
        title: t("seoTitle"),           // ⬅ важливо
        description: t("seoDescription"), // ⬅ важливо
        pathname: "/cars",
        locale
    })
}


// ============================
// PAGE
// ============================

export default async function CarsPage( { params }: Props) {
    const t = await getTranslations("carOffer");

    const { locale } = await params

    const titleParts = [
        { text: t("fleetTitle.part1") },
        { text: t("fleetTitle.part2"), accent: true }, // ginger
        { text: t("fleetTitle.part3") },
    ];

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Dostępne samochody",
        itemListElement: carOffers.map((offer, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `https://gingerpartner.pl/${locale}/cars/${offer.slug}`,
            item: {
                "@type": "Vehicle",
                name: `${offer.brand} ${offer.model}`,
                brand: {
                    "@type": "Brand",
                    name: offer.brand
                },
                fuelType: offer.fuel,
                vehicleTransmission: offer.gearbox,
                offers: {
                    "@type": "Offer",
                    priceCurrency: "PLN",
                    price: offer.pricePerWeek,
                    availability: "https://schema.org/InStock"
                }
            }
        }))
    }

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
                    <CarOfferIntro
                        titleParts={titleParts}
                        rentalConditions={t("rentalConditions")}
                    />
                </div>

                <div className="space-y-8 pb-16">
                    {carOffers.map((carOffer) => {
                        const vm = buildCarOfferVM(carOffer, t)
                        return <CarOfferCard key={vm.slug} vm={vm} />
                    })}
                </div>
            </section>
        </>
    )
}