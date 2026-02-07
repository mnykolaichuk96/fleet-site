// types/car-instance.ts

export type CarInstanceStatus =
    | "available"
    | "rented";

export type CarInstance = {
    id: string;                 // internal id (uuid / fleet id)
    offerSlug: string;          // FK → CarOffer.slug

    brand: string;              // Toyota
    model: string;              // Prius

    status: CarInstanceStatus;

    equipment: string[];    // All equipment

    images: string[];           // REAL photos
};
