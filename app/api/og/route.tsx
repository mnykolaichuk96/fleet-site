import { ImageResponse } from "next/og";
import { carOffers } from "@/data/car-offer";

export const runtime = "edge";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const titleParam = searchParams.get("title");

    let title = "GinGer Partner";
    let imageUrl = null;

    if (slug) {
        const offer = carOffers.find(o => o.slug === slug);
        if (offer) {
            title = `${offer.brand} ${offer.model}`;
            imageUrl = `https://gingerpartner.pl${offer.icon}`;
        }
    }

    if (!slug && titleParam) {
        title = titleParam;
    }

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#0A1A2F",
                    color: "white"
                }}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        style={{ width: 600 }}
                    />
                )}

                <h1 style={{ fontSize: 60, marginTop: 40 }}>
                    {title}
                </h1>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
