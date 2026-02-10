import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

import FixedBackground from "@/components/home/FixedBackground";

import OwnConditionsIntro from "@/components/own-conditions/OwnConditionsIntro";
import OwnConditionsTable from "@/components/own-conditions/OwnConditionsTable";
import OwnConditionsAccordion from "@/components/own-conditions/OwnConditionsAccordion";
import OwnConditionsContactForm from "@/components/own-conditions/OwnConditionsContactForm";

type Props = {
    params: Promise<{ locale: string }>
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "own-conditions"
    });

    return createMetadata({
        title: t("seo.title"),
        description: t("seo.description"),
        pathname: "/own-conditions",
        locale
    });
}

export default async function OwnConditionsPage({ params }: Props) {

    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "own-conditions"
    });

    const faqItems = t.raw("details.items") as {
        title: string;
        intro?: string;
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
                item: `https://gingerpartner.pl/${locale}/own-conditions`
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
                    item.intro ?? "",
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

            <section className="bg-white/75">
                <main className="relative z-0">

                    <OwnConditionsIntro />
                    <OwnConditionsTable />
                    <OwnConditionsAccordion />
                    <OwnConditionsContactForm />

                </main>
            </section>
        </>
    );
}
