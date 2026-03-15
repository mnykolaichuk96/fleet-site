"use client";

import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";
import {useTranslations} from "next-intl";

type IntroTitlePart = {
    text: string;
    accent?: boolean;
};

type Props = {
    titleParts: IntroTitlePart[];
    subtitle: string;
};

export default function EBikeIntro({ titleParts, subtitle }: Props) {
    const { navigate } = useHeaderNavigation();
    const t = useTranslations("faq");

    return (
        <section className="text-center mb-12">
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
                {titleParts.map((part, idx) => (
                    <span
                        key={idx}
                        className={
                            part.accent
                                ? "text-[#D97706] font-semibold"
                                : "text-[#0A1A2F]/85 font-medium"
                        }
                    >
            {part.text}
          </span>
                ))}
            </h1>

            {/* SUBTITLE */}
            <p className="text-lg text-[#0A1A2F]/70 max-w-xl mx-auto">
                {subtitle}
            </p>

            <button
                onClick={() => navigate("faq")}
                className="
          inline-flex items-center gap-2
          text-base sm:text-xl
          font-medium
          text-[#0A1A2F]/85
          hover:text-[#D97706]
          transition-colors
          mt-6
        "
            >
                {t("faq")}
                <span className="transition-transform group-hover:translate-y-0.5">
          ↓
        </span>
            </button>
        </section>
    );
}
