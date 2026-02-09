import FixedBackground from "@/components/home/FixedBackground";
import FixedOverlay from "@/components/home/FixedOverlay";

import FleetConditionsIntro from "@/components/fleet-conditions/FleetConditionsIntro";
import FleetConditionsTable from "@/components/fleet-conditions/FleetConditionsTable";
import FleetConditionsAccordion from "@/components/fleet-conditions/FleetConditionsAccordion";
import FleetConditionsContactForm from "@/components/fleet-conditions/FleetConditionsContactForm";

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getTranslations } from "next-intl/server";


type Props = {
    params: Promise<{ locale: string }>
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "fleet-conditions"
    });

    return createMetadata({
        title: t("seo.title"),
        description: t("seo.description"),
        pathname: "/fleet-conditions",
        locale
    });
}

export default async function FleetConditionsPage({ params }:Props) {

    const { locale } = await params
    const t = await getTranslations("fleet-conditions");

    const faqItems = t.raw("accordion.items") as {
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
                item: `https://gingerpartner.pl/${locale}/fleet-conditions`
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema)
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <FixedBackground />

            <main className="relative z-0">
                <FixedOverlay />

                <FleetConditionsIntro />

                <FleetConditionsTable />

                <FleetConditionsAccordion />

                <FleetConditionsContactForm />
            </main>
        </>
    );
}
