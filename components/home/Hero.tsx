"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("home.hero");

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            <div
                className="
                    pointer-events-none select-none
                    absolute top-1/2 right-[5%]
                    -translate-y-1/2
                    rotate-[10deg]
                    z-10
                  "
            >
                <div
                    className="
                      relative
                      flex flex-col items-center justify-center
                      w-[240px] h-[240px]
                      rounded-full
                      border-2 border-[#0B1C2D]
                      bg-white/55
                      backdrop-blur-sm
                    "
                >
                    <span className="text-[11px] tracking-[0.3em] uppercase text-[#0B1C2D]/80">
                      {t("qualityMark.label")}
                    </span>

                    <span className="mt-3 text-[21px] font-semibold tracking-widest text-[#0B1C2D]">
                      {t("qualityMark.partner")}
                    </span>

                    <span className="mt-2 text-[10px] tracking-[0.35em] uppercase text-[#0B1C2D]/80">
                      {t("qualityMark.note")}
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-20 flex min-h-[100svh] items-center justify-center px-6">
                <div className="text-center max-w-[720px]">

                    {/* TITLE */}
                    <h1
                        className="
                            flex justify-center gap-3
                            text-[clamp(4rem,9vw,7rem)]
                            font-semibold
                            tracking-tight
                            leading-none
                            mb-8
                        "
                    >
                        <span className="text-[#D97706] tracking-wide">
                            {t("title.brand")}
                        </span>
                        <span className="text-[#0A1A2F]/85 font-medium">
                            {t("title.partner")}
                        </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p className="mt-2 text-xl md:text-3xl font-normal leading-[1.6]">
                        <span className="text-[#0A1A2F]/85">
                            {t("subtitle.line1")}
                        </span>
                        <span className="text-[#D97706]">
                            {" "}{t("subtitle.highlight1")}
                        </span>
                        <br />
                        <span className="text-[#0A1A2F]/85">
                            {t("subtitle.line2")}
                        </span>
                        <span className="text-[#D97706]">
                            {" "}{t("subtitle.highlight2")}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
