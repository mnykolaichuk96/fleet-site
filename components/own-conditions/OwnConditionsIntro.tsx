"use client";

import { useTranslations } from "next-intl";

export default function OwnConditionsIntro() {
    const t = useTranslations("own-conditions");

    const handleScrollToContact = () => {
        const el = document.getElementById("own-contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                        mb-6
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
                <p className="mb-8 text-[clamp(0.95rem,1.4vw,1.05rem)] text-[#0A1A2F]/65">
                    {t("intro.description")}
                </p>

                {/* CTA */}
                <button
                    type="button"
                    onClick={handleScrollToContact}
                    className="
                        inline-flex items-center justify-center
                        rounded-xl
                        bg-[#D97706]
                        px-10 py-4
                        text-white font-medium
                        hover:bg-[#B45309]
                        transition
                    "
                >
                    {t("intro.cta")} →
                </button>

            </div>
        </section>
    );
}
