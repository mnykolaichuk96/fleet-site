import Link from 'next/link';
import { useTranslations } from 'next-intl';
import HeaderCTA from "@/components/HeaderCTA";

/**
 * Header komponent
 * - wspólny dla całego serwisu
 * - prosty, czysty, bez logiki JS
 * - działa z routingiem /[locale]
 */
export default function Header() {
    const t = useTranslations('navigation');

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="font-bold text-lg">
                    <span className="text-red-600">Ginger</span> Partner
                </Link>

                {/* NAVIGATION */}
                <nav className="hidden md:flex gap-8 text-sm text-gray-700">
                    <HeaderCTA targetId="cars-preview">
                        {t("cars")}
                    </HeaderCTA>
                    <HeaderCTA targetId="cooperation-modes">
                        {t("drivers")}
                    </HeaderCTA>
                    <Link href="/#kontakt" className="hover:text-black">
                        {t('contact')}
                    </Link>
                </nav>

                {/* CTA */}
                <HeaderCTA targetId="contact-form" variant="primary">
                    {t("apply")}
                </HeaderCTA>
            </div>
        </header>
    );
}
