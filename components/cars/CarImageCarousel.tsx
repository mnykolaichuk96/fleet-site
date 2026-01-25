"use client";

import { useState } from "react";

type Props = {
    images: string[];
};

export default function CarImageCarousel({ images }: Props) {
    const [index, setIndex] = useState(0);

    if (images.length === 0) return null;

    const prev = () =>
        setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () =>
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

    return (
        <div className="relative">
            {/* IMAGE */}
            <img
                src={images[index]}
                alt="Car photo"
                className="h-64 w-full object-cover rounded-lg"
            />

            {/* ARROWS */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2 py-1 text-lg"
                    >
                        ‹
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full px-2 py-1 text-lg"
                    >
                        ›
                    </button>
                </>
            )}
        </div>
    );
}
