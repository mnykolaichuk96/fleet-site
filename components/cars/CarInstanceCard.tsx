import { CarInstance } from "@/types/car";
import Link from "next/link";
import CarImageCarousel from "@/components/cars/CarImageCarousel";



type Props = {
    car: CarInstance;
};

export default function CarInstanceCard({ car }: Props) {
    return (
        <div className="rounded-xl border p-5 bg-white">
            {/* IMAGE */}
            <CarImageCarousel images={car.images} />


            {/* INFO */}
            <div className="mt-4 space-y-1 text-sm text-gray-700">
                <div>Rok: {car.year}</div>
                <div>Przebieg: {car.mileage.toLocaleString()} km</div>
                <div>
                    Status:{" "}
                    <span
                        className={
                            car.available ? "text-green-600" : "text-gray-400"
                        }
                    >
            {car.available ? "Dostępne" : "Zajęte"}
          </span>
                </div>
            </div>

            {/* EQUIPMENT */}
            <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                {car.equipment.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
