"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import RentCarIllustration from "@/components/icons/RentCarIllustration";
import Image from "next/image";



/**
 * Shared layout wrapper for chessboard sections
 */
function SectionWrapper({ children, muted }: { children: React.ReactNode; muted?: boolean }) {
    return (
        <section className={muted ? "bg-gray-50" : "bg-white"}>
            <div className="container mx-auto px-4 py-24">{children}</div>
        </section>
    );
}

/**
 * SECTION 1 — RENT CAR
 */


/**
 * SECTION 2 — GINGER PARTNER CAR
 */
export function PartnerCarSection() {
    const t = useTranslations("home");

    return (
        <SectionWrapper>
            <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* ILLUSTRATION */}
                <div className="flex justify-center order-last md:order-first">
                    <div className="w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-orange-50 to-white flex items-center justify-center text-6xl">
                        🚕
                    </div>
                </div>

                {/* TEXT */}
                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                        {t("partnerCar.title")}
                    </h2>

                    <p className="text-gray-600 mb-8 max-w-xl">
                        {t("partnerCar.text")}
                    </p>

                    <ul className="space-y-4 text-sm mb-10">
                        <li>✔ {t("partnerCar.benefits.0")}</li>
                        <li>✔ {t("partnerCar.benefits.1")}</li>
                        <li>✔ {t("partnerCar.benefits.2")}</li>
                    </ul>

                    <Link
                        href="/partner-car"
                        className="inline-block rounded-xl border px-6 py-3 text-sm font-medium hover:bg-gray-50"
                    >
                        {t("partnerCar.cta")}
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}

/**
 * SECTION 3 — OWN CAR
 */
export function OwnCarSection() {
    const t = useTranslations("home");

    return (
        <SectionWrapper muted>
            <div className="grid gap-12 md:grid-cols-2 items-center">
                {/* TEXT */}
                <div>
                    <h2 className="text-3xl font-semibold mb-6">
                        {t("ownCar.title")}
                    </h2>

                    <p className="text-gray-600 mb-8 max-w-xl">
                        {t("ownCar.text")}
                    </p>

                    <ul className="space-y-4 text-sm mb-10">
                        <li>✔ {t("ownCar.benefits.0")}</li>
                        <li>✔ {t("ownCar.benefits.1")}</li>
                        <li>✔ {t("ownCar.benefits.2")}</li>
                    </ul>

                    <Link
                        href="/drivers"
                        className="inline-block rounded-xl bg-black px-6 py-3 text-white text-sm font-medium hover:bg-gray-800"
                    >
                        {t("ownCar.cta")}
                    </Link>
                </div>

                {/* ILLUSTRATION */}
                <div className="flex justify-center">
                    <div className="w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-gray-100 to-white flex items-center justify-center text-6xl">
                        🚗
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}

/**
 * EXPORT FOR HOME
 */
export default function HomeCooperationSections() {
    return (
        <>
            <PartnerCarSection />
            <OwnCarSection />
        </>
    );
}
