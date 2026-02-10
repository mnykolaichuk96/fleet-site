import "./globals.css";
// ⬆️ Глобальні стилі (Tailwind + власні component-класи)

import { NextIntlClientProvider } from 'next-intl';
// ⬆️ Провайдер, який робить переклади доступними
// у ВСІХ Client Components нижче по дереву

import type { Metadata } from "next";

import { notFound } from 'next/navigation';
// ⬆️ Функція Next.js для рендеру 404 сторінки

import { locales } from '@/lib/i18n';
// ⬆️ Масив дозволених локалей, наприклад: ['pl', 'ua', 'en']

import { ReactNode } from 'react';
// ⬆️ Тип для children (будь-який валідний React-вміст)

import Header from '@/components/layout/Header';
// ⬆️ Глобальний header (навігація)

import Footer from "@/components/Footer";
// ⬆️ Глобальний footer

import { getMessages } from 'next-intl/server';

import type { Viewport } from "next";
import DevNoCache from "@/components/DevNoCache";


// Тип Locale виводиться з масиву locales
// Аналог enum у Java
export type Locale = typeof locales[number];

// Кожна сторінка автоматично отримає Metadata Własny samochód | GinGer Partner
export const metadata: Metadata = {
    title: {
        template: "%s | GinGer Partner",
        default: "GinGer Partner"
    }
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

// Тип props, які Next.js передає layout
type Props = {
    children: ReactNode;

    // У Next 15 params передаються як Promise
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function LocaleLayout({ children, params }: Props) {

    const { locale } = await params;

    if (!locales.includes(locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
        <body className="min-h-screen flex flex-col">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "GinGer Partner",
                    url: "https://gingerpartner.pl",
                    logo: "https://gingerpartner.pl/logo.png",
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+48791863388",
                        contactType: "customer service",
                        areaServed: "PL",
                        availableLanguage: ["Polish", "English", "Ukrainian"]
                    }
                })
            }}
        />

        {/*
                  NextIntlClientProvider:
                  - отримує messages АВТОМАТИЧНО з getRequestConfig
                  - передає їх у всі Client Components
                */}
        <NextIntlClientProvider locale={locale} messages={messages}>

            <Header />

            <main className="flex-1">
                <DevNoCache />
                {children}
            </main>

            <Footer />

        </NextIntlClientProvider>

        </body>
        </html>
    );
}
