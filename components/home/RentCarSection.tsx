"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function RentCarSection() {
    const t = useTranslations("home.rentCar");

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 pt-28 lg:pt-36">

                {/* ================= HERO ================= */}
                <div className="max-w-xl mb-14 lg:mb-22">
                    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                        {t("title")}
                    </h1>
                    <p className="text-lg text-gray-600">
                        {t("text")}
                    </p>
                </div>

                {/* ================= BENEFITS SECTION ================= */}
                <div className="relative">

                    {/* ===== CAR OVERLAY (SOFT OVERLAP, CORRECT ANCHOR) ===== */}
                    <div
                        className="
    pointer-events-none
    hidden xl:block
    absolute
    right-0
    bottom-full
    translate-y-1/4
    w-[68vw]
    max-w-3xl
    aspect-[4/3]
    z-20
  "
                    >
                        <Image
                            src="/illustrations/rent-car-2.png"
                            alt=""
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* ===== BENEFITS CARD ===== */}
                    <div className="relative z-10 mx-auto max-w-6xl rounded-3xl bg-white px-8 py-12 lg:px-14 lg:py-14 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.18)]">
                        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 mb-12">
                            <Benefit title={t("benefits.0.title")} text={t("benefits.0.text")} />
                            <Benefit title={t("benefits.1.title")} text={t("benefits.1.text")} />
                            <Benefit title={t("benefits.2.title")} text={t("benefits.2.text")} />
                            <Benefit title={t("benefits.3.title")} text={t("benefits.3.text")} />
                        </div>

                        <div className="text-center">
                            <Link
                                href="/cars"
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
        </section>
    );
}

/* ================= BENEFIT ================= */

function Benefit({ title, text }: { title: string; text: string }) {
    return (
        <div className="flex gap-4">
      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D97706]/15 text-[#D97706] text-sm">
        ✓
      </span>
            <div>
                <p className="font-medium text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
        </div>
    );
}
