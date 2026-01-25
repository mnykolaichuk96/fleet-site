"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scrollToContactForm } from "@/lib/scrollToContactForm";

export default function HomeScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("scroll") === "contact") {
            scrollToContactForm();
        }
    }, [searchParams]);

    return null;
}
