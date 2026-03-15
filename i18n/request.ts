import { getRequestConfig } from 'next-intl/server';

const DEFAULT_LOCALE = 'pl';

export default getRequestConfig(async ({ requestLocale }) => {
    const locale = (await requestLocale) ?? DEFAULT_LOCALE;

    return {
        locale,
        messages: {
            header: (await import(`@/locales/${locale}/header.json`)).default,
            home: (await import(`@/locales/${locale}/home.json`)).default,
            carOffer: (await import(`@/locales/${locale}/car-offer.json`)).default,
            carInstance: (await import(`@/locales/${locale}/car-instance.json`)).default,
            footer: (await import(`@/locales/${locale}/footer.json`)).default,
            'rental-conditions': (await import(`@/locales/${locale}/rental-conditions.json`)).default,
            'fleet-conditions': (await import(`@/locales/${locale}/fleet-conditions.json`)).default,
            'own-conditions': (await import(`@/locales/${locale}/own-conditions.json`)).default,
            policy: (await import(`@/locales/${locale}/policy.json`)).default,
            cookies: (await import(`@/locales/${locale}/cookies.json`)).default,
            'e-bike': (await import(`@/locales/${locale}/e-bike.json`)).default,
            faq: (await import(`@/locales/${locale}/faq.json`)).default,
        }
    };
});
