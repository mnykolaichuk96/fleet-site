import { useTranslations } from "next-intl";
import { CriminalRecordIcon } from "@/components/icons/CriminalRecordIcon";
import { MedicalIcon } from "@/components/icons/MedicalIcon";
import {LicenseIcon} from "@/components/icons/LicenseIcon";

export function RequestsInline() {
    const t = useTranslations("home");

    return (
        <section className="relative z-10 py-12 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl text-center">

                    {/* Badge */}
                    <span className="inline-block rounded-full border px-4 py-1 text-sm text-gray-500">
            {t("cta.badge")}
          </span>

                    {/* Title */}
                    <h2 className="mt-6 text-4xl font-semibold text-gray-900">
                        {t("cta.title")}
                    </h2>

                    {/* ITEMS */}
                    <div
                        className="
              mt-16
              grid grid-cols-1 md:grid-cols-3
              divide-y md:divide-y-0 md:divide-x
              rounded-3xl
              py-6 md:py-2
            "
                    >
                        <RequestItem
                            icon={<CriminalRecordIcon />}
                            title={t("cta.requirements.criminal.title")}
                            text={t("cta.requirements.criminal.text")}
                        />

                        <RequestItem
                            icon={<MedicalIcon />}
                            title={t("cta.requirements.medical.title")}
                            text={t("cta.requirements.medical.text")}
                        />

                        <RequestItem
                            icon={<LicenseIcon />}
                            title={t("cta.requirements.photo.title")}
                            text={t("cta.requirements.photo.text")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function RequestItem({
                         icon,
                         title,
                         text,
                     }: {
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="relative flex flex-col items-center text-center px-6 -translate-y-[210px] -mb-[230px]">

            {/* HALO / FOG */}
            <div
                className="
          pointer-events-none
          absolute
          top-40
          left-1/2
          -translate-x-1/2
          w-[120%]
          h-[80%]
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

