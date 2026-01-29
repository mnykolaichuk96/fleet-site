// src/components/Footer.tsx

import Link from "next/link";
import { getTranslations } from "next-intl/server";
import {PinIcon} from "@/components/icons/PinIcon";


export default async function Footer() {
    const t = await getTranslations("footer");

    return (
        <footer className="border-t border-white/10 bg-[#0B1C2D]/85">
            <div className="mx-auto max-w-6xl px-6 py-20">

                {/* ===== TOP PART ===== */}
                <div className="grid gap-12 md:grid-cols-3">

                    {/* BRAND */}
                    <div>
                        <div className="text-4xl md:text-5xl">
              <span className="text-[#D97706] tracking-wide">
                Ginger
              </span>{" "}
                            <span className="text-[#D97706] font-medium">
                Partner
              </span>
                        </div>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-[#D97706]">
                            {t("navigation.title")}
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                            <li>
                                <Link href="/drivers" className="hover:text-white">
                                    {t("navigation.drivers")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/cars" className="hover:text-white">
                                    {t("navigation.cars")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/opinie" className="hover:text-white">
                                    {t("navigation.reviews")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/apply" className="hover:text-white">
                                    {t("navigation.apply")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-sm font-medium uppercase tracking-wide text-[#D97706]">
                            {t("contact.title")}
                        </h4>

                        <ul className="mt-4 space-y-2 text-sm text-white/80">
                            {/* LOCATION */}
                            <li className="flex items-center gap-3">
                                <span className="flex-shrink-0 text-[#D97706] [&>svg]:h-8 [&>svg]:w-8">
                                    <PinIcon />
                                </span>
                                <span>{t("contact.city")}</span>
                            </li>
                            <li>
                                📞{" "}
                                <a
                                    href="tel:+48723000500"
                                    className="hover:text-white"
                                >
                                    {t("contact.phone")}
                                </a>
                            </li>
                            <li>
                                ✉️{" "}
                                <a
                                    href="mailto:kontakt@gingerpartner.pl"
                                    className="hover:text-white"
                                >
                                    {t("contact.email")}
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ===== BOTTOM PART ===== */}
                <div
                    className="
            mt-16 flex flex-col
            items-center justify-between
            gap-4 border-t border-white/10 pt-6
            text-xs text-white/60
            md:flex-row
          "
                >
          <span>
            © {new Date().getFullYear()} Ginger Partner
          </span>

                    <div className="flex gap-4">
                        <Link href="/polityka-prywatnosci" className="hover:text-white">
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

// {/* CONTACT */}
// <div>
//     <h4 className="text-sm font-medium uppercase tracking-wide text-[#D97706]">
//         {t("contact.title")}
//     </h4>
//
//     <ul className="mt-4 space-y-2 text-sm text-white/80">
//
//         {/* LOCATION */}
//         <li className="flex items-center gap-3">
//       <span className="flex-shrink-0 text-[#D97706] [&>svg]:h-4 [&>svg]:w-4">
//         <PinIcon />
//       </span>
//             <span>{t("contact.city")}</span>
//         </li>
//
//         {/* PHONE */}
//         <li className="flex items-center gap-3">
//       <span className="flex-shrink-0 text-[#D97706] [&>svg]:h-4 [&>svg]:w-4">
//         <PhoneIcon />
//       </span>
//             <a
//                 href="tel:+48723000500"
//                 className="hover:text-white"
//             >
//                 {t("contact.phone")}
//             </a>
//         </li>
//
//         {/* EMAIL */}
//         <li className="flex items-center gap-3">
//       <span className="flex-shrink-0 text-[#D97706] [&>svg]:h-4 [&>svg]:w-4">
//         <MailIcon />
//       </span>
//             <a
//                 href="mailto:kontakt@gingerpartner.pl"
//                 className="hover:text-white"
//             >
//                 {t("contact.email")}
//             </a>
//         </li>
//
//     </ul>
// </div>

