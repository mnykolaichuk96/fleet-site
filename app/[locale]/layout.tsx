import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { ReactNode } from 'react';


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
        <html lang={locale} suppressHydrationWarning>
        <body suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
