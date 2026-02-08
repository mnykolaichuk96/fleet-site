"use client";

import CarInstanceCard from "@/components/car-instance/CarInstanceCard";
import { CarInstanceVM } from "@/lib/view-models/buildCarInstanceVM";
import { useEffect, useState } from "react";
import {ContactForm} from "@/components/cta/ContactForm";

type Props = {
    instanceVMs: CarInstanceVM[];
};

export default function CarsClientSection({ instanceVMs }: Props) {
    const [selectedCar, setSelectedCar] = useState<{
        id: string;
        title: string;
    } | null>(null);

    useEffect(() => {
        if (selectedCar) {
            const el = document.getElementById("car-form-anchor");
            el?.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedCar]);

    return (
        <>
            {/* CARDS */}
            <div className="space-y-8 pb-16">
                {instanceVMs.map((vm) => (
                    <CarInstanceCard
                        key={vm.id}
                        vm={vm}
                        onSelect={() => {
                            setSelectedCar({
                                id: vm.id,
                                title: vm.title,
                            });
                        }}
                    />
                ))}
            </div>

            {/* FORM — ONLY IF CAR SELECTED */}
            {selectedCar && (
                <div
                    id="car-form-anchor"
                    className="pb-24"
                >
                    <p className="mb-4 text-center font-medium text-xl text-[#0A1A2F]/85">
                        Wybrany samochód:{" "}
                        <strong className="text-[#D97706]">
                            {selectedCar.title}
                        </strong>
                    </p>

                    <ContactForm
                        carInstanceId={selectedCar.id}
                    />
                </div>
            )}
        </>
    );
}
