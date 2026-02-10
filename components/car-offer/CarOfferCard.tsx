"use client";

import { useRouter } from "next/navigation";
import { CarOfferVM } from "@/lib/view-models/buildCarOfferVM";

type Props = {
    vm: CarOfferVM;
};

export default function CarOfferCard({ vm }: Props) {
    const router = useRouter();

    const goToOffer = () => {
        router.push(`/cars/${vm.slug}`);
    };

    return (
        <section className="py-2 lg:py-6">
            <div className="mx-auto max-w-6xl">

                {/* ================= MOBILE LAYOUT ================= */}
                <div className="flex flex-col md:hidden overflow-hidden rounded-3xl bg-white shadow-lg">

                    {/* CAR AREA */}
                    <div className="relative flex items-end justify-center flex-[1.1] bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden">

                        {/* floor shadow */}
                        <div className="absolute bottom-6 w-3/4 h-10 bg-black/30 blur-3xl rounded-full" />

                        <img
                            src={vm.icon}
                            alt={`${vm.brand} ${vm.model}`}
                            onClick={goToOffer}
                            className="relative z-10 max-h-[60vh] object-contain select-none"
                            draggable={false}
                        />
                    </div>

                    {/* INFO AREA */}
                    <div className="flex-1 bg-white rounded-t-3xl p-6">

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {vm.brand} {vm.model} {vm.generation}
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-700">
                            <li>⚙️ {vm.specs.gearbox}</li>
                            <li>⛽ {vm.specs.fuel}</li>
                            <li>📉 {vm.specs.consumption}</li>
                        </ul>

                        <div className="mt-6 text-3xl font-bold text-[#D97706]">
                            {vm.price.value} {vm.price.currency}
                            <span className="text-sm font-normal text-gray-500">
                {" "}{vm.price.period}
              </span>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={goToOffer}
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

                {/* ================= DESKTOP LAYOUT ================= */}
                <div className="hidden md:block">

                    <div className="relative w-full h-[420px] overflow-hidden rounded-[32px]">

                        {/* BACKGROUND */}
                        <div className="
                              absolute inset-0
                              bg-white
                              lg:bg-gradient-to-br
                              lg:from-slate-100
                              lg:via-slate-200
                              lg:to-slate-100
                            " />

                        {/* FLOOR SHADOW */}
                        <div className="absolute bottom-[13%] left-[31%] -translate-x-1/2 w-[640px] h-[64px] bg-black/35 blur-[56px] rounded-full" />

                        {/* CAR */}
                        <img
                            src={vm.icon}
                            alt={`${vm.brand} ${vm.model}`}
                            onClick={goToOffer}
                            className="
                                absolute bottom-0 left-[31%] -translate-x-1/2
                                w-[620px]
                                xl:w-[700px]
                                z-10 select-none cursor-pointer
                                transition-transform duration-300
                                lg:hover:scale-[1.04]
              "
                            draggable={false}
                        />

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
                                {vm.brand} {vm.model} {vm.generation}
                            </h3>

                            <ul className="space-y-3 text-sm text-gray-700">
                                <li>⚙️ {vm.specs.gearbox}</li>
                                <li>⛽ {vm.specs.fuel}</li>
                                <li>📉 {vm.specs.consumption}</li>
                            </ul>

                            <div className="mt-6 text-3xl font-bold text-[#D97706]">
                                {vm.price.value} {vm.price.currency}
                                <span className="text-sm font-normal text-gray-500">
                  {" "}{vm.price.period}
                </span>
                            </div>

                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={goToOffer}
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
