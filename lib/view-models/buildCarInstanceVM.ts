// lib/view-models/buildCarInstanceVM.ts

import { CarInstance } from "@/types/car-instance";

type TFunction = (key: string, values?: Record<string, any>) => string;

export type CarInstanceVM = {
    id: string;
    imagesV: string[];
    imagesH: string[];
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
        imagesV: instance.imagesV,
        imagesH: instance.imagesH,
        equipment: instance.equipment.map(
            (slug) => t(`equipment.${slug}`)
        ),

        title: `${instance.brand} ${instance.model} ${instance.generation}`,

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
