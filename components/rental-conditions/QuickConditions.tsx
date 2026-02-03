"use client";

import { useTranslations } from "next-intl";
import { Car, FileText, Settings, LifeBuoy } from "lucide-react";

import { NoVatRentalConditionsIcon } from "@/components/icons/NoVatRentalConditionsIcon";
import { NoCommissionIcon } from "@/components/icons/NoCommissionIcon";

const iconMap: Record<string, React.ElementType> = {
    car: Car,
    file: FileText,
    settings: Settings,
    support: LifeBuoy,
    noVat: NoVatRentalConditionsIcon,
    noCommission: NoCommissionIcon,
};

type QuickConditionTitle =
    | string
    | {
    main: string;
    highlight?: string;
};

type QuickConditionItem = {
    icon: string;
    title: QuickConditionTitle;
    points: string[];
};


export default function QuickConditions() {
    const t = useTranslations("rental-conditions");
    const title = t("quickConditions.title");
    const items = t.raw("quickConditions.items") as QuickConditionItem[];
    const leftItems = items.slice(0, 2);
    const rightItems = items.slice(2, 4);


    return (
        <section className="py-2 lg:py-6">
            <div
                className="
                  mx-auto max-w-6xl
                  rounded-3xl
                  bg-white/85
                  backdrop-blur-2xl
                  px-8 py-10 lg:px-14 lg:py-12
                  shadow-[0_30px_70px_-35px_rgba(0,0,0,0.18)]
                "
            >
                {/* Section title */}
                <h2 className="text-2xl font-semibold mb-8">
                    {title}
                </h2>

                {/* Inner cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col gap-6">
                        {leftItems.map((item, index) => {

                            // =========================
                            // BEZ PROWIZJI
                            // =========================
                            if (item.icon === "noCommission") {
                                return (
                                    <div
                                        key={index}
                                        className="
                                            rounded-2xl bg-white p-6 md:p-7
                                            border border-gray-100 shadow-sm
                                            overflow-hidden group min-h-[180px]
                                          "
                                    >
                                        <div className="flex items-center gap-6 h-full">

                                            {/* ICON BLOCK */}
                                            <div className="relative shrink-0">

                                                <NoCommissionIcon
                                                    className="
                                                      relative w-16 h-16 md:w-20 md:h-20
                                                      text-[#404753] -rotate-3
                                                      transition-transform duration-300
                                                      group-hover:scale-105
                                                    "
                                                />

                                                {/* badge */}
                                                <span
                                                    className="
                                                      absolute -bottom-2 -right-2
                                                      rounded-full border border-[#D97706]
                                                      px-2 py-0.5 text-xs font-semibold
                                                      text-[#D97706] bg-white
                                                    "
                                                >
                                                0%
                                              </span>
                                            </div>

                                            {/* divider */}
                                            <span className="h-12 w-px bg-[#D97706]/40" />

                                            {/* TEXT */}
                                            <h3 className="text-lg md:text-xl font-semibold leading-snug text-gray-900">
                                                {typeof item.title !== "string" && (
                                                    <>
                                                        {item.title.main}
                                                        {item.title.highlight && (
                                                            <>
                                                                <br />
                                                                <span className="text-[#D97706]">
                                                                    {item.title.highlight}
                                                                </span>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </h3>

                                        </div>
                                    </div>
                                );
                            }

                            // =========================
                            // 0% VAT
                            // =========================
                            if (item.icon === "noVat") {
                                return (
                                    <div
                                        key={index}
                                        className="
                                            rounded-2xl bg-white p-6 md:p-7
                                            border border-gray-100 shadow-sm
                                            overflow-hidden group min-h-[180px]
                                          "
                                    >
                                        <div className="flex items-start gap-6">

                                            {/* ICON BLOCK */}
                                            <div className="relative shrink-0">

                                                <NoVatRentalConditionsIcon
                                                    className="
                                                  relative w-16 h-16 md:w-20 md:h-20
                                                  text-[#404753] -rotate-3
                                                  transition-transform duration-300
                                                  group-hover:scale-105
                                                "
                                                />

                                                {/* badge */}
                                                <span
                                                    className="
                                                  absolute -bottom-2 -right-2
                                                  rounded-full border border-[#D97706]
                                                  px-2 py-0.5 text-xs font-semibold
                                                  text-[#D97706] bg-white
                                                "
                                                >
                                                    0%
                                                </span>
                                            </div>

                                            {/* divider */}
                                            <span className="h-20 w-px bg-[#D97706]/40 mt-1" />

                                            {/* TEXT */}
                                            <div>
                                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                                    {typeof item.title !== "string" && item.title.main}
                                                </h3>

                                                {item.points.length > 0 && (
                                                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                                        {item.points.map((point, i) => (
                                                            <li key={i} className="flex gap-2">
                                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D97706] shrink-0" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>

                                        </div>
                                    </div>
                                );
                            }

                            return null;
                        })}
                    </div>


                    {/* RIGHT COLUMN – COMMISSION TABLE (LIGHT) */}
                    <div
                        className="
    h-full
    rounded-2xl
    bg-white/85
    backdrop-blur
    p-6 md:p-8
    border-2 border-[#0B1C2D]/70
    shadow-sm
  "
                    >
                        {/* HEADER */}
                        <div className="grid grid-cols-2 px-4 pb-4 -mx-6 md:-mx-8 bg-[#0B1C2D]/10 text-[#D97706] font-medium">
                            <span>Obrót tygodniowy</span>
                            <span>Prowizja</span>
                        </div>

                        {/* ROW 1 */}
                        <div className="grid grid-cols-2 px-4 py-5 text-gray-800">
                            <span>0–999 zł</span>
                            <span>50 zł + 1%</span>
                        </div>

                        {/* ROW 2 – FULL WIDTH STRIPE */}
                        <div className="-mx-6 md:-mx-8 bg-[#0B1C2D]/10">
                            <div className="grid grid-cols-2 px-10 py-8 text-gray-800">
                                <span>1000–1999 zł</span>
                                <span>25 zł + 1%</span>
                            </div>
                        </div>

                        {/* ROW 3 */}
                        <div className="grid grid-cols-2 px-4 py-5">
                            <span className="font-semibold text-gray-900">2000+ zł</span>
                            <span className="font-semibold text-[#D97706]">0 zł + 0%</span>
                        </div>
                    </div>






                </div>

            </div>
        </section>
    );
}