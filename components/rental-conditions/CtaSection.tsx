"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CtaSection() {
    const t = useTranslations("rental-conditions");

    return (
        <section className="py-2 lg:py-6 pb-6 lg:pb-12">
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
                <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                    {t("cta.title")}
                </h2>

                <Link
                    href="/samochody-do-wynajmu"
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
                    {t("cta.primary")} →
                </Link>
            </div>
        </section>
    );
}
