import { useTranslations } from 'next-intl';
import Link from 'next/link';
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import Hero from '@/components/home/Hero';
import CooperationModes from '@/components/home/CooperationModes';
import FleetPreview from "@/components/home/FleetPreview";
import CTA from "@/components/home/CTA";
import HomeScrollHandler from "@/components/home/HomeScrollHandler";
import WhyUs from "@/components/home/WhyUs";


export const metadata: Metadata = createMetadata(
    "Praca kierowca Bolt i Uber Rzeszów – Wynajem samochodów taxi",
    "Współpraca z kierowcami Bolt i Uber w Rzeszowie. Wynajem nowoczesnych samochodów taxi."
);

export default function HomePage() {
    const t = useTranslations("home");

    return (
        <>
            <Hero/>
            <CooperationModes />
            <WhyUs />
            <FleetPreview />
            <CTA />
            <HomeScrollHandler />
            {/* Далі додамо наступні секції */}
        </>
    );
}

    // return (
    //     <main className="container mx-auto px-4 py-12">
    //
    //         {/* HERO */}
    //         <section className="text-center mb-20">
    //             <h1 className="text-4xl md:text-5xl font-bold mb-4">
    //                 {t("title")}
    //             </h1>
    //
    //             <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
    //                 {t("subtitle")}
    //             </p>
    //
    //             <div className="flex justify-center gap-4 flex-wrap">
    //                 <Link
    //                     href="drivers"
    //                     className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
    //                 >
    //                     {t("ctaDrivers")}
    //                 </Link>
    //
    //                 <Link
    //                     href="cars"
    //                     className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
    //                 >
    //                     {t("ctaCars")}
    //                 </Link>
    //             </div>
    //         </section>
    //
    //         {/* BENEFITS */}
    //         <section className="grid md:grid-cols-3 gap-6 mb-20">
    //             <div className="p-6 border rounded-xl text-center">
    //                 {t("benefit1")}
    //             </div>
    //
    //             <div className="p-6 border rounded-xl text-center">
    //                 {t("benefit2")}
    //             </div>
    //
    //             <div className="p-6 border rounded-xl text-center">
    //                 {t("benefit3")}
    //             </div>
    //         </section>
    //
    //         {/* CTA */}
    //         <section className="text-center bg-gray-100 p-10 rounded-xl">
    //             <h2 className="text-2xl font-semibold mb-4">
    //                 {t("ctaTitle")}
    //             </h2>
    //
    //             <Link
    //                 href="apply"
    //                 className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
    //             >
    //                 {t("ctaButton")}
    //             </Link>
    //         </section>
    //
    //     </main>
    // );
// }
