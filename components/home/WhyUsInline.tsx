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
    grid grid-cols-1 md:grid-cols-3
    divide-y md:divide-y-0 md:divide-x
    rounded-3xl
    {/*bg-[#0B1C2D]/10*/}
    py-18 md:py-12
  "
                    >
                        {/* ===== ITEM 1 ===== */}
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
        <div className="relative flex flex-col items-center text-center px-6 -translate-y-[250px] -mb-[250px]">

            {/* HALO / FOG — ПІД ВСІМ */}
            <div
                className="
          pointer-events-none
          absolute
          top-20
          left-1/2
          -translate-x-1/2
          w-[120%]
          h-[100%]
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
            mb-2
            text-slate-700
            [&>svg]:h-[clamp(20rem,23vw,22rem)]
            [&>svg]:w-[clamp(20rem,23vw,22rem)]
          "
                >
                    {icon}
                </div>

                {/* TITLE */}
                <p className="mb-2 text-2xl font-semibold text-[#D97706]">
                    {title}
                </p>

                {/* TEXT */}
                <p className="max-w-md text-lg leading-loose text-gray-700">
                    {text}
                </p>
            </div>
        </div>
    );
}



