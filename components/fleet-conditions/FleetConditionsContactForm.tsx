"use client";

import { useTranslations } from "next-intl";
import {ContactForm} from "@/components/cta/ContactForm";

export default function FleetConditionsContactForm() {
    const t = useTranslations("fleet-conditions.contact");
    const isFull = false;

    return (
        <section id="fleet-contact" className="py-2 lg:py-6 pb-6 lg:pb-12">
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
                {isFull && (
                    <div
                        className="
        mb-8 rounded-2xl
        border border-[#FCD34D]
        bg-[#FFF7ED]
        px-6 py-5
        text-left
      "
                    >
                        <h3 className="mb-2 text-lg font-semibold text-[#92400E]">
                            {t("fullCapacity.title")}
                        </h3>

                        <p className="text-sm text-[#92400E]/90 leading-relaxed">
                            {t("fullCapacity.text")}
                        </p>
                    </div>
                )}
                <ContactForm className="fleet-conditions" />
            </div>
        </section>
    );
}
