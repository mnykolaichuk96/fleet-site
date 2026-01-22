import type { Metadata } from 'next';

export const siteName = "GinGer Partner Rzeszów";

export const createMetadata = (title: string, description: string):Metadata => ({
    title,
    description,
    openGraph: {
        title,
        description
    }
});
