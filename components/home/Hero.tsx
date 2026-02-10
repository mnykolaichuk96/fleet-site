"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
    const t = useTranslations("home.hero");

    return (
        <section id="hero" className="relative overflow-hidden">
            <div
                className="
                    pointer-events-none select-none
                    absolute
                    top-1/2 -translate-y-[0%] right-[5%]
                    md:top-1/2 md:-translate-y-[40%] md:right-[5%]
                    lg:top-1/2 lg:-translate-y-[5%] lg:right-[5%]


                    rotate-[10deg]
                    z-10
                    "
            >
                <div
                    className="
                      relative
                      flex flex-col items-center justify-center
                      w-[160px] h-[160px]
                      sm:w-[200px] sm:h-[200px]
                      lg:w-[240px] lg:h-[240px]
                      rounded-full
                      border-2 border-[#0B1C2D]
                      bg-white/55
                      text-center
                      px-4
                    "
                >
                    <span className="
                        text-[10px] md:text-[14px] lg:text-[16px]
                        tracking-[0.2em] sm:tracking-[0.3em]
                        uppercase
                        text-[#0B1C2D]/80
                    ">
                        {t("qualityMark.label")}
                    </span>

                    <span className="
                        mt-2 sm:mt-3
                        text-[10px] md:text-[18px] lg:text-[21px]
                        font-semibold
                        tracking-wider sm:tracking-widest
                        text-[#0B1C2D]
                    ">
                        {t("qualityMark.partner")}
                    </span>

                    <span className="
                        mt-1 sm:mt-2
                        text-[10px] md:text-[14px] lg:text-[16px]
                        tracking-[0.2em] sm:tracking-[0.35em]
                        uppercase
                        text-[#D97706]
                    ">
                        {t("qualityMark.note")}
                    </span>
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-20 flex min-h-screen items-center justify-center px-6">
                <div className="text-center max-w-[720px]">

                    {/* TITLE */}
                    <h1
                        className="
                        flex flex-col sm:flex-row
                        items-center
                        justify-center
                        gap-1 sm:gap-3

                        -translate-y-24
                        lg:translate-y-0

                        text-[4rem]
                        sm:text-[3.5rem]
                        md:text-[4.5rem]
                        lg:text-[clamp(4rem,9vw,7rem)]

                        font-semibold
                        tracking-[-0.02em]
                        leading-[1.05]

                        mb-6 sm:mb-8 md:mb-10
                      "
                                        >
                      <span className="text-[#D97706] tracking-[0.04em]">
                        {t("title.brand")}
                      </span>

                                            <span className="text-[#0A1A2F]/85 font-medium">
                        {t("title.partner")}
                      </span>
                    </h1>

                    {/* SUBTITLE */}
                    <p
                        className="
                        mt-3

                        -translate-y-28
                        lg:translate-y-0

                        text-2xl
                        md:text-2xl
                        lg:text-3xl

                        font-normal
                        leading-[1.6]

                        max-w-[100%]
                        sm:max-w-[680px]
                        lg:max-w-[760px]

                        mx-auto
                      "
                                        >
                      <span className="text-[#0A1A2F]/85">
                        {t("subtitle.line1")}
                      </span>

                                            <span className="text-[#D97706]">
                        {" "}{t("subtitle.highlight1")}
                      </span>

                                            <br className="hidden sm:block" />

                                            <span className="text-[#0A1A2F]/85">
                        {" "}{t("subtitle.line2")}
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
