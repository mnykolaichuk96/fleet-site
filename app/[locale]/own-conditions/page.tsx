import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { createMetadata } from "@/lib/seo";

import FixedBackground from "@/components/home/FixedBackground";

import OwnConditionsIntro from "@/components/own-conditions/OwnConditionsIntro";
import OwnConditionsTable from "@/components/own-conditions/OwnConditionsTable";
import OwnConditionsAccordion from "@/components/own-conditions/OwnConditionsAccordion";
import OwnConditionsContactForm from "@/components/own-conditions/OwnConditionsContactForm";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("own-conditions");

    return createMetadata(
        t("seo.title"),
        t("seo.description")
    );
}

export default async function OwnConditionsPage() {
    const t = await getTranslations("own-conditions");

    return (
        <>
            <FixedBackground />

            <section className="bg-white/75">
                <div className="container mx-auto px-4 pt-12">

                    {/* INTRO */}
                    <OwnConditionsIntro />

                    {/* TABLE (Quick conditions clone) */}
                    <OwnConditionsTable />

                    {/* ACCORDION */}
                    <OwnConditionsAccordion />

                    {/* CONTACT FORM */}
                    <OwnConditionsContactForm />

                </div>
            </section>
        </>
    );
}
