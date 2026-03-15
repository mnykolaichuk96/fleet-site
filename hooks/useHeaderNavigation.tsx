"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToElement } from "@/lib/scrollToElement";

export type HeaderTarget =
    | "hero"
    | "rent-car"
    | "company-car"
    | "own-car"
    | "contact"
    | "faq";

const TARGET_ID_MAP: Record<HeaderTarget, string> = {
    hero: "hero",
    "rent-car": "rent-car",
    "company-car": "company-car",
    "own-car": "own-car",
    "contact": "contact-form",
    "faq": "faq",
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

        // FAQ може існувати на інших сторінках
        if (target === "faq") {
            const el = document.getElementById(targetId);

            if (el) {
                scrollToElement(targetId, retries, offset);
                return;
            }
        }

        if (isHome) {
            scrollToElement(targetId, retries, offset);
        } else {
            router.push(`${localeBase}?scroll=${targetId}`);
        }
    };

    return { navigate };
}
