// app/warunki-wynajmu/components/QuickConditions.tsx

"use client";

import { useTranslations } from "next-intl";
import { Car, FileText, Settings, LifeBuoy } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    car: Car,
    file: FileText,
    settings: Settings,
    support: LifeBuoy,
};

type QuickConditionItem = {
    icon: string;
    title: string;
    points: string[];
};

export default function QuickConditions() {
    const t = useTranslations("rental-conditions");
    const items = t.raw("quickConditions.items") as QuickConditionItem[];

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
                    Szybkie warunki
                </h2>

                {/* Inner cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => {
                        const Icon = iconMap[item.icon];

                        return (
                            <div
                                key={index}
                                className="
                                  rounded-2xl
                                  bg-white
                                  p-6 md:p-7
                                  border border-gray-100
                                  shadow-sm
                                "
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    {Icon && (
                                        <div className="text-orange-500">
                                            <Icon size={22} strokeWidth={1.75} />
                                        </div>
                                    )}
                                    <h3 className="text-base font-semibold">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Bullet points */}
                                <ul className="space-y-2 text-sm text-gray-600">
                                    {item.points.map((point, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
