"use client";

import EBikeCard from "@/components/e-bike/EBikeCard";
import { EBikeVM } from "@/lib/view-models/buildEBikeVM";
import { useEffect, useState } from "react";
import { ContactForm } from "@/components/cta/ContactForm";
import { useTranslations } from "next-intl";

type Props = {
    bikeVMs: EBikeVM[];
};

export default function EBikesClientSection({ bikeVMs }: Props) {
    const t = useTranslations("e-bike");

    const [selectedBike, setSelectedBike] = useState<{
        slug: string;
        title: string;
    } | null>(null);

    useEffect(() => {
        if (selectedBike) {
            const el = document.getElementById("bike-form-anchor");
            el?.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedBike]);

    return (
        <>
            {/* BIKE CARDS */}
            <div className="space-y-8 pb-16">
                {bikeVMs.map((vm) => (
                    <EBikeCard
                        key={vm.slug}
                        vm={vm}
                        onSelect={() =>
                            setSelectedBike({
                                slug: vm.slug,
                                title: `${vm.brand} ${vm.model}`,
                            })
                        }
                    />
                ))}
            </div>

            {/* FORM */}
            {selectedBike && (
                <div id="bike-form-anchor" className="pb-24">
                    <p className="mb-4 text-center font-medium text-xl text-[#0A1A2F]/85">
                        {t("form.selectedBike")}{" "}
                        <strong className="text-[#D97706]">
                            {selectedBike.title}
                        </strong>
                    </p>

                    <ContactForm bikeSlug={selectedBike.slug} />
                </div>
            )}
        </>
    );
}
