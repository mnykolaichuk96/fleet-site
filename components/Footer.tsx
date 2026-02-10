// src/components/Footer.tsx

import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { MapPin, Mail } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import "flag-icons/css/flag-icons.min.css";
import FooterCooperationLinks from "@/components/FooterCooperationLinks";

type PhoneItem = {
    label: string;
    number: string;
    flags: string[];
};

export default async function Footer() {
    const t = await getTranslations("footer");
    const phones = t.raw("contact.phones") as PhoneItem[];

    return (
        <footer className="border-t border-white/10 bg-[#0B1C2D]/85">
            <div className="mx-auto max-w-6xl px-6 py-20">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* BRAND */}
                    <div>
                        <div className="text-4xl md:text-5xl text-[#D97706] tracking-wide font-medium">
                            {t("brand.name")}
                        </div>
                    </div>

                    {/* WSPÓŁPRACA */}
                    <FooterCooperationLinks />

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-[#D97706]">
                            {t("contact.title")}
                        </h4>

                        <ul className="mt-4 space-y-3 text-sm text-white/80">

                            {/* LOCATION */}
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-[#D97706]" />
                                <span>{t("contact.city")}</span>
                            </li>

                            {/* PHONES */}
                            {phones.map((phone) => (
                                <li
                                    key={phone.number}
                                    className="grid grid-cols-[44px_1fr] items-center gap-3"
                                >
                                    <div className="flex items-center gap-1">
                                        {phone.flags.map((code, i) => (
                                            <span
                                                key={i}
                                                className={`fi fi-${code.toLowerCase()} rounded-sm`}
                                                style={{ width: "16px", height: "12px" }}
                                            />
                                        ))}
                                    </div>

                                    <a
                                        href={`tel:${phone.number}`}
                                        className="hover:text-white transition-colors"
                                    >
                                        {phone.label}
                                    </a>
                                </li>
                            ))}

                            {/* EMAIL */}
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#D97706]" />
                                <a
                                    href={`mailto:${t("contact.email")}`}
                                    className="hover:text-white"
                                >
                                    {t("contact.email")}
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <span>
            © {new Date().getFullYear()} {t("brand.name")}
          </span>

                    <div className="flex gap-4">
                        <Link href="/private-policy" className="hover:text-white">
                            {t("legal.privacy")}
                        </Link>
                        <Link href="/cookies" className="hover:text-white">
                            {t("legal.cookies")}
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
