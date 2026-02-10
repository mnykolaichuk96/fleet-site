"use client";

import { useTranslations } from "next-intl";

import { OpenBookIcon } from "@/components/icons/OpenBookIcon";
import { NoVatIcon } from "@/components/icons/NoVatIcon";
import { MedRefound } from "@/components/icons/MedRefound";

export function WhyUsInline() {
    const t = useTranslations("home.whyUsInline");

    return (
        <section className="relative z-10">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl">
                    <div
                        className="
              grid grid-cols-1

              md:grid-cols-3

              divide-y
              md:divide-y-0 md:divide-x

              rounded-3xl

              py-12
              md:py-12
              lg:py-12
            "
                    >
                        <WhyUsItem
                            icon={<OpenBookIcon />}
                            title={t("items.0.title")}
                            text={t("items.0.text")}
                        />

                        <WhyUsItem
                            icon={<NoVatIcon />}
                            title={t("items.1.title")}
                            text={t("items.1.text")}
                        />

                        <WhyUsItem
                            icon={<MedRefound />}
                            title={t("items.2.title")}
                            text={t("items.2.text")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ================= ITEM ================= */

function WhyUsItem({
                       icon,
                       title,
                       text,
                   }: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div
            className="
                relative
                flex flex-col

                items-center
                text-center

                px-4
                md:px-6
              "
        >
            {/* HALO */}
            <div
                className="
          pointer-events-none
          absolute
          left-1/2
          -translate-x-1/2

          top-10
          md:top-16
          lg:top-20

          w-full
          h-full
          rounded-full
          bg-white/80
          blur-2xl
        "
            />

            {/* CONTENT */}
            <div className="relative z-10">
                {/* ICON */}
                <div
                    className="
                    mb-6
                    pt-6
                    md:pt-0
                    w-full
                    flex
                    justify-center
                    items-center

                    text-slate-700

                    [&>svg]:h-[6rem]
                    [&>svg]:w-[6rem]

                    md:[&>svg]:h-[7rem]
                    md:[&>svg]:w-[7rem]

                    lg:[&>svg]:h-[8rem]
                    lg:[&>svg]:w-[8rem]

                    xl:[&>svg]:h-[10rem]
                    xl:[&>svg]:w-[10rem]
                  "
                >
                    {icon}
                </div>

                {/* TITLE */}
                <p
                    className="
            mb-3

            text-2xl
            md:text-2xl
            lg:text-3xl

            font-semibold
            text-[#D97706]


            md:min-h-[6rem]
            lg:min-h-[4.5rem]
          "
                >
                    {title}
                </p>

                {/* TEXT */}
                <p
                    className="
            max-w-sm
            md:max-w-md
            lg:max-w-lg

            text-base
            md:text-lg
            lg:text-xl

            leading-relaxed
            lg:leading-loose

            text-gray-700
          "
                >
                    {text}
                </p>
            </div>
        </div>
    );
}
