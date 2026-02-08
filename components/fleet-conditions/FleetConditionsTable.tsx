"use client";

import { useTranslations } from "next-intl";

import { NoCommissionIcon } from "@/components/icons/NoCommissionIcon";
import { MedRefoundIcon } from "@/components/icons/MedRefoundIcon";
import {BonusPlusTipsIcon} from "@/components/icons/BonusPlusTipsIcon";
import {CorollaIcon} from "@/components/icons/CorollaIcon";
import {PortfelIcon} from "@/components/icons/PortfelIcon";
import {CorollaIconV2} from "@/components/icons/CorollaIconV2";
import {PortfelIconV2} from "@/components/icons/PortfelIconV2";

// placeholders – docelowo można podmienić na dedykowane ikony fleet
function CompanyCarIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
            <rect x="3" y="11" width="18" height="5" rx="1" />
            <circle cx="7" cy="17" r="1.5" />
            <circle cx="17" cy="17" r="1.5" />
        </svg>
    );
}

function SupportIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4l2 2" />
        </svg>
    );
}

export default function FleetConditionsTable() {
    const t = useTranslations("fleet-conditions");
    const items = t.raw("table.items") as any[];

    const renderIcon = (icon: string) => {
        switch (icon) {
            case "bonusPlusTips":
                return <BonusPlusTipsIcon className="w-16 h-16 md:w-20 md:h-20 text-[#404753] -rotate-3" />;
            case "medRefound":
                return <MedRefoundIcon className="w-16 h-16 md:w-20 md:h-20 text-[#404753] -rotate-3" />;
            case "companyCar":
                return <CorollaIconV2 className="w-16 h-16 md:w-20 md:h-20 text-[#404753]" />;
            case "portfel":
                return <PortfelIconV2 className="w-16 h-16 md:w-20 md:h-20 text-[#404753]" />;
            default:
                return null;
        }
    };

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="
                              rounded-2xl bg-white p-6 md:p-7
                              border border-gray-100 shadow-sm
                              overflow-hidden group min-h-[180px]
                              transition-all duration-300
                              hover:shadow-md
                            "

                        >
                            <div className="flex items-start gap-6">
                                <div className="relative shrink-0">
                                    <div className="transition-transform duration-300 group-hover:scale-105">
                                        {renderIcon(item.icon)}
                                    </div>

                                     {/*badge placeholder */}
                                    <span
                                        className="
                                          absolute -bottom-2 -right-2
                                          rounded-full border border-[#D97706]
                                          px-2 py-0.5 text-xs font-semibold
                                          text-[#D97706] bg-white
                                        "
                                                        >
                                        {item.badge}
                                    </span>
                                </div>

                                <span className="h-28 w-px bg-[#D97706]/40 mt-1" />

                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                        {item.title.main}
                                        {item.title.highlight && (
                                            <>
                                                {" "}
                                                <span className="text-[#D97706]">{item.title.highlight}</span>
                                            </>
                                        )}
                                    </h3>

                                    {item.points?.length > 0 && (
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                            {item.points.map((point: string, i: number) => (
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
                    ))}
                </div>
            </div>
        </section>
    );
}
