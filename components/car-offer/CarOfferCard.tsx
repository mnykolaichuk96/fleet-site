"use client";

import { useRouter } from "next/navigation";
import { CarOffer } from "@/types/car";
import {CarOfferVM} from "@/lib/view-models/buildCarOfferVM";

type Props = {
    vm: CarOfferVM;
};

export default function CarOfferCard({ vm }: Props) {
    const router = useRouter();
    const CARD_RADIUS = "32px";

    const goToOffer = () => {
        router.push(`/cars/${vm.slug}`);
    };

    return (
        <section className="py-2 lg:py-6">
            <div className="mx-auto max-w-6xl">

                <div
                    className="relative w-full h-[420px] overflow-hidden"
                    style={{ borderRadius: CARD_RADIUS }}
                >
                    {/* INNER BACKGROUND WRAPPER */}
                    <div className="absolute inset-0 scale-[1.05]">
                        <div
                            className="absolute inset-0 bg-no-repeat bg-center"
                            style={{
                                backgroundImage: "url('/rzeszow-car-card.png')",
                                backgroundSize: "cover",
                                filter: `
                  blur(3px)
                  brightness(1.07)
                  contrast(0.95)
                  saturate(0.9)
                `,
                            }}
                        />
                    </div>

                    {/* WHITE OVERLAY */}
                    <div className="absolute inset-0 bg-white/45 pointer-events-none" />

                    {/* BLUE TINT */}
                    <div
                        className="
              absolute inset-0
              bg-[linear-gradient(
                to_bottom,
                rgba(210,225,245,0.25),
                rgba(225,235,250,0.35),
                rgba(240,245,252,0.45)
              )]
            "
                    />

                    {/* FLOOR SHADOW */}
                    <div
                        className="
              absolute bottom-[13%] left-[31%] -translate-x-1/2
              w-[640px] h-[64px]
              bg-black/35 blur-[56px]
              rounded-full
            "
                    />

                    {/* CAR — CLICKABLE */}
                    <img
                        src={vm.icon}
                        alt={`${vm.brand} ${vm.model}`}
                        onClick={goToOffer}
                        className="
              absolute bottom-[0%] left-[31%] -translate-x-1/2
              w-[700px]
              z-10 select-none cursor-pointer

              transition-transform duration-300 ease-out
              origin-bottom
              hover:scale-[1.04]
            "
                        draggable={false}
                    />

                    {/* INFO PANEL */}
                    <div
                        className="
              absolute right-[3%] top-1/2 -translate-y-1/2
              w-[420px]
              rounded-[28px]
              bg-white/30
              backdrop-blur-[38px]
              shadow-[0_30px_60px_rgba(0,0,0,0.08)]
              p-8
              z-20
            "
                    >
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {vm.brand} {vm.model}
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                ⚙️ {vm.specs.gearbox}
                            </li>
                            <li className="flex items-center gap-2">
                                ⛽ {vm.specs.fuel}
                            </li>
                            <li className="flex items-center gap-2">
                                📉 {vm.specs.consumption}
                            </li>
                        </ul>

                        <div className="mt-6 text-3xl font-bold text-[#D97706]">
                            {vm.price.value} {vm.price.currency}
                            <span className="text-sm font-normal text-gray-500">
                {" "}{vm.price.period}
              </span>
                        </div>

                        {/* CTA — CLICKABLE */}
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={goToOffer}
                                className="
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-[#D97706]
                  px-12 py-4
                  text-white font-medium
                  hover:bg-[#B45309]
                  transition
                "
                            >
                                {vm.cta.label}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
