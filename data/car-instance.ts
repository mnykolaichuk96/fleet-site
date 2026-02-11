// data/car-instance.ts

import {CarInstance} from "@/types/car-instance";

export const carInstances: CarInstance[] = [
    {
        id: "1",
        offerSlug: "toyota-prius-30",
        brand: "Toyota",
        model: "Prius",
        generation: "30",
        status: "available",
        equipment: [
            "rear_camera",
            "carPlay",
            "keyLess",
            "dashcam",
        ],
        imagesV: [
            "/car-instance/toyota-prius-30/1/1V.jpg",
            "/car-instance/toyota-prius-30/1/2V.jpg",
            "/car-instance/toyota-prius-30/1/3V.jpg"
        ],
        imagesH: [
            "/car-instance/toyota-prius-30/1/1H.jpg",
            "/car-instance/toyota-prius-30/1/2H.jpg",
            "/car-instance/toyota-prius-30/1/3H.jpg",
        ],
    },

    {
        id: "2",
        offerSlug: "toyota-auris-1",
        brand: "Toyota",
        model: "Auris",
        generation: "I",
        status: "available",
        equipment: [
            "rear_camera",
            "pdc",
            "bluetooth",
            "dashcam",
        ],
        imagesV: [
            "/car-instance/toyota-auris-1/2/1V.jpg",
            "/car-instance/toyota-auris-1/2/2V.jpg",
        ],
        imagesH: [
            "/car-instance/toyota-auris-1/2/1H.jpg",
            "/car-instance/toyota-auris-1/2/2H.jpg",
        ]
    },
];