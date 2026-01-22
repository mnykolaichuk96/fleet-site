import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/lib/i18n';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    params: {
        locale: Locale;
    };
};

export type Locale = typeof locales[number];

export default async function LocaleLayout({ children, params }: Props){
    const { locale } = params;

    if (!locales.includes(locale)) notFound();

    const messages = (await import(`@/locales/${locale}.json`)).default;

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}