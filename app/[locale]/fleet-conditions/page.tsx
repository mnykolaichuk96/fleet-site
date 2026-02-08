import FixedBackground from "@/components/home/FixedBackground";
import FixedOverlay from "@/components/home/FixedOverlay";

import FleetConditionsIntro from "@/components/fleet-conditions/FleetConditionsIntro";
import FleetConditionsTable from "@/components/fleet-conditions/FleetConditionsTable";
import FleetConditionsAccordion from "@/components/fleet-conditions/FleetConditionsAccordion";
import FleetConditionsContactForm from "@/components/fleet-conditions/FleetConditionsContactForm";

export default function FleetConditionsPage() {
    return (
        <>
            <FixedBackground />

            <main className="relative z-0">
                <FixedOverlay />

                <FleetConditionsIntro />

                <FleetConditionsTable />

                <FleetConditionsAccordion />

                <FleetConditionsContactForm />
            </main>
        </>
    );
}
