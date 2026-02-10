"use client";

import { useHeaderNavigation } from "@/hooks/useHeaderNavigation";
import { useTranslations } from "next-intl";

export default function FooterCooperationLinks() {
    const { navigate } = useHeaderNavigation();
    const t = useTranslations("footer");

    return (
        <div>
            <h4 className="text-sm font-medium uppercase tracking-wide text-[#D97706]">
                {t("cooperation.title")}
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>
                    <button
                        onClick={() => navigate("rent-car")}
                        className="hover:text-white transition-colors text-left"
                    >
                        {t("cooperation.rental")}
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => navigate("company-car")}
                        className="hover:text-white transition-colors text-left"
                    >
                        {t("cooperation.company")}
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => navigate("own-car")}
                        className="hover:text-white transition-colors text-left"
                    >
                        {t("cooperation.own")}
                    </button>
                </li>
            </ul>
        </div>
    );
}
