"use client";

import { useEffect } from "react";

export default function DevNoCache() {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            const url = new URL(window.location.href);

            if (!url.searchParams.has("v")) {
                url.searchParams.set("v", Date.now().toString());
                window.location.replace(url.toString());
            }
        }
    }, []);

    return null;
}
