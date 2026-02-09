"use client";

import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/cta/ContactForm";

export default function OwnConditionsContactForm() {
    const t = useTranslations("own-conditions.contact");

    return (
        <section id="own-contact" className="py-2 lg:py-6 pb-6 lg:pb-12">
            <div
                className="
                    mx-auto max-w-4xl
                    rounded-3xl
                    bg-white/85
                    backdrop-blur-2xl
                    px-8 py-12 md:px-14 md:py-14
                    text-center
                    shadow-[0_30px_70px_-35px_rgba(0,0,0,0.18)]
                "
            >
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#0A1A2F]/85">
                    {t("title")}
                </h2>

                <p className="mb-8 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                    {t("description")}
                </p>

                <ContactForm className="own-conditions" />
            </div>
        </section>
    );
}
