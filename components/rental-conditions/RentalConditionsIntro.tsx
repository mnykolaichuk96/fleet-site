// app/warunki-wynajmu/components/RentalConditionsIntro.tsx

"use client";

import { useTranslations } from "next-intl";

export default function RentalConditionsIntro() {
    const t = useTranslations("rental-conditions");

    return (
        <section className="pt-10 lg:pt-14 pb-12">
            <div className="max-w-4xl mx-auto text-center">

                {/* TITLE */}
                <h1
                    className="
            flex flex-wrap justify-center gap-2
            text-[clamp(2.25rem,5vw,3.5rem)]
            tracking-tight
            leading-tight
            mb-5
          "
                >
          <span className="text-[#0A1A2F]/85 font-medium">
            {t("intro.title.part1")}
          </span>
                    <span className="text-[#D97706] font-semibold">
            {t("intro.title.part2")}
          </span>
                    <span className="text-[#0A1A2F]/85 font-medium">
            {t("intro.title.part3")}
          </span>
                </h1>

                {/* DESCRIPTION */}
                <p className="text-[clamp(0.95rem,1.4vw,1.05rem)] text-[#0A1A2F]/65">
                    {t("intro.description")}
                </p>

            </div>
        </section>
    );
}
