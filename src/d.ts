type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// Renamed from `PageProps` to avoid colliding with the global `PageProps`
// type that Next.js (>= 15.5) auto-generates for typed routes.
type AppPageProps = {
    params: Params;
    searchParams: SearchParams;
};
