"use client";

import { usePathname, useRouter } from "next/navigation";
import { scrollToContactForm } from "@/lib/scrollToContactForm";

type Props = {
    children: React.ReactNode;
    variant?: "primary" | "link";
};

export default function HeaderCTA({ children, variant = "link" }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const base =
        variant === "primary"
            ? "rounded-lg bg-red-600 px-4 py-2 text-sm text-white font-medium hover:bg-red-700"
            : "text-sm text-gray-700 hover:text-black";

    const handleClick = () => {
        // home (/, /pl, /en etc.)
        const isHome =
            pathname === "/" || pathname.split("/").length === 2;

        if (isHome) {
            scrollToContactForm();
        } else {
            router.push("/?scroll=contact");
        }
    };

    return (
        <button onClick={handleClick} className={base}>
            {children}
        </button>
    );
}
