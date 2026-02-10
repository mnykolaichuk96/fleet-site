import { useTranslations } from "next-intl";
import { CriminalRecordIcon } from "@/components/icons/CriminalRecordIcon";
import { MedicalIcon } from "@/components/icons/MedicalIcon";
import { LicenseIcon } from "@/components/icons/LicenseIcon";

export function RequestsInline() {
    const t = useTranslations("home");

    return (
        <section className="relative z-10 py-12 lg:py-16">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-6xl text-center">

                    {/* BADGE */}
                    <span className="inline-block rounded-full border px-4 py-1 text-sm text-gray-500">
            {t("cta.badge")}
          </span>

                    {/* TITLE */}
                    <h2
                        className="
              mt-6
              text-3xl
              md:text-4xl
              lg:text-5xl
              font-semibold
              text-gray-900
            "
                    >
                        {t("cta.title")}
                    </h2>

                    {/* ITEMS */}
                    <div
                        className="

              grid grid-cols-1
              md:grid-cols-3

              divide-y
              md:divide-y-0 md:divide-x

              rounded-3xl
              py-12
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

/* ================= ITEM ================= */

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

          top-16
          md:top-20
          lg:top-24

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
            my-6
            flex justify-center
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
