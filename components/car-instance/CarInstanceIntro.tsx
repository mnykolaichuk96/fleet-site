import Link from "next/link";

type Props = {
    brand: string;
    model: string;
    subtitle: string;

    backLabel: string;          // i18n
    rentalConditionsLabel: string; // i18n
};

export default function CarInstanceIntro({
                                             brand,
                                             model,
                                             subtitle,
                                             backLabel,
                                             rentalConditionsLabel,
                                         }: Props) {
    return (
        <section>
            {/* TITLE */}
            <h1
                className="
          flex flex-wrap justify-center gap-2
          text-[clamp(2.25rem,5vw,3.5rem)]
          tracking-tight leading-tight mb-4
        "
            >
        <span className="text-[#0A1A2F]/85 font-medium">
          {brand}
        </span>
                <span className="text-[#D97706] font-semibold">
          {model}
        </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mb-10 text-center text-base sm:text-xl text-[#0A1A2F]/70 font-medium">
                {subtitle}
            </p>

            {/* ACTIONS */}
            <div className="flex justify-between max-w-6xl mx-auto">
                {/* BACK */}
                <Link
                    href="/cars"
                    className="
            inline-flex items-center gap-2
            text-base sm:text-xl font-medium
            text-[#0A1A2F]/85
            hover:text-[#D97706]
            transition-colors group
          "
                >
          <span className="transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
                    {backLabel}
                </Link>

                {/* RENTAL CONDITIONS */}
                <Link
                    href="/rental-conditions"
                    className="
            inline-flex items-center gap-2
            text-base sm:text-xl font-medium
            text-[#0A1A2F]/85
            hover:text-[#D97706]
            transition-colors group
          "
                >
                    {rentalConditionsLabel}
                    <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
                </Link>
            </div>
        </section>
    );
}
