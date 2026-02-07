import { CarOffer } from "@/types/car";

type TFunction = (key: string, values?: Record<string, any>) => string;

export type CarOfferVM = {
    slug: string;
    brand: string;
    model: string;
    icon: string;

    // ТЕ, ЩО РЕНДЕРИТЬСЯ

    specs: {
        fuel: string;
        gearbox: string;
        consumption: string;
    };

    price: {
        value: number;      // "600 zł"
        period: string;     // "/ tydzień"
        currency: string;
    };

    cta: {
        label: string;      // "Zobacz dostępne samochody"
    };
};

export function buildCarOfferVM(
    offer: CarOffer,
    t: TFunction
): CarOfferVM {
    return {
        slug: offer.slug,
        brand: offer.brand,
        model: offer.model,
        icon: offer.icon,

        specs: {
            fuel: t(`offer.labels.fuel.${offer.fuel}`),
            gearbox: t(`offer.labels.gearbox.${offer.gearbox}`),
            consumption: t("offer.consumption", {
                consumption: offer.consumption,
            }),
        },

        price: {
            value: offer.pricePerWeek,
            period: t("offer.perWeek"),
            currency: t("offer.currency"),
        },

        cta: {
            label: t("offer.cta"),
        },
    };
}
