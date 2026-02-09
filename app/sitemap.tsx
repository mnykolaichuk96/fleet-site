import { MetadataRoute } from "next";
import { carOffers } from "@/data/car-offer";

const SITE_URL = "https://gingerpartner.pl";
const LOCALES = ["pl", "en", "ua"];

export default function sitemap(): MetadataRoute.Sitemap {

    const staticPages = [
        "/",
        "/own-conditions",
        "/fleet-conditions",
        "/rental-conditions",
        "/cars"
    ];

    const urls: MetadataRoute.Sitemap = [];

    LOCALES.forEach((locale) => {

        staticPages.forEach((path) => {
            urls.push({
                url: `${SITE_URL}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.8
            });
        });

        carOffers.forEach((offer) => {
            urls.push({
                url: `${SITE_URL}/${locale}/cars/${offer.slug}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: 0.9
            });
        });

    });

    return urls;
}
