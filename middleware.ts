import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['pl', 'ua', 'en'],
    defaultLocale: 'pl'
});

export const config = {
    matcher: [
        '/',
        '/((?!api|_next|.*\\..*).*)'
    ]
};
