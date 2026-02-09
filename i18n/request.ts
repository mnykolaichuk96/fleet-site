import { getRequestConfig } from 'next-intl/server';
// ⬆️ Функція next-intl, через яку ми описуємо
// як завантажувати переклади для кожного запиту

// Локаль за замовчуванням, якщо з якоїсь причини locale не передано
const DEFAULT_LOCALE = 'pl';

export default getRequestConfig(async ({ locale }) => {
    // Визначаємо фактичну мову:
    // або ту, що прийшла з URL (/pl, /ua, /en),
    // або fallback на DEFAULT_LOCALE
    const resolvedLocale = locale ?? DEFAULT_LOCALE;

    return {
        // Явно передаємо локаль у next-intl
        locale: resolvedLocale,

        // Обʼєкт messages — це ВСІ переклади,
        // які будуть доступні через getTranslations / useTranslations
        //
        // Кожен ключ тут = окремий namespace
        // (car-instance, home, header і т.д.)
        messages: {

            // Тексти для Header (навігація, CTA)
            header: (await import(`@/locales/${resolvedLocale}/header.json`)).default,

            // Тексти головної сторінки
            home: (await import(`@/locales/${resolvedLocale}/home.json`)).default,

            // Тексти сторінок з авто та моделями
            carOffer: (await import(`@/locales/${resolvedLocale}/car-offer.json`)).default,

            // Тексти для картки конкретного авто
            carInstance: (await import(`@/locales/${resolvedLocale}/car-instance.json`)).default,

            // Тексти для footer
            footer: (await import(`@/locales/${resolvedLocale}/footer.json`)).default,

            'rental-conditions': (await import(`@/locales/${resolvedLocale}/rental-conditions.json`)).default,
            'fleet-conditions': (await import(`@/locales/${resolvedLocale}/fleet-conditions.json`)).default,
            'own-conditions': (await import(`@/locales/${resolvedLocale}/own-conditions.json`)).default,
        }
    };
});
