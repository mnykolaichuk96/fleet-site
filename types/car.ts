export type FuelType = "hybrid" | "petrol" | "diesel" | "electric";

export type GearboxType = "automatic" | "manual";

export type CarOffer = {
    slug: string;              // toyota-corolla-hybrid
    brand: string;             // Toyota
    model: string;             // Corolla
    fuel: FuelType;
    gearbox: GearboxType;
    consumption: string;       // "3.8 l / 100km"
    pricePerWeek: number;      // 699
    icon: string;              // /icons/toyota.svg
};


