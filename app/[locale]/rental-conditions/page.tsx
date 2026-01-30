import QuickConditions from "@/components/rental-conditions/QuickConditions";
import { useTranslations } from "next-intl";
import FixedBackground from "@/components/home/FixedBackground";
import FixedOverlay from "@/components/home/FixedOverlay";
import DetailsAccordion from "@/components/rental-conditions/DetailsAccordion";
import RentalConditionsIntro from "@/components/rental-conditions/RentalConditionsIntro";
import CtaSection from "@/components/rental-conditions/CtaSection";

export default function RentalConditionsPage() {
    const t = useTranslations("rental-conditions");

    return (
        <>
            <FixedBackground />
        <main className="relative z-0 ">

            <FixedOverlay />

            <RentalConditionsIntro />

            <QuickConditions />

            <DetailsAccordion />

            <CtaSection/>

        </main>
        </>
    );
}
