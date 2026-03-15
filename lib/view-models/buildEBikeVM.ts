import { EBike } from "@/types/e-bike";

export type EBikeVM = {
    slug: string
    brand: string
    model: string
    images: string[]

    specs: {
        battery: string
        range: string
        motorPower: string
        torque: string
    }

    price: {
        value: number
        currency: string
        period: string
        extraBatteryPrice: number
        extraBattery: string
    }

    cta: {
        label: string
    }
}

export function buildEBikeVM(
    bike: EBike,
    t: (key: string) => string
): EBikeVM {

    return {
        slug: bike.slug,

        brand: bike.brand,
        model: bike.model,

        images: bike.images,

        specs: {
            battery: bike.battery,
            range: bike.range,
            motorPower: bike.motorPower,
            torque: bike.torque
        },

        price: {
            value: bike.pricePerWeek,
            currency: t("currency"),
            period: t("pricePerWeek"),
            extraBatteryPrice: bike.extraBatteryPrice,
            extraBattery: t("extraBattery")
        },

        cta: {
            label: t("cta")
        }
    };
}
