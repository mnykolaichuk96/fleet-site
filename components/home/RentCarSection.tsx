"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function RentCarSection() {
    const t = useTranslations("home.rentCar");

    return (
        <section id="rent-car" className="relative overflow-hidden pb-12 lg:pb-16">
            <div className="absolute inset-0 bg-[#0B1C2D]/10 pointer-events-none" />
            <div className="relative z-10">

        <div className="container mx-auto px-4 pt-12 lg:pt-24">

            {/* ================= HERO ================= */}
            <div
                className="
                max-w-xl

                mb-10
                md:mb-12
                lg:mb-22

                mx-auto
                text-center

                2xl:ml-32
                lg:mx-0
                lg:text-left
              "
            >
                <h1
                    className="
                      text-3xl
                      md:text-4xl
                      lg:text-5xl

                      font-semibold
                      leading-tight

                      mb-4
                      md:mb-5
                      lg:mb-6
                    "
                >
                    {t("title")}
                </h1>

                <p
                    className="
                      text-base
                      md:text-lg
                      lg:text-lg

                      text-gray-600
                    "
                >
                    {t("text")}
                </p>
            </div>

                {/* ================= BENEFITS SECTION ================= */}
                <div className="relative -mt-[4rem] md:-mt-[8rem] lg:mt-0">

                    {/* ===== CAR OVERLAY (SOFT OVERLAP, CORRECT ANCHOR) ===== */}
                    <div
                        className="
                        relative
                        mx-auto
                        -mt-10

                        flex
                        justify-center

                        translate-y-[3rem]

                        md:translate-y-[5rem]

                        lg:block

                        lg:w-[80vw]
                        lg:max-w-sm
                        lg:aspect-[4/3]

                        lg:w-auto
                        lg:absolute
                        lg:right-0
                        lg:bottom-full
                        lg:-translate-x-[4rem]
                        lg:translate-y-[6rem]

                        lg:aspect-[4/3]

                        xl:absolute
                        xl:right-0
                        xl:bottom-full
                        xl:-translate-x-[15rem]
                        xl:translate-y-[6rem]
                        xl:aspect-[4/3]

                        2xl:absolute
                        2xl:right-0
                        2xl:bottom-full
                        2xl:-translate-x-[1rem]
                        2xl:translate-y-[11rem]
                        2xl:w-[68vw]
                        2xl:max-w-3xl

                        z-20
  "
                    >
                        <Image
                            src="/illustrations/rent-car-2.png"
                            width={900}
                            height={675}
                            alt=""
                            className="
                              w-[80vw]
                              max-w-md

                              md:w-[65vw]
                              md:max-w-xl

                              lg:w-[50vw]
                              lg:max-w-3xl

                              xl:w-[55vw]
                              xl:max-w-3xl
                              2xl:w-[60vw]
                              2xl:max-w-3xl
                              h-auto
                            "
                        />
                    </div>

                    {/* ===== BENEFITS CARD ===== */}
                    <div className="relative z-10 mx-auto max-w-6xl rounded-3xl bg-white px-6 py-12 lg:px-14 lg:py-14 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.18)]">
                        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 mb-12">
                            <Benefit title={t("benefits.0.title")} text={t("benefits.0.text")} />
                            <Benefit title={t("benefits.1.title")} text={t("benefits.1.text")} />
                            <Benefit title={t("benefits.2.title")} text={t("benefits.2.text")} />
                            <Benefit title={t("benefits.3.title")} text={t("benefits.3.text")} />
                        </div>

                        <div className="text-center">
                            <Link
                                href="/rental-conditions"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D97706] px-12 py-4 text-white font-medium hover:bg-[#B45309] transition"
                            >
                                {t("cta.label")} →
                            </Link>

                            <p className="mt-4 text-sm text-gray-500">
                                {t("cta.hint")}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </section>
    );
}

/* ================= BENEFIT ================= */

function Benefit({ title, text }: { title: string; text: string }) {
    return (
        <div className="flex gap-4">
      <span
          className="
    mt-1
    flex
    items-center
    justify-center

    w-8
    h-8
    min-w-[2rem]
    min-h-[2rem]

    shrink-0

    rounded-full
    bg-[#D97706]/15
    text-[#D97706]
    text-sm
  "
      >
  ✓
</span>
            <div>
                <p className="font-medium text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
        </div>
    );
}
