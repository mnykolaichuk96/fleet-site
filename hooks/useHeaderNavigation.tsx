"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToElement } from "@/lib/scrollToElement";

export type HeaderTarget =
    | "hero"
    | "cars"
    | "contact"
    | "cooperation-modes";

const TARGET_ID_MAP: Record<HeaderTarget, string> = {
    hero: "hero",
    cars: "cars-preview",
    contact: "contact-form",
    "cooperation-modes": "cooperation-modes",
};

export function useHeaderNavigation() {
    const router = useRouter();
    const pathname = usePathname();

    const isHome = pathname.split("/").length === 2;
    const localeBase = pathname.split("/").slice(0, 2).join("/");

    const navigate = (
        target: HeaderTarget,
        options?: {
            offset?: number;
            retries?: number;
        }
    ) => {
        const { offset = 80, retries = 10 } = options ?? {};
        const targetId = TARGET_ID_MAP[target];

        if (isHome) {
            scrollToElement(targetId, retries, offset);
        } else {
            router.push(`${localeBase}?scroll=${targetId}`);
        }
    };

    return { navigate };
}
