"use client";

import { CarInstanceVM } from "@/lib/view-models/buildCarInstanceVM";
import { useState } from "react";


type Props = {
    vm: CarInstanceVM;
};


export default function CarInstanceCard({ vm }: Props) {
    const CARD_RADIUS = "32px";

    const [activeIndex, setActiveIndex] = useState(0);

    const hasMultipleImages = vm.images.length > 1;

    const prev = () => {
        setActiveIndex((i) =>
            i === 0 ? vm.images.length - 1 : i - 1
        );
    };

    const next = () => {
        setActiveIndex((i) =>
            i === vm.images.length - 1 ? 0 : i + 1
        );
    };

    return (
        <section className="py-2 lg:py-6">
            <div className="mx-auto max-w-6xl">
                <div
                    className="relative w-full h-[420px] overflow-hidden bg-white"
                    style={{ borderRadius: CARD_RADIUS }}
                >
                    {/* FLOOR SHADOW */}
                    <div
                        className="
              absolute bottom-[12%] left-[30%] -translate-x-1/2
              w-[640px] h-[64px]
              bg-black/30 blur-[56px]
              rounded-full
            "
                    />

                    {/* CAR IMAGE / CAROUSEL */}
                    <div
                        className="
                        group
        absolute left-[4%] top-1/2 -translate-y-1/2
        h-[100%] w-[50%]
        flex items-center justify-center
        z-10
        overflow-hidden
        rounded-[32px]
    "
                    >
                        <img
                            src={vm.images[activeIndex]}
                            alt={vm.title}
                            className="
            max-h-full max-w-full
            object-contain
            select-none
            transition-opacity duration-300
        "
                            draggable={false}
                        />

                        {/* NAVIGATION */}
                        {hasMultipleImages && (
                            <>
                                {/* PREV */}
                                <button
                                    onClick={prev}
                                    className="
                                        absolute left-4
                                        w-10 h-10
                                        rounded-full
                                        bg-white/80
                                        backdrop-blur
                                        shadow
                                        flex items-center justify-center
                                        text-xl
                                        hover:bg-white
                                        transition
                                    "
                                >
                                    <span
                                        className="
                                            transition-transform duration-200 ease-out
                                            group-hover:scale-125
                                        "
                                                                        >
                                        ←
                                    </span>
                                </button>

                                {/* NEXT */}
                                <button
                                    onClick={next}
                                    className="
                                        absolute right-4
                                        w-10 h-10
                                        rounded-full
                                        bg-white/80
                                        backdrop-blur
                                        shadow
                                        flex items-center justify-center
                                        text-xl
                                        hover:bg-white
                                        transition
                                    "
                                >
                                    <span
                                        className="
                                            transition-transform duration-200 ease-out
                                            group-hover:scale-125
                                        "
                                    >
                                        →
                                    </span>
                                </button>
                            </>
                        )}
                    </div>


                    {/* INFO PANEL — FULL HEIGHT */}
                    <div
                        className="
              absolute right-0 top-0 bottom-0
              w-[420px]
              rounded-l-[28px]
              bg-white/90
              backdrop-blur-[24px]
              shadow-[-20px_0_40px_rgba(0,0,0,0.06)]
              p-8
              z-20
              flex flex-col
              justify-between
            "
                    >
                        {/* TOP */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {vm.title}
                            </h3>

                            {/* STATUS */}
                            <div className="mb-6">
                                <span
                                    className={`
                    inline-block rounded-full px-3 py-1 text-sm font-medium
                    ${
                                        vm.status.tone === "success"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-gray-200 text-gray-700"
                                    }
                  `}
                                >
                                    {vm.status.label}
                                </span>
                            </div>

                            {/* EQUIPMENT */}
                            <ul className="space-y-2 text-sm text-gray-700">
                                {vm.equipment.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="pt-6">
                            <button
                                className="
                  w-full
                  inline-flex items-center justify-center gap-2
                  rounded-xl
                  bg-[#D97706]
                  px-8 py-4
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
