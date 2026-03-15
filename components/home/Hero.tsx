"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";

export default function Hero() {
    const t = useTranslations("home.hero");
    const { navigate } = useHeaderNavigation();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    return (
        <section id="hero" ref={ref} className="relative overflow-hidden">

            {/* QUALITY MARK */}
            <div
                className="
                    hidden md:block
                    pointer-events-none select-none
                    absolute
                    top-[12%] -translate-y-[0%] right-[2%]
                    md:top-[10%]  md:right-[5%]
                    lg:top-[13%] lg:right-[5%]


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
                <div className="text-center max-w-[1000px]">

                    {/* TITLE */}
                    <h1
                        className="
                        flex flex-col sm:flex-row
                        items-center
                        justify-center
                        gap-1 sm:gap-3

                        -translate-y-0
                        lg:translate-y-0

                        text-[4rem]
                        sm:text-[3.5rem]
                        md:text-[4.5rem]
                        lg:text-[clamp(4rem,9vw,7rem)]

                        font-semibold
                        tracking-[-0.02em]
                        leading-[1.05]

                        mb-6 mt-6 sm:mb-8 md:mb-10
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

                        -translate-y-0
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


                    {/* SERVICE CARDS */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                    >
                        <div
                            className="
                            grid md:grid-cols-2 gap-8 mt-16"
                        >

                            {/* DRIVERS */}
                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="
                                      relative
                                      p-8
                                      rounded-[28px]

                                      backdrop-blur-sm
                                      bg-gradient-to-b
                                      from-white/80
                                      via-white/40
                                      to-white/10

                                      border-2 border-white/90

                                      shadow-[0_40px_120px_rgba(0,0,0,0.18)]

                                      [mask-image:linear-gradient(to_bottom,black,black,transparent)]

                                      flex flex-col
                                      items-center
                                      text-center

                                      min-h-[520px]"
                                >


                                    <span className="text-xl font-semibold tracking-[0.25em] uppercase text-[#D97706]/70">
                                        Drivers
                                    </span>

                                    <h3 className="mt-4 text-4xl font-semibold text-[#0A1A2F]">
                                        {t("car.title")}
                                    </h3>

                                    <p className="mt-2 text-2xl text-[#0A1A2F]/70">
                                        {t("car.subtitle")}
                                    </p>

                                    <button
                                        onClick={() => navigate("rent-car")}
                                        className="
                                        mt-6
                                        px-8 py-3
                                        text-xl
                                        tracking-[0.05em]
                                        rounded-xl

                                        bg-[#0A1A2F]
                                        text-white

                                        hover:scale-[1.05]
                                        hover:shadow-xl
                                        transition
                                        "
                                    >
                                        {t("car.cta")} →
                                    </button>

                                    </motion.div>
                                        <div
                                            className="
                                              absolute
                                              left-[43%]
                                              bottom-[20px]
                                              md:bottom-[-105px]
                                              lg:bottom-[-155px]
                                              -translate-x-1/2
                                              "
                                        >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <Image
                                                src="/illustrations/fleet-car.webp"
                                                width={900}
                                                height={675}
                                                onClick={() => navigate("rent-car")}
                                                alt=""
                                                className="
                                                  w-[320px]
                                                    md:w-[480px]
                                                    lg:w-[600px]
                                                  max-w-none
                                                  drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]
                                                  "
                                            />
                                    </motion.div>
                                </div>
                            </div>
                            {/* COURIERS */}
                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="
                                      relative
                                      p-8
                                      rounded-[28px]

                                      backdrop-blur-sm
                                      bg-gradient-to-b
                                      from-white/80
                                      via-white/40
                                      to-white/10

                                      border-2 border-white/90

                                      shadow-[0_40px_120px_rgba(0,0,0,0.18)]

                                      [mask-image:linear-gradient(to_bottom,black,black,transparent)]

                                      flex flex-col
                                      items-center
                                      text-center

                                      min-h-[520px]"
                                >


                                    <span className="text-xl font-semibold tracking-[0.25em] uppercase text-[#D97706]/70">
                                        Couriers
                                    </span>

                                    <h3 className="mt-4 text-4xl font-semibold text-[#0A1A2F]">
                                        {t("ebike.title")}
                                    </h3>

                                    <p className="mt-2 text-2xl text-[#0A1A2F]/70">
                                        {t("ebike.subtitle")}
                                    </p>

                                    <Link
                                        href="/e-bike"
                                        className="
                                        mt-6
                                        px-8 py-3
                                        text-xl
                                        tracking-[0.05em]
                                        rounded-xl

                                        bg-[#D97706]
                                        text-white

                                        hover:scale-[1.05]
                                        hover:shadow-xl
                                        transition
                                        "
                                    >
                                        {t("ebike.cta")} →
                                    </Link>
                                </motion.div>
                                <div
                                    className="
                                              absolute
                                              left-1/2
                                              bottom-[35px]
                                              md:bottom-[0px]
                                              lg:bottom-[-30px]
                                              -translate-x-1/2
                                              "
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Link href="/e-bike">
                                            <Image
                                                src="/illustrations/e-bike.webp"
                                                width={900}
                                                height={675}
                                                alt=""
                                                className="
                                                      w-[320px]
                                                        md:w-[380px]
                                                        lg:w-[420px]
                                                        xl:w-[500px]
                                                      max-w-none
                                                      drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]
                                                      "
                                            />
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
