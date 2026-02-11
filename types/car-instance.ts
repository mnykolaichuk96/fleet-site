// types/car-instance.ts

export type CarInstanceStatus =
    | "available"
    | "rented";

export type CarInstance = {
    id: string;                 // internal id (uuid / fleet id)
    offerSlug: string;          // FK → CarOffer.slug

    brand: string;              // Toyota
    model: string;              // Prius
    generation: string;

    status: CarInstanceStatus;

    equipment: string[];    // All equipment

    imagesV: string[];           // REAL photos for phone
    imagesH: string[];           // REAL photos for desctop
};
