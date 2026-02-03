"use client";

import { useTranslations } from "next-intl";
import { Car, FileText, Settings, LifeBuoy } from "lucide-react";
import { useEffect, useState } from "react";

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
type CommissionTier = {
    range: string;
    fee: {
        amount: number;
        percent: number;
        highlight?: boolean;
    };
};

type CommissionTable = {
    title: string;
    subtitle: string;
    currency: string;
    tiers: CommissionTier[];
    note: string;
};


export default function QuickConditions() {
    const t = useTranslations("rental-conditions");
    const title = t("quickConditions.title");
    const items = t.raw("quickConditions.items") as QuickConditionItem[];
    const leftItems = items.slice(0, 2);
    const rightItems = items.slice(2, 4);
    const commission = t.raw("commissionTable") as CommissionTable;

    const [tableEntered, setTableEntered] = useState(false);
    const tableGrid = "grid grid-cols-[1fr_160px] items-center";

    useEffect(() => {
        const t = setTimeout(() => setTableEntered(true), 150);
        return () => clearTimeout(t);
    }, []);

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
                        className={`
                            h-full
                            rounded-2xl
                            p-7 md:p-9
                            border border-gray-200/60
                            backdrop-blur
                            transition-all duration-700 ease-out
                            ${tableEntered
                            ? "bg-white shadow-[0_30px_70px_-35px_rgba(0,0,0,0.22)] opacity-100 translate-y-0"
                            : "bg-white/70 shadow-[0_15px_40px_-40px_rgba(0,0,0,0.12)] opacity-0 translate-y-2"
                            }
                        `}
                    >
                        {/* HEADER */}


                        <div className="grid grid-cols-2 items-center mb-4 text-sm font-semibold text-gray-500 transition-colors duration-200 hover:bg-gray-50">

                            <h3 className="text-lg font-semibold">
                                {commission.title}
                            </h3>
                            <p className="text-sm text-gray-500 text-right">
                                {commission.subtitle}
                            </p>
                        </div>

                        <div className="space-y-4">

                            <div
                                className="flex justify-between items-center rounded-xl bg-gray-50 px-5 py-4 transition-colors duration-200 hover:bg-gray-100">
                                <span className="text-gray-700">0-999 {commission.currency}</span>
                                <span className="font-medium">
                                  50 {commission.currency} <span className="text-gray-500 text-sm">+ 1%</span>
                                </span>
                            </div>

                            <div className="flex justify-between items-center rounded-xl bg-gray-50 px-5 py-4 transition-colors duration-200 hover:bg-gray-100">
                                <span className="text-gray-700">1000–1999 {commission.currency}</span>
                                <span className="font-medium">
                                    25 {commission.currency} <span className="text-gray-500 text-sm">+ 1%</span>
                                </span>
                            </div>

                            <div className="flex justify-between items-center rounded-xl bg-[#FFF7ED] px-5 py-4 transition-colors duration-200 hover:bg-[#FFF1DD]">
                                <span className="font-semibold text-gray-900">2000+ {commission.currency}</span>
                                <span className="font-semibold text-[#D97706]">
                                  0 {commission.currency} <span className="text-[#D97706]/70 text-sm">+ 0%</span>
                                </span>

                            </div>
                            <p className="mt-4 text-xs text-gray-400">
                                {commission.note}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}