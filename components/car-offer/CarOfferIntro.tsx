import Link from "next/link";

type IntroTitlePart = {
    text: string;
    accent?: boolean;
};

type Props = {
    titleParts: IntroTitlePart[];
    rentalConditions: string
};


export default function CarOfferIntro({ titleParts, rentalConditions }: Props) {
    return (
        <section>
            {/* TITLE */}
            <h1
                className="
          flex flex-wrap justify-center gap-2
          text-[clamp(2.25rem,5vw,3.5rem)]
          tracking-tight
          leading-tight
          mb-8
        "
            >
                {titleParts.map((part, idx) => (
                    <span
                        key={idx}
                        className={
                            part.accent
                                ? "text-[#D97706] font-semibold"
                                : "text-[#0A1A2F]/85 font-medium"
                        }
                    >
            {part.text}
          </span>
                ))}
            </h1>

            <div className="mb-10 text-center">
                <Link
                    href="/rental-conditions"
                    className="
      inline-flex items-center gap-2
      text-base sm:text-xl
      font-medium
      text-[#0A1A2F]/85
      hover:text-[#D97706]
      transition-colors
    "
                >
                    {rentalConditions}
                    <span className="transition-transform group-hover:translate-x-0.5">
      →
    </span>
                </Link>
            </div>

        </section>
    );
}