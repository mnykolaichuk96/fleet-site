import { EBike } from "@/types/e-bike";

export type EBikeVM = {
    slug: string
    brand: string
    model: string
    images: string[]

    specs: {
        battery: string
        chargingTime: string
        range: string
        motorPower: string
        torque: string
    }

    price: {
        value1: number
        value2: number
        currency: string
        period: string
        pricePerWeekNote1: string
        pricePerWeekNote2: string
        extraBatteryPrice1: number
        extraBatteryPrice2: number
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
            chargingTime: bike.chargingTime,
            range: bike.range,
            motorPower: bike.motorPower,
            torque: bike.torque
        },

        price: {
            value1: bike.pricePerWeek1,
            value2: bike.pricePerWeek2,
            currency: t("currency"),
            period: t("pricePerWeek"),
            pricePerWeekNote1: t("pricePerWeekNote1"),
            pricePerWeekNote2: t("pricePerWeekNote2"),
            extraBatteryPrice1: bike.extraBatteryPrice1,
            extraBatteryPrice2: bike.extraBatteryPrice2,
            extraBattery: t("extraBattery")
        },

        cta: {
            label: t("cta")
        }
    };
}
