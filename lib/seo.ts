import type { Metadata } from "next"

const SITE_NAME = "GinGer Partner"
const SITE_URL = "https://gingerpartner.pl"

const SUPPORTED_LOCALES = ["pl", "en", "ua"] as const

const OG_LOCALE_MAP: Record<string, string> = {
    pl: "pl_PL",
    en: "en_US",
    ua: "uk_UA"
}

type Params = {
    title: string
    description: string
    pathname: string
    locale: string
    slug?: string
}

export function createMetadata({
                                   title,
                                   description,
                                   pathname,
                                   locale,
                                   slug
                               }: Params): Metadata {

    const canonicalUrl = `${SITE_URL}/${locale}${pathname}`

    const languages: Record<string, string> = {}

    SUPPORTED_LOCALES.forEach((loc) => {
        languages[loc] = `${SITE_URL}/${loc}${pathname}`
    })

    languages["x-default"] = `${SITE_URL}/pl${pathname}`

    const ogLocale = OG_LOCALE_MAP[locale] ?? "pl_PL"

    const ogImageUrl = slug
        ? `${SITE_URL}/api/og?slug=${slug}&locale=${locale}`
        : `${SITE_URL}/api/og?title=${encodeURIComponent(title)}&locale=${locale}`

    return {
        title: `${title} | ${SITE_NAME}`,
        description,

        alternates: {
            canonical: canonicalUrl,
            languages
        },

        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_NAME,
            locale: ogLocale,
            type: "website",
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630
                }
            ]
        },

        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImageUrl]
        },

        robots: {
            index: true,
            follow: true
        }
    }
}
