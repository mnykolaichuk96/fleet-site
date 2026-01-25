import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from "@/components/Footer";


export type Locale = typeof locales[number];

type Props = {
    children: ReactNode;
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function LocaleLayout({ children, params }: Props) {

    // 👇 у Next 15 params = Promise
    const { locale } = await params;

    if (!locales.includes(locale)) notFound();

    const messages = (await import(`@/locales/${locale}.json`)).default;

    return (
        <html lang={locale}>
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
