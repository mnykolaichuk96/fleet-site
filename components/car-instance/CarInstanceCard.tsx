"use client";

import { CarInstanceVM } from "@/lib/view-models/buildCarInstanceVM";
import { useState } from "react";

type Props = {
    vm: CarInstanceVM;
    // @ts-ignore
    onSelect: () => void;
};

export default function CarInstanceCard({ vm, onSelect }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const hasMultipleImages = vm.imagesV.length > 1;

    const hasMultiple = vm.imagesV.length > 1;

    const prev = () => {
        setActiveIndex(i =>
            i === 0 ? vm.imagesV.length - 1 : i - 1
        );
    };

    const next = () => {
        setActiveIndex(i =>
            i === vm.imagesV.length - 1 ? 0 : i + 1
        );
    };

    return (
        <section className="py-2 lg:py-6">
            <div className="mx-auto max-w-6xl">

                {/* ================= MOBILE FULL SCREEN ================= */}
                <div className="flex flex-col min-h-[100svh] md:hidden overflow-hidden rounded-3xl bg-white shadow-lg">

                    {/* IMAGE AREA */}
                    <div className="relative flex items-end justify-center flex-[1.1] bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">

                        {/* floor shadow */}
                        <div className="absolute bottom-6 w-3/4 h-10 bg-black/30 blur-3xl rounded-full" />

                        <img
                            src={vm.imagesV[activeIndex]}
                            alt={vm.title}
                            className="relative z-10 max-h-[60vh] object-contain select-none"
                            draggable={false}
                        />

                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute z-20 left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow flex items-center justify-center"
                                >
                                    ←
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute z-20 right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow flex items-center justify-center"
                                >
                                    →
                                </button>
                            </>
                        )}
                    </div>

                    {/* INFO AREA */}
                    <div className="flex flex-col flex-1 p-6">

                        {/* TOP CONTENT */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {vm.title}
                                </h3>

                                <span
                                    className={`rounded-full px-3 py-1 text-sm ${
                                        vm.status.tone === "success"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                    }`}
                                >
                  {vm.status.label}
                </span>
                            </div>

                            <ul className="space-y-2 text-sm text-gray-700">
                                {vm.equipment.map((item, idx) => (
                                    <li key={idx}>• {item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA pinned bottom */}
                        <div className="mt-auto pt-6">
                            <button
                                onClick={onSelect}
                                className="w-full rounded-xl bg-[#D97706] py-4 text-white font-medium"
                            >
                                {vm.cta.label}
                            </button>
                        </div>

                    </div>
                </div>

                {/* ================= DESKTOP ================= */}
                <div className="hidden md:block">

                    <div className="relative w-full h-[420px] overflow-hidden bg-white rounded-[32px]">

                        {/* FLOOR SHADOW */}
                        <div className="absolute bottom-[12%] left-[30%] -translate-x-1/2 w-[640px] h-[64px] bg-black/30 blur-[56px] rounded-full" />

                        {/* CAR */}
                        <div className="absolute left-[4%] top-1/2 -translate-y-1/2 h-full w-[50%] flex items-center justify-center overflow-hidden rounded-[32px]">
                            <img
                                src={vm.imagesH[activeIndex]}
                                alt={vm.title}
                                className="max-h-full max-w-full object-contain select-none"
                                draggable={false}
                            />
                        </div>
                        {hasMultiple && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow"
                                >
                                    ←
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute right-[50%] top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow"
                                >
                                    →
                                </button>
                            </>
                        )}

                        {/* INFO PANEL */}
                        <div className="absolute right-0 top-0 bottom-0 w-[420px] rounded-l-[28px] bg-white/90 backdrop-blur-[24px] shadow-[-20px_0_40px_rgba(0,0,0,0.06)] p-8 flex flex-col justify-between">

                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {vm.title}
                                    </h3>

                                    <span
                                        className={`rounded-full px-3 py-1 text-sm ${
                                            vm.status.tone === "success"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                    {vm.status.label}
                  </span>
                                </div>

                                <ul className="space-y-2 text-sm text-gray-700">
                                    {vm.equipment.map((item, idx) => (
                                        <li key={idx}>• {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <button
                                    onClick={onSelect}
                                    className="w-full rounded-xl bg-[#D97706] py-4 text-white font-medium"
                                >
                                    {vm.cta.label}
                                </button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
