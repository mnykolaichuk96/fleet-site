export type EBike = {
    slug: string
    brand: string
    model: string
    battery: string
    batteryOptions: ("single" | "dual")[]
    chargingTime: string
    range?: string
    dualBatteryRange?: string
    motorPower: string
    torque: string
    pricePerWeek1: number
    pricePerWeek2: number
    extraBatteryPrice1: number
    extraBatteryPrice2: number
    images: string[]
    dualBatteryImages?: string[]
}
