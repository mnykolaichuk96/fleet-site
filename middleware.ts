import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['pl', 'ua', 'eu'],
    defaultLocale: 'pl'
});

export const config = {
    matcher: [
        '/',
        '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|pl|ua|eu).*)'
    ]
};

