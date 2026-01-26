"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToElement } from "@/lib/scrollToElement";

type Props = {
    children: React.ReactNode;
    targetId: string; // ⬅️ ОСНОВНЕ
    variant?: "primary" | "link";
};

export default function HeaderCTA({
                                      children,
                                      targetId,
                                      variant = "link",
                                  }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const base =
        variant === "primary"
            ? "rounded-lg bg-red-600 px-4 py-2 text-sm text-white font-medium hover:bg-red-700"
            : "text-sm text-gray-700 hover:text-black";

    const isHome =
        pathname === "/" || pathname.split("/").length === 2;

    const handleClick = () => {
        if (isHome) {
            scrollToElement(targetId);
        } else {
            router.push(`/?scroll=${targetId}`);
        }
    };

    return (
        <button onClick={handleClick} className={base}>
            {children}
        </button>
    );
}
