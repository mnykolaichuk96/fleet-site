import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/"
        },
        sitemap: "https://gingerpartner.pl/sitemap.xml",
        host: "https://gingerpartner.pl"

    };
}
