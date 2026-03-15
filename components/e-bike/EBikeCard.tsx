"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { EBikeVM } from "@/lib/view-models/buildEBikeVM";

type Props = {
    vm: EBikeVM;
    onSelect: () => void;
};

export default function EBikeCard({ vm, onSelect }: Props) {
    const router = useRouter();
    const [imageIndex, setImageIndex] = useState(0);

    const images = vm.images;


    /* ---------------- SWIPE ---------------- */

    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const minSwipeDistance = 50;

    const onTouchStartHandler = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMoveHandler = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEndHandler = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;

        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1);
        }

        if (isRightSwipe && imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    };

    return (
        <section className="py-2 lg:py-6">
            <div className="mx-auto max-w-6xl">

                {/* ================= MOBILE ================= */}

                <div className="flex flex-col md:hidden overflow-hidden rounded-3xl bg-white shadow-lg">

                    <div
                        className="relative flex items-end justify-center flex-[1.1] bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden"
                        onTouchStart={onTouchStartHandler}
                        onTouchMove={onTouchMoveHandler}
                        onTouchEnd={onTouchEndHandler}
                    >
                        <div className="absolute bottom-6 w-3/4 h-10 bg-black/30 blur-3xl rounded-full" />

                        <img
                            src={images[imageIndex]}
                            alt={`${vm.brand} ${vm.model}`}
                            className="relative z-10 max-h-[60vh] object-contain select-none"
                            draggable={false}
                        />

                        {/* DOTS MOBILE */}

                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-[#0A1A2F]/85 backdrop-blur px-3 py-1 rounded-full z-20">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setImageIndex(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition
                                        ${i === imageIndex ? "bg-[#D97706]" : "bg-gray-400"}
                                        `}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* INFO */}

                    <div className="flex-1 bg-white rounded-t-3xl p-6">

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {vm.brand} {vm.model}
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>⚡ {vm.specs.motorPower} motor</li>
                            <li>🔋 {vm.specs.battery}</li>
                            <li>📍 {vm.specs.range}</li>
                            <li>🌀 {vm.specs.torque}</li>
                        </ul>

                        <div className="mt-6">
                            <div className="text-3xl font-bold text-[#D97706]">
                                {vm.price.value} {vm.price.currency}
                                <span className="text-sm font-normal text-gray-500">
                                    {" "}{vm.price.period}
                                </span>
                            </div>
                            <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
    <span className="bg-[#D97706]/10 text-[#D97706] px-2 py-0.5 rounded-md font-medium">
        +{vm.price.extraBatteryPrice} {vm.price.currency}
    </span>
                                <span>{vm.price.extraBattery}</span>
                            </div>
                        </div>


                        <div className="mt-6">
                            <button
                                onClick={onSelect}
                                className="
                                    w-full
                                    rounded-xl
                                    bg-[#D97706]
                                    py-4
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

                {/* ================= DESKTOP ================= */}

                <div className="hidden md:block">

                    <div className="relative w-full h-[420px] overflow-hidden rounded-[32px]">

                        {/* BACKGROUND */}

                        <div className="absolute inset-0 scale-105">
                            <div
                                className="absolute inset-0 bg-center bg-cover"
                                style={{
                                    backgroundImage: `url("/rzeszow-bike-card.jpg")`,
                                    filter: "blur(4px) brightness(1.05)",
                                }}
                            />
                        </div>

                        <div className="absolute inset-0 bg-white/50" />

                        {/* FLOOR SHADOW */}

                        <div className="absolute bottom-[13%] left-[31%] -translate-x-1/2 w-[640px] h-[64px] bg-black/35 blur-[56px] rounded-full" />

                        {/* BIKE */}

                        <img
                            src={images[imageIndex]}
                            alt={`${vm.brand} ${vm.model}`}
                            className="
                                absolute bottom-0 left-[31%] -translate-x-1/2
                                w-[620px]
                                xl:w-[700px]
                                z-10 select-none
                                transition-transform duration-300
                                touch-pan-y
                            "
                            draggable={false}
                        />

                        {/* DOTS DESKTOP */}

                        {images.length > 1 && (
                            <div className="absolute bottom-6 left-[31%] -translate-x-1/2 flex gap-2 z-20">
                                {images.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setImageIndex(i)}
                                        className={`w-3 h-3 rounded-full transition
                                        ${i === imageIndex ? "bg-[#D97706]" : "bg-gray-400"}
                                        `}
                                    />
                                ))}
                            </div>
                        )}

                        {/* INFO PANEL */}

                        <div className="
                            absolute right-[3%] top-1/2 -translate-y-1/2
                            w-[420px]
                            rounded-[28px]

                            md:text-right
                            lg:text-left
                            bg-white/85
                            md:bg-white/20
                            lg:bg-white/40
                            md:backdrop-blur-sm
                            lg:backdrop-blur-xl
                            shadow-[0_30px_60px_rgba(0,0,0,0.08)]
                            p-8
                            z-20
                        ">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {vm.brand} {vm.model}
                            </h3>

                            <ul className="space-y-3 text-sm text-gray-700">
                                <li>⚡ {vm.specs.motorPower} motor</li>
                                <li>🔋 {vm.specs.battery}</li>
                                <li>📍 {vm.specs.range}</li>
                                <li>🌀 {vm.specs.torque}</li>
                            </ul>

                            <div className="mt-6">
                                <div className="text-3xl font-bold text-[#D97706]">
                                    {vm.price.value} {vm.price.currency}
                                    <span className="text-sm font-normal text-gray-500">
                                        {" "}{vm.price.period}
                                    </span>
                                </div>

                                <div className="mt-2 text-sm text-gray-500 flex items-center gap-2">
    <span className="bg-[#D97706]/10 text-[#D97706] px-2 py-0.5 rounded-md font-medium">
        +{vm.price.extraBatteryPrice} {vm.price.currency}
    </span>
                                    <span>{vm.price.extraBattery}</span>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={onSelect}
                                    className="
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

            </div>
        </section>
    );
}
