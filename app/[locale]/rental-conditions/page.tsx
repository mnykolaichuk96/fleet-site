import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

import QuickConditions from "@/components/rental-conditions/QuickConditions";
import FixedBackground from "@/components/home/FixedBackground";
import FixedOverlay from "@/components/home/FixedOverlay";
import DetailsAccordion from "@/components/rental-conditions/DetailsAccordion";
import RentalConditionsIntro from "@/components/rental-conditions/RentalConditionsIntro";
import CtaSection from "@/components/rental-conditions/CtaSection";

type Props = {
    params: Promise<{ locale: string }>
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "rental-conditions"
    });

    return createMetadata({
        title: t("seo.title"),
        description: t("seo.description"),
        pathname: "/rental-conditions",
        locale
    });
}

export default async function RentalConditionsPage({ params }: Props) {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "rental-conditions"
    });

    const faqItems = t.raw("details.items") as {
        title: string;
        intro?: string | string[];
        content: string[];
    }[];

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `https://gingerpartner.pl/${locale}`
            },
            {
                "@type": "ListItem",
                position: 2,
                name: t("seo.breadcrumb"),
                item: `https://gingerpartner.pl/${locale}/rental-conditions`
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(item => ({
            "@type": "Question",
            name: item.title,
            acceptedAnswer: {
                "@type": "Answer",
                text: [
                    ...(Array.isArray(item.intro)
                        ? item.intro
                        : item.intro
                            ? [item.intro]
                            : []),
                    ...item.content
                ].join(" ")
            }
        }))
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: t("seo.serviceName"),
        provider: {
            "@type": "Organization",
            name: "GinGer Partner",
            url: "https://gingerpartner.pl"
        },
        areaServed: {
            "@type": "Country",
            name: "Poland"
        },
        serviceType: t("seo.serviceName")
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema)
                }}
            />

            <FixedBackground />

            <main className="relative z-0">
                <FixedOverlay />

                <RentalConditionsIntro />
                <QuickConditions />
                <DetailsAccordion />
                <CtaSection />
            </main>
        </>
    );
}
