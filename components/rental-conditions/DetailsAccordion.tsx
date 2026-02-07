"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type DetailItem = {
    title: string;
    intro?: string;
    content: string[];
};

export default function DetailsAccordion() {
    const t = useTranslations("rental-conditions");
    const items = t.raw("details.items") as DetailItem[];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-6 lg:py-6">
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
                <div className="divide-y divide-gray-100">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="py-4">
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="
                    flex w-full items-center justify-between
                    text-left font-medium text-gray-900
                  "
                                >
                                    <span>{item.title}</span>
                                    <ChevronDown
                                        className={`
                      h-5 w-5 transition-transform
                      ${isOpen ? "rotate-180 text-orange-500" : "text-gray-400"}
                    `}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="mt-4 pl-1">
                                        {item.intro && (
                                            <p className="mb-3 text-sm text-gray-600">
                                                {item.intro}
                                            </p>
                                        )}

                                        <ul className="space-y-2 text-sm text-gray-600">
                                            {item.content.map((line, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                                                    <span>{line}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
