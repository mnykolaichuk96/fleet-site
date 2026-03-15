"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeaderScrollLink from "@/components/layout/HeaderScrollLink";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import HeaderLogo from "@/components/layout/HeaderLogo";
import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";

export default function Header() {
    const t = useTranslations("header");
    const { navigate } = useHeaderNavigation();
    const [open, setOpen] = useState(false);

    const navLinkClass =
        "text-sm font-medium text-[#0A1A2F]/80 hover:text-[#0A1A2F] transition-colors";

    return (
        <>
        <header className="sticky top-0 z-50 bg-[#0B1C2D]/10 backdrop-blur border-b relative">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <HeaderLogo />

                <Link
                    href="/e-bike"
                    className="
        absolute left-1/2 -translate-x-1/2
        md:static md:translate-x-0
        flex flex-col items-center md:items-start
        leading-tight
        hover:opacity-80 transition-opacity
    "
                >
    <span className="self-center text-[#D97706] text-[11px] md:text-sm font-semibold uppercase">
        {t("e-bike.label")}
    </span>

                    <span className="text-[#0A1A2F] text-xs md:text-sm font-medium whitespace-nowrap">
        {t("e-bike.rentEBike")}
    </span>
                </Link>

                {/* ===== DESKTOP NAV ===== */}
                <nav className="hidden md:flex gap-8 text-sm">
                    <Link href="/cars" className={navLinkClass}>
                        {t("cars")}
                    </Link>

                    {/* Drivers dropdown (desktop only) */}
                    <div className="relative group">
                        <button className="text-sm font-medium text-[#0A1A2F]/80 hover:text-[#0A1A2F] transition-colors">
                            {t("drivers")} ▾
                        </button>

                        <div className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
                            <ul className="py-2 text-sm text-[#0A1A2F]">
                                <li>
                                    <button
                                        onClick={() => navigate("rent-car")}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                    >
                                        {t("dropdown.rentCar")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => navigate("company-car")}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                    >
                                        {t("dropdown.companyCar")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => navigate("own-car")}
                                        className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                                    >
                                        {t("dropdown.ownCar")}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <HeaderScrollLink target="contact">
                        {t("contact")}
                    </HeaderScrollLink>
                </nav>

                {/* ===== MOBILE DROPDOWN ===== */}
                <div
                    className={`
                        absolute left-0 top-full w-full z-50 md:hidden
                        transition-all duration-300 ease-in-out
                        ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}
                    `}
                >
                    <div className="bg-[#0B1C2D]/85 text-[#D97706] shadow-xl border-t border-white/10">

                        <div className="flex flex-col">

                            <button
                                onClick={() => {
                                    navigate("rent-car");
                                    setOpen(false);
                                }}
                                className="px-6 py-4 text-center border-b border-white/10"
                            >
                                {t("dropdown.rentCar")}
                            </button>

                            <button
                                onClick={() => {
                                    navigate("company-car");
                                    setOpen(false);
                                }}
                                className="px-6 py-4 text-center border-b border-white/10"
                            >
                                {t("dropdown.companyCar")}
                            </button>

                            <button
                                onClick={() => {
                                    navigate("own-car");
                                    setOpen(false);
                                }}
                                className="px-6 py-4 text-center border-b border-white/10"
                            >
                                {t("dropdown.ownCar")}
                            </button>

                            <button
                                onClick={() => {
                                    navigate("contact");
                                    setOpen(false);
                                }}
                                className="self-center w-fit rounded-lg bg-[#D97706] px-4 py-2 my-3 text-sm font-medium text-white"
                            >
                                {t("apply")}
                            </button>

                        </div>
                    </div>
                </div>

                {/* ===== RIGHT SIDE ===== */}
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <HeaderScrollLink target="contact" variant="primary">
                            {t("apply")}
                        </HeaderScrollLink>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl text-[#0A1A2F]"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* ===== MOBILE PANEL ===== */}
        </header>

    {/* ===== OVERLAY ===== */}
    {open && (
        <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
    )}
</>
    );
}
