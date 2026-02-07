// lib/view-models/buildCarInstanceVM.ts

import { CarInstance } from "@/types/car-instance";

type TFunction = (key: string, values?: Record<string, any>) => string;

export type CarInstanceVM = {
    id: string;
    images: string[];
    equipment: string[];

    title: string;          // "Toyota Prius"

    status: {
        label: string;        // "Dostępny"
        tone: "success" | "neutral";
    };

    cta: {
        label: string;        // "Wybierz ten samochód"
    };
};

export function buildCarInstanceVM(
    instance: CarInstance,
    t: TFunction
): CarInstanceVM {
    return {
        id: instance.id,
        images: instance.images,
        equipment: instance.equipment.map(
            (slug) => t(`equipment.${slug}`)
        ),

        title: `${instance.brand} ${instance.model}`,

        status: {
            label: t(`carInstance.status.${instance.status}`),
            tone:
                instance.status === "available"
                    ? "success"
                    : "neutral",
        },

        cta: {
            label: t("carInstance.cta"),
        },
    };
}
