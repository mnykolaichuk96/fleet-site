import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['pl', 'ua', 'eu'],
    defaultLocale: 'pl'
});

export const config = {
    matcher: [
        '/',
        '/((?!api|_next|.*\\..*).*)'
    ]
};
