"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scrollToElement } from "@/lib/scrollToElement";

export default function HomeScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const target = searchParams.get("scroll");
        if (target) {
            scrollToElement(target);
        }
    }, [searchParams]);

    return null;
}
