import { CarOffer, CarInstance } from "@/types/car";

export const carOffers: CarOffer[] = [
    {
        slug: "toyota-corolla-hybrid",
        brand: "Toyota",
        model: "Corolla",
        fuel: "hybrid",
        gearbox: "automatic",
        consumption: "3.8 l / 100km",
        pricePerWeek: 699,
        icon: "/icons/toyota.svg",
    },
    {
        slug: "skoda-octavia-diesel",
        brand: "Skoda",
        model: "Octavia",
        fuel: "diesel",
        gearbox: "automatic",
        consumption: "4.5 l / 100km",
        pricePerWeek: 749,
        icon: "/icons/skoda.svg",
    },
];

export const carInstances: CarInstance[] = [
    {
        id: "corolla-001",
        offerSlug: "toyota-corolla-hybrid",
        year: 2022,
        mileage: 42000,
        equipment: ["Kamera cofania", "CarPlay", "Grzane siedzenia"],
        images: [
            "/cars/corolla/1.jpg",
            "/cars/corolla/2.jpg",
        ],
        available: true,
    },
    {
        id: "corolla-002",
        offerSlug: "toyota-corolla-hybrid",
        year: 2021,
        mileage: 61000,
        equipment: ["CarPlay", "Tempomat"],
        images: [
            "/cars/corolla/3.jpg",
        ],
        available: false,
    },
];
