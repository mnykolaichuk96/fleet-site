// data/car-instance.ts

import {CarInstance} from "@/types/car-instance";

export const carInstances: CarInstance[] = [
    {
        id: "1",
        offerSlug: "toyota-prius-30",
        brand: "Toyota",
        model: "Prius 30",
        status: "available",
        equipment: [
            "rear_camera",
            "carPlay",
            "dashcam",
            "keyLess"
        ],
        images: [
            "/car-instance/toyota-prius-30/1/1.png",
            "/car-instance/toyota-prius-30/1/2.png",
            "/car-instance/toyota-prius-30/1/3.png",
            "/car-instance/toyota-prius-30/1/4.png",
            "/car-instance/toyota-prius-30/1/5.jpg",
            "/car-instance/toyota-prius-30/1/6.jpg"
        ],
    },
];