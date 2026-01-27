import "./globals.css";
// ⬆️ Глобальні стилі (Tailwind + власні component-класи)

import { NextIntlClientProvider } from 'next-intl';
// ⬆️ Провайдер, який робить переклади доступними
// у ВСІХ Client Components нижче по дереву

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


// Тип Locale виводиться з масиву locales
// Аналог enum у Java
export type Locale = typeof locales[number];


// Тип props, які Next.js передає layout
type Props = {
    children: ReactNode;

    // У Next 15 params передаються як Promise
    params: Promise<{
        locale: Locale;
    }>;
};

export default async function LocaleLayout({ children, params }: Props) {

    // Отримуємо locale з URL
    const { locale } = await params;

    // Перевіряємо, чи locale дозволена
    if (!locales.includes(locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
        <body className="min-h-screen flex flex-col">
        {/*
                  NextIntlClientProvider:
                  - отримує messages АВТОМАТИЧНО з getRequestConfig
                  - передає їх у всі Client Components
                */}
        <NextIntlClientProvider locale={locale}>

            <Header />

            <main className="flex-1">
                {children}
            </main>

            <Footer />

        </NextIntlClientProvider>

        </body>
        </html>
    );
}
